import * as THREE from 'three'

const createPlanet = ( children = [], radius=5, imgSrc, distanceFromSun, orbitColor  )=>{
    const planetGeometry = new THREE.IcosahedronGeometry(radius, 10);
    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load(`./textures/${imgSrc}`);
    const planetMaterial = new THREE.MeshBasicMaterial({ map });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    const planetOrbitGeometry = new THREE.RingGeometry(distanceFromSun, distanceFromSun+2, 500);
    const planetOrbitMaterial = new THREE.MeshBasicMaterial({ side:2, color:"grey" });
    const planetOrbit = new THREE.Mesh(planetOrbitGeometry, planetOrbitMaterial);

    planetOrbit.add(planet);

    planet.position.x = distanceFromSun;

    children.forEach((child) => {
        child.position.x = 30;
        planet.add(child);
    });

    const rate = Math.random();

    planetOrbit.userData.update = (t)=>{
        planet.rotation.z = t*rate;
        planetOrbit.rotation.z = t*rate;
        children.forEach(child => {
            child.userData.update?.(t);
        })
    }

    return planetOrbit;

}

export default createPlanet;