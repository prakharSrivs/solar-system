import * as THREE from 'three'

const createCorona  = ()=>{
    const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color("yellow"),
        side: THREE.BackSide,
    });
    const geo = new THREE.IcosahedronGeometry(50, 2);
    const mesh = new THREE.Mesh(geo, material);

    mesh.userData.update = (t)=>{
        const value = 1 + Math.abs(Math.sin(t)*0.04) ;
        mesh.scale.x = value;
        mesh.scale.y = value;
        mesh.scale.z = value;
    }

    return mesh;
}
  
const createSun = ()=>{
    const sunMat = new THREE.MeshStandardMaterial({emissive: 0xff0000});
    const geo = new THREE.SphereGeometry(50, 100, 100);
    const sun = new THREE.Mesh(geo, sunMat);

    const sunLight = new THREE.PointLight(0xffff99, 10);
    sun.add(sunLight);

    const hemiLight = new THREE.HemisphereLight( 0x0000ff, 0x00ff00, 0.6 ); 
    sun.add(hemiLight)

    const coronaMesh = createCorona();
    sun.add(coronaMesh);

    const coronaMesh2 = createCorona();
    sun.add(coronaMesh2)

    sun.userData.update = (t)=>{
        sun.rotation.y = t;
        coronaMesh.userData.update(t);
    }

    return sun;
}

export default createSun;