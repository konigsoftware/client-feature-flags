!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).clientFeatureFlags={})}(this,function(e){function t(e,t){localStorage.setItem(e,t)}function n(e){localStorage.removeItem(e)}var a;!function(e){e.example_flag="example_flag"}(a||(a={}));var o=Object.values(a);e.isFeatureFlagEnabled=function(e){return"true"===function(e){return localStorage.getItem(e)}(e)},e.parseQueryParamsToFlags=function(e){for(var a=0,l=Object.entries(e);a<l.length;a++){var r=l[a],f=r[0],i=r[1];if(o.includes(f))switch(i){case"true":t(f,i);break;case"false":n(f)}}}});
//# sourceMappingURL=feature-flags.umd.js.map