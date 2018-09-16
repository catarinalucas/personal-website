var scene1 = document.getElementById('scene1');
var scene2 = document.getElementById('scene2');
var scene3 = document.getElementById('scene3');
var scene4 = document.getElementById('scene4');

var parallaxInstance = new Parallax(scene1, {
  pointerEvents: true,
  relativeInput: true,
  limitX: false,
  limitY: false,
});

var parallaxInstance = new Parallax(scene2, {
  pointerEvents: true,
  relativeInput: true,
  limitX: false,
  limitY: false,
  invertX: false
});

var parallaxInstance = new Parallax(scene3, {
  pointerEvents: true,
  relativeInput: true,
  limitX: false,
  limitY: false,
});

var parallaxInstance = new Parallax(scene4, {
  pointerEvents: true,
  relativeInput: true,
  limitX: false,
  limitY: false,
  invertX: false
});
