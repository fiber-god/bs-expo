// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Expo                = require("expo");
var ReasonReact         = require("reason-react/lib/js/src/ReasonReact.js");
var FileSystem$BsExpo   = require("bs-expo/lib/js/src/fileSystem.js");
var Text$BsReactNative  = require("bs-react-native/lib/js/src/components/text.js");
var View$BsReactNative  = require("bs-react-native/lib/js/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/lib/js/src/style.js");

console.log("Hell");

console.log(Expo.FileSystem.cacheDirectory);

function app() {
  return ReasonReact.element(/* None */0, /* None */0, View$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[Style$BsReactNative.style(/* :: */[
                          Style$BsReactNative.flex(1),
                          /* :: */[
                            Style$BsReactNative.justifyContent(/* Center */2),
                            /* :: */[
                              Style$BsReactNative.alignItems(/* Center */2),
                              /* [] */0
                            ]
                          ]
                        ])], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* array */[ReasonReact.element(/* None */0, /* None */0, Text$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["Reason is awesome!"], /* array */[]))]));
}

exports.app = app;
/*  Not a pure module */
