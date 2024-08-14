import * as THREE from "three"

const randomizedSizes = ()=>{
    return 1;
}

const createStar = (positionX, positionY, positionZ)=>{
    const radius = randomizedSizes();
    const material = new THREE.MeshBasicMaterial({ color: "white" });
    const geometry = new THREE.SphereGeometry(radius,100,100);
    const cubeMesh = new THREE.Mesh(geometry, material);

    cubeMesh.position.setX(positionX);
    cubeMesh.position.setY(positionY);
    cubeMesh.position.setZ(positionZ);


    return cubeMesh;
}

const createStarField = ( starsCount )=>{

    const starField = new THREE.Scene();

    while(starsCount-->0){
        let x =  Math.sin(Math.random()*1000)*2000;
        let y =  Math.sin(Math.random()*1000)*2000;
        let z =  Math.sin(Math.random()*1000)*2000;
        let starMesh = createStar(x, y, z);
        starField.add(starMesh);
    }

    starField.userData.update = (t)=>{

    }

    return starField;
}

export default createStarField;
