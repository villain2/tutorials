var width       = window.innerWidth;
var height      = window.innerHeight;

var renderer    = new THREE.WEBGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var scene       = new THREE.Scene;
