import * as THREE from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import createSun from "./planets/createSun";
import createStarField from "./planets/createStarField";
import createPlanet from "./planets/createPlanet";
import createMoon from "./planets/createMoon";
import createRing from "./planets/createRing";

const canvas = document.querySelector("#threejs");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 0.01, 3000);
camera.position.z = 1000;
const useAnimatedCamera = true;

const scene = new THREE.Scene();
const solarSystem = new THREE.Group();
scene.add(solarSystem);

const sun = createSun();
solarSystem.add(sun);

const starField = createStarField(1000);
solarSystem.add(starField);

const mercury = createPlanet( [], 7, "mercury.png", 100, "purple");
solarSystem.add(mercury);

const venus = createPlanet( [], 17, "venus.png", 150, "yellow" );
solarSystem.add(venus);

const moon = createMoon();
const earth = createPlanet([moon], 18, "earth.png", 350, "blue" );
solarSystem.add(earth);

const mars = createPlanet( [], 10, "mars.png", 500, "red" );
solarSystem.add(mars);

const jupiter = createPlanet( [], 40, "jupiter.png", 600, "brown" );
solarSystem.add(jupiter);

const saturn = createPlanet( [], 16, "saturn.png", 800, "sky-blue");
solarSystem.add(saturn);

const uranus = createPlanet( [], 20, "uranus.png", 1000, "navy-blue" );
solarSystem.add(uranus);

const neptune = createPlanet( [], 20, "neptune.png", 1100, "purple");
solarSystem.add(neptune);

solarSystem.userData.update = (t)=>{
  solarSystem.children.forEach((child) => {
    child.userData?.update(t);
  })
}

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;


window.addEventListener("resize",()=>{
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

const clock = new THREE.Clock();
let cameraDistance = 1000;

const renderLoop = ()=>{
  const t = clock.getElapsedTime();
  renderer.render(scene, camera);
  solarSystem.userData.update(t); 
  controls.update()
  window.requestAnimationFrame(renderLoop);
}

renderLoop();