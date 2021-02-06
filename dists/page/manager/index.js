"use strict";

require("./index.css");

require("./indexless.less");

var _manager = _interopRequireDefault(require("./manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var syntax = function syntax() {
  var _objs$child, _;

  var objs = {
    a: "1",
    child: {
      son: "hell"
    }
  };
  var x = 11;
  var a = x > 10 ? 'big' : 'small';
  console.log("babel插件", objs === null || objs === void 0 ? void 0 : (_objs$child = objs.child) === null || _objs$child === void 0 ? void 0 : _objs$child.son, (_ = 1) !== null && _ !== void 0 ? _ : "aaa", a);
};

function firstDom() {
  var _this = this;

  var fun = function fun() {
    console.log("this1", this, window);
  };

  var obj = {
    name: "linsh",
    fun: function fun() {
      console.log("this2", _this);
    }
  };
  fun();
  syntax(); //

  var el = document.createElement("div");
  el.classList.add("head");
  el.innerHTML = '111';
  var btn = document.createElement("button");
  btn.innerHTML = "113331";
  btn.addEventListener("click", function () {
    new _manager.default({
      name: "linsh",
      age: 11
    });
  });
  el.appendChild(btn);
  return el;
}

document.getElementById('root').appendChild(firstDom());