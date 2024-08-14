
import * as THREE from 'three'

const createMoon = ()=>{
    const moonGeometry = new THREE.IcosahedronGeometry(5, 32);
    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load('/textures/moon.png');
    // const moonMaterial = new THREE.MeshStandardMaterial({ map, color:"white" });
    const moonMaterial = new THREE.MeshBasicMaterial({ color:"grey" })
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    moon.userData.update = (t) => {
        moon.rotation.x = t;
    }

    return moon;
}

export default createMoon;