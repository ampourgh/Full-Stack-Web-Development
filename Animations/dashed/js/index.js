var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var _THREE =


THREE,WebGLRenderer = _THREE.WebGLRenderer,Scene = _THREE.Scene,PerspectiveCamera = _THREE.PerspectiveCamera,Mesh = _THREE.Mesh,Color = _THREE.Color,Vector3 = _THREE.Vector3,SplineCurve = _THREE.SplineCurve,Path = _THREE.Path;

var getRandomFloat = function getRandomFloat(min, max) {return Math.random() * (max - min) + min;};

/* --------------------------- */
/* ----------- CORE ---------- */
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;var
Webgl = function () {
  function Webgl(w, h) {_classCallCheck(this, Webgl);
    this.meshCount = 0;
    this.meshListeners = [];
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(50, w / h, 1, 1000);
    this.camera.position.set(0, 0, 500);
    this.dom = this.renderer.domElement;
    this.update = this.update.bind(this);
    this.resize = this.resize.bind(this);
    this.resize(w, h); // set render size
  }_createClass(Webgl, [{ key: 'add', value: function add(
    mesh) {
      this.scene.add(mesh);
      if (!mesh.update) return;
      this.meshListeners.push(mesh.update);
      this.meshCount++;
    } }, { key: 'remove', value: function remove(
    mesh) {
      var idx = this.meshListeners.indexOf(mesh.update);
      if (idx < 0) return;
      this.scene.remove(mesh);
      this.meshListeners.splice(idx, 1);
      this.meshCount--;

    } }, { key: 'update', value: function update()
    {
      var i = this.meshCount;
      while (--i >= 0) {
        this.meshListeners[i].apply(this, null);
      }
      this.renderer.render(this.scene, this.camera);
    } }, { key: 'resize', value: function resize(
    w, h) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    } }]);return Webgl;}();

var webgl = new Webgl(windowWidth, windowHeight);
document.body.appendChild(webgl.dom);
/* --------- CORE END -------- */
/* --------------------------- */

/* --------------------------- */
/* ------ CREATING ZONE ------ */

var LINE_WIDTH = 1.5;
var NBR_OF_LINES = 25;
var NBR_OF_CURVES = 10;
var SIZE = 1000;
var AMPL_MAX = 150;
var COLORS = [
              '#02C39A',
              '#00A896',
              '#028090',
              '#05668D',
              '#FBB13C',
              '#EF476F',
              '#ff672d'
             ];

var DashedCurve = function (_Mesh) {_inherits(DashedCurve, _Mesh);
  function DashedCurve() {

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$size = _ref.size,size = _ref$size === undefined ? SIZE : _ref$size,_ref$ampl = _ref.ampl,ampl = _ref$ampl === undefined ? AMPL_MAX : _ref$ampl,_ref$dashArray = _ref.dashArray,dashArray = _ref$dashArray === undefined ? getRandomFloat(0.01, 2) : _ref$dashArray,_ref$dashOffset = _ref.dashOffset,dashOffset = _ref$dashOffset === undefined ? 0 : _ref$dashOffset,_ref$dashRatio = _ref.dashRatio,dashRatio = _ref$dashRatio === undefined ? getRandomFloat(0.1, 0.9) : _ref$dashRatio,_ref$rotationSpeed = _ref.rotationSpeed,rotationSpeed = _ref$rotationSpeed === undefined ? getRandomFloat(0.003, 0.03) : _ref$rotationSpeed,_ref$color = _ref.color,color = _ref$color === undefined ? COLORS[0][0] : _ref$color;_classCallCheck(this, DashedCurve);
    var segmentLength = Math.floor(size / NBR_OF_CURVES);

    // CREATE POINTS
    var points = [];
    points.push(new Vector3(0, 0, 0));

    for (var i = 1; i < NBR_OF_CURVES - 1; i++) {
      var ratio = 1 - Math.abs(0.5 - segmentLength * i / size);
      points.push(new Vector3(
      -segmentLength * i,
      getRandomFloat(-ampl, ampl) * ratio,
      getRandomFloat(-ampl, ampl) * ratio));
    }

    points.push(new Vector3(-segmentLength * NBR_OF_CURVES, 0, 0));
    // create geometry
    var curve = new SplineCurve(points);
    var path = new Path(curve.getPoints(40));
    var geometry = path.createPointsGeometry(40);
    var line = new MeshLine();

    line.setGeometry(geometry, function (p) {
      var a = (0.5 - Math.abs(0.5 - p)) * 5;
      return a;
    });

    // create material
    // create mesh line
    var material = new MeshLineMaterial({
      color: new Color(color),
      lineWidth: LINE_WIDTH,
      // 0 -> no dash ; 1 -> alf dashline length ; 2 -> dashline === length
      dashArray: dashArray,
      // increment him to animate the dash
      dashOffset: dashOffset,
      // 0.5 -> balancing ; 0.1 -> more line : 0.9 -> more void
      dashRatio: dashRatio,
      // side: DoubleSide,
      transparent: true,
      depthWrite: false });var _this = _possibleConstructorReturn(this, (DashedCurve.__proto__ || Object.getPrototypeOf(DashedCurve)).call(this,


    line.geometry, material));
    _this.position.x = size * 0.5;
    _this.rotationSpeed = rotationSpeed;

    _this.update = _this.update.bind(_this);return _this;
  }_createClass(DashedCurve, [{ key: 'update', value: function update()

    {
      this.material.uniforms.dashOffset.value += 0.005;
      this.rotation.x += this.rotationSpeed;
    } }]);return DashedCurve;}(Mesh);


// ########
// START
// Lines
var curves = [];

// CREATING EACH INDIVIDUAL LINE (COLOR + CURVES)
function addCurvedLine(i) {
  var dashedCurve = new DashedCurve({ color: COLORS[i % COLORS.length] });
  dashedCurve.rotation.x = getRandomFloat(3, 7);
  webgl.add(dashedCurve);
  curves.push(dashedCurve);
}

for (var i = 0; i < NBR_OF_LINES; i++) {
  addCurvedLine(i);
}

document.body.addEventListener('click', function () {
  for (var _i = 0; _i < NBR_OF_LINES; _i++) {
    webgl.remove(curves[0]);
    curves.splice(0, 1);
  }
  for (var _i2 = 0; _i2 < NBR_OF_LINES; _i2++) {
    addCurvedLine(_i2);
  }
});

/* ---- CREATING ZONE END ---- */
/* --------------------------- */

/* --------------------------- */
/* ------- CORE FOOTER ------- */var
CameraMouseControl = function () {

  function CameraMouseControl(camera) {_classCallCheck(this, CameraMouseControl);
    this.camera = camera;
    this.lookAt = new Vector3();
    this.position = { x: 0, y: 0 };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.update = this.update.bind(this);
    document.body.addEventListener('mousemove', this.handleMouseMove);

  }_createClass(CameraMouseControl, [{ key: 'handleMouseMove', value: function handleMouseMove(
    event) {

      // HOW FAR USER CAN ROTATE AROUND THE CAMERA
      this.position.x = -(event.clientX / window.innerWidth - 0.5) * 500;
      this.position.y = (event.clientY / window.innerHeight - 0.5) * 500;

    } }, { key: 'update', value: function update()
    {
      this.camera.position.x += (this.position.x - this.camera.position.x) * 0.05;
      this.camera.position.y += (this.position.y - this.camera.position.y) * 0.05;
      this.camera.lookAt(this.lookAt);
    } }]);return CameraMouseControl;

}();

var cameraControl = new CameraMouseControl(webgl.camera);

function _onResize() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  webgl.resize(windowWidth, windowHeight);
}

window.addEventListener('resize', _onResize);
window.addEventListener('orientationchange', _onResize);

/* ---- LOOP ---- */
function _loop() {
  webgl.update();
  cameraControl.update();
  requestAnimationFrame(_loop);
}

_loop();
/* ----- CORE FOOTER END ----- */
/* --------------------------- */
