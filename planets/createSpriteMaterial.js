import * as THREE from 'three'

function createSpriteMaterial({ color, opacity, pos, size }) {
    const spriteMat = new THREE.SpriteMaterial({
      color,
      map: loader.load("./src/rad-grad.png"),
      transparent: true,
      opacity,
    });
    spriteMat.color.offsetHSL(0, 0, Math.random() * 0.2 - 0.1);
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.set(pos.x, -pos.y, pos.z);
    size += Math.random() - 0.5;
    sprite.scale.set(size, size, size);
    sprite.material.rotation = 0;
    return sprite;
}

export default createSpriteMaterial;