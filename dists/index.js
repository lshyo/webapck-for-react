"use strict";

require("core-js/modules/es6.object.assign.js");

require("core-js/modules/es6.promise.js");

require("core-js/modules/es6.object.to-string.js");

var test = function test() {
  var _objs$child;

  new Promise.resolve("abc").then(function (res) {
    return alert(res);
  });
  var objs = {
    a: "1",
    child: {
      son: "hell"
    }
  };
  var newobjs = Object.assign(objs, {
    b: "222"
  });
  console.log("babel插件", objs === null || objs === void 0 ? void 0 : (_objs$child = objs.child) === null || _objs$child === void 0 ? void 0 : _objs$child.son);
};

test();