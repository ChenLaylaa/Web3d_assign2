function createPond(material, scene){
var pi = Math.PI;
var r45 = (45 * pi)/180;


var geometry = new THREE.CircleGeometry( 20, 64 );
var circle = new THREE.Mesh( geometry, material );
material.side = THREE.DoubleSide;
circle.rotation.x = pi/2;
circle.position.set(0,-Math.cos(r45)-0.1,0);
scene.add( circle );



}
