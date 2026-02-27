"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    AFRAME: any;
    THREE: any;
  }
}

const PokeGridBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneCreated = useRef(false);

  useEffect(() => {
    if (sceneCreated.current) return;

    const initScene = () => {
      if (!containerRef.current || sceneCreated.current) return;
      
      registerComponents();
      createScene();
      sceneCreated.current = true;
    };

    // Check if A-Frame is already loaded
    if (window.AFRAME) {
      initScene();
      return;
    }

    // Load A-Frame script
    const script = document.createElement("script");
    script.src = "https://aframe.io/releases/1.7.1/aframe.min.js";
    script.async = true;
    script.onload = () => {
      initScene();
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
    };
  }, []);

  const registerComponents = () => {
    const AFRAME = window.AFRAME;
    if (!AFRAME) return;

    // Prevent re-registration
    if (AFRAME.components["poke-fit-frustum"]) return;

    AFRAME.registerComponent("poke-fit-frustum", {
      init: function () {
        window.addEventListener("resize", () => this.fitToCamera());
        this.fitToCamera();
      },
      fitToCamera: function () {
        const el = this.el;
        const sceneEl = el.sceneEl;
        const camera = sceneEl.camera;

        if (!camera) {
          sceneEl.addEventListener("camera-set-active", () =>
            this.fitToCamera()
          );
          return;
        }

        const distance =
          camera.el.object3D.position.y - el.object3D.position.y;
        const vFov = (camera.fov * Math.PI) / 180;
        const visibleHeight = 2 * Math.tan(vFov / 2) * distance;
        const aspect = window.innerWidth / window.innerHeight;
        const visibleWidth = visibleHeight * aspect;

        el.setAttribute("width", visibleWidth);
        el.setAttribute("height", visibleHeight);
      },
    });

    AFRAME.registerComponent("poke-mouse-tracker", {
      init: function () {
        this.mouseWorldPos = new window.THREE.Vector3(0, 0, 0);
        this.mouseNDC = { x: 0, y: 0 };
        this.raycaster = new window.THREE.Raycaster();
        this.planeY = 5; // Y position of the invisible plane
        
        // Track mouse globally (works even when background is behind other elements)
        this.onMouseMove = (event: MouseEvent) => {
          this.mouseNDC.x = (event.clientX / window.innerWidth) * 2 - 1;
          this.mouseNDC.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        
        window.addEventListener("mousemove", this.onMouseMove);
      },
      remove: function () {
        window.removeEventListener("mousemove", this.onMouseMove);
      },
      tick: function () {
        const camera = this.el.sceneEl.camera;
        if (!camera) return;
        
        // Update raycaster from mouse position
        this.raycaster.setFromCamera(this.mouseNDC, camera);
        
        // Calculate intersection with horizontal plane at y = planeY
        const planeNormal = new window.THREE.Vector3(0, 1, 0);
        const planePoint = new window.THREE.Vector3(0, this.planeY, 0);
        const plane = new window.THREE.Plane().setFromNormalAndCoplanarPoint(planeNormal, planePoint);
        
        const intersectPoint = new window.THREE.Vector3();
        this.raycaster.ray.intersectPlane(plane, intersectPoint);
        
        if (intersectPoint) {
          this.mouseWorldPos.copy(intersectPoint);
        }
      },
    });

    AFRAME.registerComponent("poke-pillar-grid", {
      schema: {
        width: { default: 1.5 },
        depth: { default: 1.5 },
        height: { default: 10 },
        spacing: { default: 0.2 },
      },
      init: function () {
        this.pillars = [];
        window.addEventListener("resize", () => this.updateGrid());
        setTimeout(() => this.updateGrid(), 100);
      },
      updateGrid: function () {
        const frustumPlane = this.el.sceneEl.querySelector("[poke-fit-frustum]");
        if (!frustumPlane) return;

        const vWidth = parseFloat(frustumPlane.getAttribute("width") || "0");
        const vHeight = parseFloat(frustumPlane.getAttribute("height") || "0");

        const colWidth = this.data.width + this.data.spacing;
        const rowDepth = this.data.depth + this.data.spacing;

        let cols = Math.floor(vWidth / colWidth) + 2;
        if (cols % 2 === 0) cols++;

        let rows = Math.floor(vHeight / rowDepth) + 2;
        if (rows % 2 === 0) rows++;

        const totalNeeded = cols * rows;

        while (this.pillars.length > totalNeeded) {
          const p = this.pillars.pop();
          p.parentNode.removeChild(p);
        }

        while (this.pillars.length < totalNeeded) {
          const p = document.createElement("a-box");
          p.setAttribute("width", this.data.width);
          p.setAttribute("depth", this.data.depth);
          p.setAttribute("height", this.data.height);
          p.setAttribute("color", "#1a2235");
          p.setAttribute("metalness", "0.7");
          p.setAttribute("roughness", "0.3");
          p.setAttribute("poke-distance-checker", "");
          this.el.appendChild(p);
          this.pillars.push(p);
        }

        const offsetX = ((cols - 1) * colWidth) / 2;
        const offsetZ = ((rows - 1) * rowDepth) / 2;

        for (let i = 0; i < this.pillars.length; i++) {
          const r = Math.floor(i / cols);
          const c = i % cols;

          const x = c * colWidth - offsetX;
          const z = r * rowDepth - offsetZ;

          this.pillars[i].setAttribute("position", `${x} 0 ${z}`);
        }
      },
    });

    AFRAME.registerComponent("poke-distance-checker", {
      schema: {
        radius: { default: 4 },
        minElevation: { default: 0 },
        maxElevation: { default: 3 },
      },
      init: function () {
        this.tracker = null;
        this.myPos = this.el.object3D.position;
        this.baseY = this.data.minElevation;
        this.currentY = this.baseY;
        this.velocity = 0;
        
        // Find the camera with mouse-tracker after scene is loaded
        this.el.sceneEl.addEventListener("loaded", () => {
          const cameraEl = this.el.sceneEl.querySelector("[poke-mouse-tracker]");
          if (cameraEl) {
            this.tracker = cameraEl.components["poke-mouse-tracker"];
          }
        });
      },
      tick: function (time: number, delta: number) {
        if (!this.tracker) {
          const cameraEl = this.el.sceneEl.querySelector("[poke-mouse-tracker]");
          if (cameraEl && cameraEl.components["poke-mouse-tracker"]) {
            this.tracker = cameraEl.components["poke-mouse-tracker"];
          }
          return;
        }
        
        if (!this.tracker.mouseWorldPos) return;

        const mousePos = this.tracker.mouseWorldPos;
        const dt = Math.min(delta / 1000, 0.05); // Cap delta time

        const dx = mousePos.x - this.myPos.x;
        const dz = mousePos.z - this.myPos.z;
        const dist = Math.sqrt(dx * dx + dz * dz);

        // Smooth falloff with cubic easing for a natural "poke" bulge
        let influence = Math.max(0, 1 - dist / this.data.radius);
        influence = influence * influence * (3 - 2 * influence); // Smoothstep

        // Pillars rise UP toward the mouse (positive Y direction)
        const targetY = this.baseY + influence * this.data.maxElevation;

        // Spring physics for bouncy, organic movement
        const stiffness = 12;
        const damping = 6;
        const acceleration = stiffness * (targetY - this.currentY) - damping * this.velocity;
        this.velocity += acceleration * dt;
        this.currentY += this.velocity * dt;

        this.myPos.y = this.currentY;
      },
    });
  };

  const createScene = () => {
    if (!containerRef.current) return;

    // Create scene
    const scene = document.createElement("a-scene");
    scene.setAttribute("embedded", "");
    scene.setAttribute("xr-mode-ui", "enabled: false");
    scene.setAttribute("vr-mode-ui", "enabled: false");
    scene.setAttribute("loading-screen", "enabled: false");
    scene.style.position = "absolute";
    scene.style.inset = "0";

    // Create camera
    const camera = document.createElement("a-camera");
    camera.setAttribute("look-controls-enabled", "false");
    camera.setAttribute("wasd-controls-enabled", "false");
    camera.setAttribute("position", "0 10 0");
    camera.setAttribute("rotation", "-90 0 0");
    camera.setAttribute("poke-mouse-tracker", "");
    scene.appendChild(camera);

    // Create raycast plane (visual reference, not needed for raycasting anymore)
    const plane = document.createElement("a-plane");
    plane.classList.add("poke-receive-ray");
    plane.setAttribute("position", "0 5 0");
    plane.setAttribute("rotation", "-90 0 0");
    plane.setAttribute("width", "38.4");
    plane.setAttribute("height", "21.6");
    plane.setAttribute("opacity", "0.0");
    plane.setAttribute("color", "#000000");
    plane.setAttribute("poke-fit-frustum", "");
    scene.appendChild(plane);

    // Create pillar grid entity
    const gridEntity = document.createElement("a-entity");
    gridEntity.setAttribute("poke-pillar-grid", "width: 1.5; depth: 1.5; height: 10; spacing: 0.2");
    scene.appendChild(gridEntity);

    // Create lights
    const light1 = document.createElement("a-light");
    light1.setAttribute("position", "0 11 0");
    light1.setAttribute("type", "point");
    light1.setAttribute("intensity", "3");
    light1.setAttribute("color", "#4fd1c5");
    scene.appendChild(light1);

    const light2 = document.createElement("a-light");
    light2.setAttribute("position", "-5 11 -5");
    light2.setAttribute("type", "point");
    light2.setAttribute("intensity", "2");
    light2.setAttribute("color", "#667eea");
    scene.appendChild(light2);

    // Create sky
    const sky = document.createElement("a-sky");
    sky.setAttribute("color", "#0a0f1a");
    scene.appendChild(sky);

    containerRef.current.appendChild(scene);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#0a0f1a" }}
    />
  );
};

export default PokeGridBackground;
