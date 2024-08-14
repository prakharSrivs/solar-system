import * as THREE from 'three'

const createRing = ()=>{
    const ringGeo = new THREE.TorusGeometry(16.6, 0.15, 8, 64);
    const ringMat = new THREE.MeshStandardMaterial();
    const saturnRing = new THREE.Mesh(ringGeo, ringMat);
    saturnRing.scale.z = 0.1;
    saturnRing.rotation.x = Math.PI * 0.5;

    return saturnRing;
}

export default createRing;