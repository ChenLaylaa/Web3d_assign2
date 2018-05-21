function createFilledMode(){
var torso_material = new THREE.MeshBasicMaterial({color:0x00ff00});
var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var eyes_material = new THREE.MeshBasicMaterial({color:0x000000});
init(scene)
createFrog(material,eyes_material,torso_material,scene);

}


function createFrameMode() {
var wir_torso_material = new THREE.MeshBasicMaterial({color:0x00ff00,wireframe:true,wireLinewidth:100});
var wir_material = new THREE.MeshBasicMaterial({color:0x00ff00,wireframe:true,wireLinewidth:100});
var wir_eyes_material = new THREE.MeshBasicMaterial({color:0x000000,wireframe:true,wireLinewidth:100});
init(scene2);
createFrog(wir_material,wir_eyes_material,wir_torso_material,scene2);
}
