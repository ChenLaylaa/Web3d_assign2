//init the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//frog scene graph

//torso
var torso = new THREE.Geometry();
var pi = Math.PI;
var r36 = (36 * pi) / 180;
var r72 = (72 * pi) / 180;


//vertices of torso
torso.vertices.push(new THREE.Vector3(-1,0,0));
torso.vertices.push(new THREE.Vector3(- Math.cos(r72),0,Math.sin(r72)));
torso.vertices.push(new THREE.Vector3(Math.cos(r36),0, Math.sin(r36)));
torso.vertices.push(new THREE.Vector3(Math.cos(r36),0,- Math.sin(r36)));
torso.vertices.push(new THREE.Vector3(- Math.cos(r72),0,- Math.sin(r72)));
torso.vertices.push(new THREE.Vector3(0,0.5,0));
torso.vertices.push(new THREE.Vector3(0,-0.5,0));



//faces of torso
torso.faces.push(new THREE.Face3(0,1,5));
torso.faces.push(new THREE.Face3(1,2,5));
torso.faces.push(new THREE.Face3(2,3,5));
torso.faces.push(new THREE.Face3(3,4,5));
torso.faces.push(new THREE.Face3(0,4,5));
torso.faces.push(new THREE.Face3(0,1,6));
torso.faces.push(new THREE.Face3(1,2,6));
torso.faces.push(new THREE.Face3(2,3,6));
torso.faces.push(new THREE.Face3(3,4,6));
torso.faces.push(new THREE.Face3(0,4,6));


//diamond
var diamond = new THREE.Geometry();
diamond.vertices.push(new THREE.Vector3(-0.5,0,0));
diamond.vertices.push(new THREE.Vector3(0,0,0.25));
diamond.vertices.push(new THREE.Vector3(0.5,0,0));
diamond.vertices.push(new THREE.Vector3(0,0,-0.25));
diamond.vertices.push(new THREE.Vector3(0,0.25,0));
diamond.vertices.push(new THREE.Vector3(0,-0.25,0));

//faces for diamond
diamond.faces.push(new THREE.Face3(0,1,4));
diamond.faces.push(new THREE.Face3(4,1,2));
diamond.faces.push(new THREE.Face3(1,5,2));
diamond.faces.push(new THREE.Face3(1,0,5));
diamond.faces.push(new THREE.Face3(0,3,4));
diamond.faces.push(new THREE.Face3(4,3,2));
diamond.faces.push(new THREE.Face3(3,5,2));
diamond.faces.push(new THREE.Face3(0,1,5));


//front left leg
var leftleg = new THREE.Geometry();
leftleg.vertices.push(new THREE.Vector3(-0.5,0,0));
leftleg.vertices.push(new THREE.Vector3(0,0,0.25));
leftleg.vertices.push(new THREE.Vector3(0.5,0,0));
leftleg.vertices.push(new THREE.Vector3(0,0,-0.25));
leftleg.vertices.push(new THREE.Vector3(0,0.25,0));
leftleg.vertices.push(new THREE.Vector3(0,-0.25,0));

//faces for leftleg
leftleg.faces.push(new THREE.Face3(0,1,4));
leftleg.faces.push(new THREE.Face3(4,1,2));
leftleg.faces.push(new THREE.Face3(1,5,2));
leftleg.faces.push(new THREE.Face3(1,0,5));
leftleg.faces.push(new THREE.Face3(0,3,4));
leftleg.faces.push(new THREE.Face3(4,3,2));
leftleg.faces.push(new THREE.Face3(3,5,2));
leftleg.faces.push(new THREE.Face3(0,1,5));

//front left leg
var rightleg = new THREE.Geometry();
rightleg.vertices.push(new THREE.Vector3(-0.5,0,0));
rightleg.vertices.push(new THREE.Vector3(0,0,0.25));
rightleg.vertices.push(new THREE.Vector3(0.5,0,0));
rightleg.vertices.push(new THREE.Vector3(0,0,-0.25));
rightleg.vertices.push(new THREE.Vector3(0,0.25,0));
rightleg.vertices.push(new THREE.Vector3(0,-0.25,0));

//faces for rightleg
rightleg.faces.push(new THREE.Face3(0,1,4));
rightleg.faces.push(new THREE.Face3(4,1,2));
rightleg.faces.push(new THREE.Face3(1,5,2));
rightleg.faces.push(new THREE.Face3(1,0,5));
rightleg.faces.push(new THREE.Face3(0,3,4));
rightleg.faces.push(new THREE.Face3(4,3,2));
rightleg.faces.push(new THREE.Face3(3,5,2));
rightleg.faces.push(new THREE.Face3(0,1,5));

//front left knee
var leftknee = new THREE.Geometry();
leftknee.vertices.push(new THREE.Vector3(-0.5,0,0));
leftknee.vertices.push(new THREE.Vector3(0,0,0.25));
leftknee.vertices.push(new THREE.Vector3(0.5,0,0));
leftknee.vertices.push(new THREE.Vector3(0,0,-0.25));
leftknee.vertices.push(new THREE.Vector3(0,0.25,0));
leftknee.vertices.push(new THREE.Vector3(0,-0.25,0));

//faces for leftknee
leftknee.faces.push(new THREE.Face3(0,1,4));
leftknee.faces.push(new THREE.Face3(4,1,2));
leftknee.faces.push(new THREE.Face3(1,5,2));
leftknee.faces.push(new THREE.Face3(1,0,5));
leftknee.faces.push(new THREE.Face3(0,3,4));
leftknee.faces.push(new THREE.Face3(4,3,2));
leftknee.faces.push(new THREE.Face3(3,5,2));
leftknee.faces.push(new THREE.Face3(0,1,5));





var material = new THREE.MeshBasicMaterial({color:0x00ff00});
var torso = new THREE.Mesh(torso, material);
var diamond = new THREE.Mesh(diamond, material);
var leftleg = new THREE.Mesh(leftleg, material);
var rightleg = new THREE.Mesh(rightleg, material);
var leftknee = new THREE.Mesh(leftknee, material);

leftknee.position.x=1.809;
leftknee.position.y=-0.588;
leftknee.position.z=-0.588;
//leftknee.rotation.z=0.785;


diamond.position.x = 1.309;

leftleg.position.x =1.159;
leftleg.position.y = -0.35;
leftleg.position.z = 0.588;
leftleg.rotation.z = -0.785;

rightleg.position.x =1.159;
rightleg.position.y = -0.35;
rightleg.position.z = -0.588;
rightleg.rotation.z = -0.785;

//scene.add(createAxes(5));

leftleg.add(leftknee);


//scene.add(axes);
scene.add(torso)
scene.add(diamond)
scene.add(leftleg)
scene.add(rightleg)
scene.add(leftknee)

torso.add(createAxes(5))
diamond.add(createAxes(5))
leftleg.add(createAxes(5))
rightleg.add(createAxes(5))
leftknee.add(createAxes(5))

//mesh.add(createAxes(3));
//var axes = new THREE.AxesHelper(5);
/*var axes2 = new THREE.AxesHelper(3);
var axes3 = new THREE.AxesHelper(3);
var axes4 = new THREE.AxesHelper(3);*/
//object.add(axes);
/*object2.add(axes2);
leftleg.add(axes3);
rightleg.add(axes4);*/

material.side = THREE.DoubleSide;
//torso.material.wireframe = true;

//render the scene
renderer.render(scene,camera);


var controls = new THREE.TrackballControls(camera);
controls.addEventListener('change', render);
animate();

function render() {
    renderer.render(scene, camera);
}

function animate() {
    render();
    requestAnimationFrame(animate);
    controls.update();
}
