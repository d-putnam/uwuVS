(this["webpackJsonpuwu-vs"]=this["webpackJsonpuwu-vs"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){e.exports=n(27)},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(17),l=n.n(o),i=(n(23),n(10)),s=n(7),u=n.n(s),c=n(9),d=n(0),m=n(1),h=n(2),f=n(3),v=n(6),g="\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform float u_0; // wave 1\n  uniform float u_1; // wave 2\n  uniform float u_2; // wave 3\n  uniform float u_3; // wave 4\n  uniform float u_4; // wave 5\n  uniform float u_5; // scanlines\n  uniform float u_6; // scan_rota\n  uniform float u_7; // zoom\n  uniform float u_8; // brightness\n\n  mat2 rotate(float angle){\n    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\n  }\n\n  void main(){\n    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * u_7 - u_7;\n    float color = 0.0;\n\n    color += sin(coord.x * u_0 + cos(u_time + coord.y * u_1 + sin(coord.x * u_2 + u_time * 2.0))) * 2.0;\n    color += cos(coord.x * u_3 + sin(u_time + coord.y * u_4 + cos(coord.x * 20.0 + u_time * 2.0))) * 2.0;\n\n    coord = rotate( u_6 ) * coord;\n    color *= cos(coord.y * u_5 + sin(u_time + coord.y)) * 5.5;\n\n    gl_FragColor = vec4(vec3(color, color, color + u_8 / 2.0) * 1.0 + u_8, 1.0 );\n  }\n",p="\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform float u_0;\n  uniform float u_1;\n  uniform float u_2;\n  uniform float u_3;\n  uniform float u_4;\n  uniform float u_5;\n  uniform float u_6; // rota\n  uniform float u_7; // zoom\n  uniform float u_8; // brightness\n\n\n  mat2 rotate(float angle){\n    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\n  }\n\n  void main(){\n    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * u_7;\n    float color = 0.0;\n\n    coord = rotate( u_6 ) * coord;\n\n    color += sin(coord.y) + atan(u_time + coord.y) + sin(u_0 * coord.x / u_time) * 2.0;\n    color += sin(coord.x * u_0 + tan(u_time + coord.y * u_2 + sin(coord.x * u_4 + u_time))) * 2.0;\n    color += cos(coord.x * u_1 + tan(u_time + coord.y * u_3 + cos(coord.x * u_5 + u_time))) * 2.0;\n\n    gl_FragColor = vec4(vec3(color - sin(coord.x * u_time) , color - cos(coord.y * u_time + 9.0), color - sin(coord.y * u_time)) * -0.5 + u_8, 1.0 );\n  }\n",w="\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform float u_0;\n  uniform float u_1;\n  uniform float u_2;\n  uniform float u_3;\n  uniform float u_4;\n  uniform float u_5;\n  uniform float u_6;\n  uniform float u_7;\n  uniform float u_8;\n\n\nvoid main(){\n  vec2 coord = 6.0 * vec2(gl_FragCoord.xy / u_resolution);\n\n  for(int i = 1; i < 4; i++) {\n    float n = float(i);\n    coord += vec2(u_7 / n * sin(n * coord.y + u_0 * n) + 0.8, 0.4 / n * sin(coord.x + u_1 * n) + 1.6);\n  }\n\n  vec3 color = vec3(u_1 * sin(coord.x) + 0.8, 0.5 * sin(coord.y) + 1.0, sin(coord.x + coord.y));\n  color += sin(coord.y * cos(u_time / 20.0)) + u_8 + sin(coord.y * cos(u_time / 30.0) * u_2);\n  color += sin(coord.x * sin(u_time / 30.0) * u_4) + cos(coord.x * cos((u_time / 200.0) ) * ((((u_time + 100.0) / 200.0) * u_6)) / u_4) / u_5 + 0.5;\n  color -= cos(coord.y * sin(u_time / 50.0) * u_3);\n\n  gl_FragColor = vec4(color, 1.20);\n}\n",b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).sceneSetup=function(){a.scene=new v.g,a.camera=new v.e(a.state.width/-2,a.state.width/2,a.state.height/2,a.state.height/-2,1,1e3),a.camera.position.z=2,a.clock=new v.a,a.now=a.clock.getElapsedTime(),a.geometry=new v.f(a.state.width,a.state.height),a.renderer=new v.j({antialias:!0}),a.renderer.setPixelRatio(window.devicePixelRatio),a.renderer.setSize(a.state.width,a.state.height),a.mount.appendChild(a.renderer.domElement)},a.drawSceneSetup=function(){a.drawScene=new v.g,a.drawTexture=new v.i(a.state.width,a.state.height,{minFilter:v.b,magFilter:v.b}),"0"===a.props.activeShader?a.fshader=g:"1"===a.props.activeShader?a.fshader=p:"2"===a.props.activeShader&&(a.fshader=w),a.drawMaterial=new v.h({uniforms:{u_resolution:{value:{x:a.state.width,y:a.state.height}},u_time:{value:a.now},u_0:{value:a.props.uniforms[0]},u_1:{value:a.props.uniforms[1]},u_2:{value:a.props.uniforms[2]},u_3:{value:a.props.uniforms[3]},u_4:{value:a.props.uniforms[4]},u_5:{value:a.props.uniforms[5]},u_6:{value:a.props.uniforms[6]},u_7:{value:a.props.uniforms[7]},u_8:{value:a.props.uniforms[8]}},fragmentShader:a.fshader}),a.drawPlane=new v.c(a.geometry,a.drawMaterial),a.drawScene.add(a.drawPlane)},a.brcosaSceneSetup=function(){a.brcosaScene=new v.g,a.brcosaTexture=new v.i(a.state.width,a.state.height,{minFilter:v.b,magFilter:v.b}),a.brcosaMaterial=new v.h({uniforms:{drawTexture:{type:"t",value:a.drawTexture.texture},u_resolution:{value:{x:a.state.width,y:a.state.height}},u_time:{value:a.now},u_9:{value:a.props.uniforms[9]},u_10:{value:a.props.uniforms[10]},u_11:{value:a.props.uniforms[11]}},fragmentShader:"\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform vec2 u_resolution; \n  uniform sampler2D drawTexture;\n  uniform float u_9;\n  uniform float u_10;\n  uniform float u_11;\n\n  vec3 hueShift(vec3 color, float hue) {\n    const vec3 k = vec3(0.57735, 0.57735, 0.57735);\n    float cosAngle = cos(hue);\n    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));\n  }\n\n  void main() {\n    vec2 st = gl_FragCoord.xy / (u_resolution);\n    vec2 uv = st;\n    uv *= 0.998;\n    vec3 texColor = texture2D(drawTexture, uv).rgb;\n\n    const vec3 LumCoeff = vec3(0.2125, 0.7154, 0.0721);\n    vec3 AvgLumin = vec3(0.5, 0.5, 0.5);\n    vec3 intensity = vec3(dot(texColor, LumCoeff));\n\n    vec3 satColor = mix(intensity, texColor, u_10);\n    vec3 conColor = mix(AvgLumin, satColor, u_9);\n\n    vec3 hueColor = hueShift(conColor, u_11);\n\n    gl_FragColor = vec4(1.0 * hueColor, 1.0);\n  }\n"}),a.brcosaPlane=new v.c(a.geometry,a.brcosaMaterial),a.brcosaScene.add(a.brcosaPlane)},a.fbxSceneSetup=function(){a.fbxScene=new v.g,a.textureA=new v.i(a.state.width,a.state.height,{minFilter:v.b,magFilter:v.b}),a.textureB=new v.i(a.state.width,a.state.height,{minFilter:v.b,magFilter:v.b}),a.fbxMaterial=new v.h({uniforms:{bufferTexture:{type:"t",value:a.textureA.texture},u_resolution:{value:{x:a.state.width,y:a.state.height}},drawTexture:{type:"t",value:a.brcosaTexture.texture},u_time:{value:a.now},u_12:{value:a.props.uniforms[12]},u_13:{value:a.props.uniforms[13]},u_14:{value:a.props.uniforms[14]},u_15:{value:a.props.uniforms[15]}},fragmentShader:"\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform vec2 u_resolution; //The width and height of our screen\n  uniform sampler2D bufferTexture; //Our input texture\n  uniform sampler2D drawTexture;\n  uniform float u_time;\n  uniform float u_12;\n  uniform float u_13;\n  uniform float u_14;\n  uniform float u_15;\n\n  void main() {\n    vec2 st = gl_FragCoord.xy / (u_resolution);\n    vec2 uv = st;\n    uv *= u_15;\n\n    vec4 sum = texture2D(bufferTexture, uv);\n    vec4 src = texture2D(drawTexture, uv);\n    sum.r = mix(sum.r, src.r,  sin(u_12));\n    sum.g = mix(sum.g, src.g,  sin(u_13));\n    sum.b = mix(sum.b, src.b,  sin(u_14));\n    gl_FragColor = sum;\n  }\n"}),a.fbxPlane=new v.c(a.geometry,a.fbxMaterial),a.fbxScene.add(a.fbxPlane),a.finalMaterial=new v.d({map:a.textureB}),a.outputPlane=new v.c(a.geometry,a.finalMaterial),a.scene.add(a.outputPlane)},a.startAnimationLoop=function(){a.now=a.clock.getElapsedTime(),a.drawMaterial.uniforms.u_time.value=a.now,a.fbxMaterial.uniforms.u_time.value=a.now,a.renderer.setRenderTarget(a.drawTexture),a.renderer.render(a.drawScene,a.camera),a.renderer.setRenderTarget(null),a.renderer.setRenderTarget(a.brcosaTexture),a.renderer.render(a.brcosaScene,a.camera),a.renderer.setRenderTarget(null),a.renderer.setRenderTarget(a.textureB),a.renderer.render(a.fbxScene,a.camera),a.renderer.setRenderTarget(null);var e=a.textureA;a.textureA=a.textureB,a.textureB=e,a.outputPlane.material.map=a.textureB.texture,a.fbxMaterial.uniforms.bufferTexture.value=a.textureA.texture,a.renderer.render(a.scene,a.camera),a.requestID=window.requestAnimationFrame(a.startAnimationLoop)},a.handleWindowResize=function(){console.log("hey"),a.setState({width:window.innerWidth,height:window.outerHeight}),a.renderer.setSize(window.innerWidth,window.innerHeight),a.camera.aspect=a.state.width/a.state.height,a.camera.updateProjectionMatrix()},a.updateSliders=function(){for(var e=0;e<16;e++){var t="u_"+e,n=a.props.uniforms[e];e<9?a.drawMaterial.uniforms[t]={value:n}:e>=9&&e<=11?a.brcosaMaterial.uniforms[t]={value:n}:e>11&&(a.fbxMaterial.uniforms[t]={value:n})}},a.changeShader=function(){"0"===a.props.activeShader?a.drawMaterial.fragmentShader=g:"1"===a.props.activeShader?a.drawMaterial.fragmentShader=p:a.drawMaterial.fragmentShader=w,a.drawMaterial.needsUpdate=!0},a.state={width:window.innerWidth,height:window.outerHeight},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.drawSceneSetup(),this.brcosaSceneSetup(),this.fbxSceneSetup(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"componentDidUpdate",value:function(){this.updateSliders(),this.changeShader()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"canvas",ref:function(t){return e.mount=t}})}}]),n}(a.Component),S=["svgRef","title"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),x=r.a.createElement("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"}),C=function(e){var t=e.svgRef,n=e.title,a=y(e,S);return r.a.createElement("svg",E({viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:t},a),n?r.a.createElement("title",null,n):null,_,x)},O=r.a.forwardRef((function(e,t){return r.a.createElement(C,E({svgRef:t},e))})),k=(n.p,["svgRef","title"]);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),I=r.a.createElement("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),j=function(e){var t=e.svgRef,n=e.title,a=M(e,k);return r.a.createElement("svg",N({viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:t},a),n?r.a.createElement("title",null,n):null,P,I)},R=r.a.forwardRef((function(e,t){return r.a.createElement(j,N({svgRef:t},e))})),T=(n.p,["svgRef","title"]);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),F=r.a.createElement("path",{d:"M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"}),W=function(e){var t=e.svgRef,n=e.title,a=z(e,T);return r.a.createElement("svg",A({viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:t},a),n?r.a.createElement("title",null,n):null,D,F)},H=r.a.forwardRef((function(e,t){return r.a.createElement(W,A({svgRef:t},e))})),L=(n.p,["svgRef","title"]);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V=r.a.createElement("path",{d:"M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z"}),G=function(e){var t=e.svgRef,n=e.title,a=J(e,L);return r.a.createElement("svg",B({viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:t},a),n?r.a.createElement("title",null,n):null,V)},U=r.a.forwardRef((function(e,t){return r.a.createElement(G,B({svgRef:t},e))})),q=(n.p,["svgRef","title"]);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y=r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),Z=r.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),Q=function(e){var t=e.svgRef,n=e.title,a=X(e,q);return r.a.createElement("svg",K({viewBox:"0 0 24 24",fill:"white",width:"18px",height:"18px",ref:t},a),n?r.a.createElement("title",null,n):null,Y,Z)},$=r.a.forwardRef((function(e,t){return r.a.createElement(Q,K({svgRef:t},e))})),ee=(n.p,n(25),function(e){var t=e.windowState,n=e.handler,a=function(e){var n="nav-button ";return 1===t[e]&&(n+="active "),n};return r.a.createElement("nav",{className:"nav"},r.a.createElement("button",{value:0,className:a(0),onClick:n,title:"Shader select [Q]"},r.a.createElement(O,{className:"shader-icon"})),r.a.createElement("button",{value:1,className:a(1),onClick:n,title:"Wave controls [W]"},r.a.createElement(U,{className:"wave-icon"})),r.a.createElement("button",{value:2,className:a(2),onClick:n,title:"Feedback controls [E]"},r.a.createElement(H,{className:"fbx-icon"})),r.a.createElement("button",{value:3,className:a(3),onClick:n,title:"Presets [R]"},r.a.createElement(R,{className:"preset-icon"})),r.a.createElement("button",{value:4,className:a(4),onClick:n,title:"About [T]"},r.a.createElement($,{className:"info-icon"})))}),te=(n(14),function(e){var t=e.windowState,n=e.activeShader,a=e.handler;return r.a.createElement("div",{id:"shader-ctrl",value:n,className:function(){var e="ctrl-module ";return 0===t[0]?e+="hidden ":e+="showing ",e}()},r.a.createElement("header",{className:"center label"},"SHADERS"),r.a.createElement("br",null),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"0"===n?"button active":"button inactive",onClick:a,value:0,title:"Shader 1 [Z]"},"[Z]"),r.a.createElement("button",{className:"1"===n?"button active":"button inactive",onClick:a,value:1,title:"Shader 2 [X]"},"[X]"),r.a.createElement("button",{className:"2"===n?"button active":"button inactive",onClick:a,value:2,title:"Shader 3 [C]"},"[C]")))}),ne=function(e){var t=e.windowState,n=e.activeShader,a=e.sliders,o=e.handler;return r.a.createElement("div",{id:"wave-ctrl",className:function(){var e="ctrl-module ";return 0===t[1]?e+="hidden ":e+="showing ",e}()},r.a.createElement("header",{className:"center label"},"WAVES"),r.a.createElement("br",null),r.a.createElement("div",{className:"slider-wrap"},a[n].filter((function(e){return e[0]<=11})).map((function(e){return r.a.createElement("div",{className:"slider-row",key:e[0]},r.a.createElement("input",{className:"slider",type:"range",min:0,max:127,"data-target":e[0],"data-min":e[1],"data-max":e[2],value:e[3],onChange:o}),r.a.createElement("span",{className:"slider-label"},e[4]))}))))},ae=function(e){var t=e.windowState,n=e.activeShader,a=e.sliders,o=e.handler;return r.a.createElement("div",{id:"fbx-ctrl",className:function(){var e="ctrl-module ";return 0===t[2]?e+="hidden ":e+="showing ",e}()},r.a.createElement("header",{className:"center label"},"FEEDBACK"),r.a.createElement("br",null),r.a.createElement("div",{className:"slider-wrap"},a[n].filter((function(e){return e[0]>11})).map((function(e){return r.a.createElement("div",{className:"slider-row",key:e[0]},r.a.createElement("input",{className:"slider",type:"range",min:0,max:127,"data-target":e[0],"data-min":e[1],"data-max":e[2],value:e[3],onChange:o}),r.a.createElement("span",{className:"slider-label"},e[4]))}))))},re=(n(16),function(e){var t=e.windowState,n=e.presets,a=e.activePreset,o=e.changeHandler,l=e.saveHandler,i=function(e){var t="button ";return e===a?t+="active ":(t+="inactive ",void 0===n[e]&&(t+="empty ")),t},s=function(e){var t="preset-label ";return void 0!==n[e]&&(t+="hidden"),t};return r.a.createElement("div",{id:"presets",className:function(){var e="info-module ";return 0===t[3]?e+="hidden ":e+="showing ",e}()},r.a.createElement("header",{className:"center label"},"PRESETS"),r.a.createElement("br",null),r.a.createElement("div",{className:"center button-wrap"},[0,1,2,3,4,5,6,7,8,9].map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("button",{onClick:o,value:e,className:i(e),title:"Preset ["+(e+1)+"]"},"[",e+1!==10?e+1:0,"]"),r.a.createElement("span",{className:s(e)},"EMPTY"))}))),r.a.createElement("div",{className:"center submit-wrap"},r.a.createElement("button",{className:"save button",title:"save preset [S]",onClick:l},"save preset [S]")))}),oe=function(e){var t=e.windowState;return r.a.createElement("div",{id:"about",className:function(){var e="info-module ";return 0===t[4]?e+="hidden ":e+="showing ",e}()},r.a.createElement("div",{className:"text-container"},r.a.createElement("header",{style:{fontWeight:"bold"},className:"center label"},"ABOUT"),r.a.createElement("p",null,"uwu-VS is a semi-modular video synthesis instrument for web browsers."),r.a.createElement("p",null,"Inspired by live coding environments ",r.a.createElement("a",{href:"https://hydra.ojack.xyz/",target:"blank"},"HYDRA")," by Olivia Jack, and ",r.a.createElement("a",{href:"https://shawnlawson.github.io/The_Force/",target:"blank"},"THE FORCE")," by Shawn Lawson, I wanted to make a browser app flexible enough for live performance but accessible to users without any prior coding experience (though MIDI scripting is encouraged!)"),r.a.createElement("p",null,"Built using GLSL and three.js, the structure is as follows:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Our (drawShader) creates an initial texture based on the sliders in the (WAVES) table"),r.a.createElement("li",null,"This texture is passed to our (feedbackShader) and processed based on the sliders in the (FEEDBACK) table")),r.a.createElement("p",null,"The active (drawShader) can be changed via the (SHADERS) table or keys [z], [x], [c]."),r.a.createElement("p",null,"To save a preset, press the [s] key. This will save the current arrangement of sliders (for each shader) to number keys [1]-[0]. Once all ten slots are filled, saving a preset will overwrite the current selection."),r.a.createElement("p",null,"All parameters can be controlled via the Web MIDI API (",r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#Browser_compatibility",target:"blank"},"click here for supported browsers"),") meaning uwu-VS plays well with others! Try using a control surface or sending MIDI messages from another program (Ableton, Max/MSP, etc.)"),r.a.createElement("p",null,"Below you can find a table of accepted keyboard shortcuts and MIDI messages:"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Key"),r.a.createElement("th",null,"MIDI CC#"),r.a.createElement("th",null,"Function")),r.a.createElement("tr",null,r.a.createElement("td",null,"[esc]"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"fullscreen window")),r.a.createElement("tr",null,r.a.createElement("td",null,"[~]"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"hide all UI elements")),r.a.createElement("tr",null,r.a.createElement("td",null,"[s]"),r.a.createElement("td",null,"40 ",r.a.createElement("br",null)," (trigger value: 127)"),r.a.createElement("td",null,"save current preset")),r.a.createElement("tr",null,r.a.createElement("td",null,"[1]-[0]"),r.a.createElement("td",null,"20-29 ",r.a.createElement("br",null)," (trigger value: 127)"),r.a.createElement("td",null,"recall preset")),r.a.createElement("tr",null,r.a.createElement("td",null,"[z] [x] [c]"),r.a.createElement("td",null,"30, 21, 32 ",r.a.createElement("br",null)," (trigger value: 127)"),r.a.createElement("td",null,"select active drawShader")),r.a.createElement("tr",null,r.a.createElement("td",null,"-"),r.a.createElement("td",null,"0-11 (value 0-127)"),r.a.createElement("td",null,"drawShader sliders")),r.a.createElement("tr",null,r.a.createElement("td",null,"-"),r.a.createElement("td",null,"12-15 (value 0-127)"),r.a.createElement("td",null,"feedbackShader sliders")))),r.a.createElement("span",{style:{fontSize:"smaller"}},"\xa9 2020 d putnam")))},le=n(11),ie=function(e,t,n){var a=Object(le.a)(t,2),r=a[0],o=a[1],l=Object(le.a)(n,2),i=l[0],s=l[1];return Number((e-i)/(s-i))*(o-r)+r},se=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ue=[[[0,1,30,0,"\u223f1"],[1,150,10,30,"\u223f2"],[2,1,200,110,"\u223f3"],[3,20,50,118,"\u223f4"],[4,1,100,26,"\u223f5"],[5,0,100,0,"scan"],[6,0,2.09,0,"rota"],[7,.5,.1,60,"zoom"],[8,-1,2,45,"brightness"],[9,.65,1,127,"contrast"],[10,0,2,127,"saturation"],[11,0,6.28,127,"hue"],[12,.4,0,60,"\u223fR"],[13,.4,0,9,"\u223fG"],[14,.3,0,83,"\u223fB"],[15,1,.98,0,"\u0394"]],[[0,1,90,1,"\u223f1"],[1,1,100,127,"\u223f2"],[2,1,100,100,"\u223f3"],[3,0,100,127,"\u223f4"],[4,-100,100,100,"\u223f5"],[5,-100,100,0,"\u223f6"],[6,-.5,.5,42,"rota"],[7,.4,.1,63,"zoom"],[8,0,2,68,"brightness"],[9,.65,1,71,"contrast"],[10,0,2,60,"saturation"],[11,0,6.28,127,"hue"],[12,.4,0,30,"\u223fR"],[13,.4,0,0,"\u223fG"],[14,.3,0,10,"\u223fB"],[15,1,.98,0,"\u0394"]],[[0,0,5,119,"\u223f1"],[1,0,5,26,"\u223f2"],[2,10,30,99,"\u223f3"],[3,0,15,0,"\u223f4"],[4,1,7,40,"\u223f5"],[5,.1,1,31,"\u223f6"],[6,15,80,100,"\u223f7"],[7,0,1.5,110,"warp"],[8,-2,1,31,"brightness"],[9,.65,1,127,"contrast"],[10,0,2,127,"saturation"],[11,0,6.28,127,"hue"],[12,.4,0,101,"\u223fR"],[13,.4,0,39,"\u223fG"],[14,.3,0,92,"\u223fB"],[15,1,.98,18,"\u0394"]]],ce=(n(26),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleShaderChange=function(e){a.setState({activeShader:e.target.value}),a.setState({uniforms:a.state.sliders[e.target.value].map((function(e){return ie(e[3],[e[1],e[2]],[0,127])}))})},a.handleSliderChange=function(e){var t=Number(e.target.dataset.target),n=a.state.sliders.map((function(e){return e}));n[a.state.activeShader][t][3]=Number(e.target.value),a.setState({sliders:n});var r=[n[a.state.activeShader][t][1],n[a.state.activeShader][t][2]],o=[Number(0),Number(127)];(function(){var e=Object(c.a)(u.a.mark((function e(){var n,l,i,s,c,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<10)){e.next=15;break}return l=a.state.uniforms[t],i=ie(a.state.sliders[a.state.activeShader][t][3],r,o)/1,s=-1*(l-(l*(1-(u=.1))+i*u)),c=l,d=a.state.uniforms.map((function(e){return e})),c+=Number(s),d[t]=c,a.setState({uniforms:d}),e.next=12,se(15);case 12:n++,e.next=1;break;case 15:case"end":return e.stop()}var u}),e)})));return function(){return e.apply(this,arguments)}})()()},a.handlePresetChange=function(e){a.state.presets[e.target.value]&&a.setState({activePreset:Number(e.target.value),activeShader:a.state.presets[e.target.value].activeShader,sliders:a.state.presets[e.target.value].sliders,uniforms:a.state.presets[e.target.value].uniforms})},a.handlePresetSave=function(){var e=JSON.parse(JSON.stringify(a.state.sliders)),t={activeShader:a.state.activeShader,sliders:e,uniforms:a.state.uniforms},n=a.state.presets.map((function(e){return e}));if(n.length<10){a.setState({activePreset:n.length});var r=n.concat(t);a.setState({presets:r}),window.localStorage.setItem("ursprst",JSON.stringify(r))}else n[a.state.activePreset]=t,a.setState({presets:n}),window.localStorage.setItem("ursprst",JSON.stringify(n))},a.handleWindowChange=function(e){var t=a.state.windowState.map((function(e){return e}));window.screen.width<415||window.screen.width<813&&window.screen.height<415?1===t[e.target.value]?t=a.state.windowState.map((function(){return 0})):(t=a.state.windowState.map((function(){return 0})))[e.target.value]=1:0===t[e.target.value]?t[e.target.value]=1:t[e.target.value]=0,a.setState({windowState:t})},a.showHideControls=function(){var e="controls ";return 0===a.state.windowState[0]&&0===a.state.windowState[1]&&0===a.state.windowState[2]?e+="hidden":e+="showing",e},a.handleKeyPress=function(e){81===e.keyCode?a.handleWindowChange({target:{value:0}}):87===e.keyCode?a.handleWindowChange({target:{value:1}}):69===e.keyCode?a.handleWindowChange({target:{value:2}}):82===e.keyCode?a.handleWindowChange({target:{value:3}}):84===e.keyCode?a.handleWindowChange({target:{value:4}}):90===e.keyCode?a.handleShaderChange({target:{value:"0"}}):88===e.keyCode?a.handleShaderChange({target:{value:"1"}}):67===e.keyCode?a.handleShaderChange({target:{value:"2"}}):e.keyCode>=49&&e.keyCode<=57?a.state.presets.length>=e.keyCode-48&&a.handlePresetChange({target:{value:e.keyCode-49}}):48===e.keyCode?10===a.state.presets.length&&a.handlePresetChange({target:{value:9}}):83===e.keyCode?a.handlePresetSave():192===e.keyCode?!1===a.state.hideAllState?a.setState({hideAllState:!0}):a.setState({hideAllState:!1}):27===e.keyCode&&(document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen())},a.midiMount=function(){navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(a.onMIDISuccess,a.onMIDIFailure):console.log("WebMIDI is not supported in this browser.")},a.onMIDIFailure=function(){console.log("Could not access your MIDI devices.")},a.onMIDISuccess=function(e){var t,n=Object(i.a)(e.inputs.values());try{for(n.s();!(t=n.n()).done;){t.value.onmidimessage=a.getMIDIMessage}}catch(r){n.e(r)}finally{n.f()}},a.getMIDIMessage=function(e){var t=e.data;if(t[1]<=15){var n={target:{dataset:{target:t[1]},value:t[2]}};a.handleSliderChange(n)}else 30===t[1]&&127===t[2]?a.handleShaderChange({target:{value:"0"}}):31===t[1]&&127===t[2]?a.handleShaderChange({target:{value:"1"}}):32===t[1]&&127===t[2]?a.handleShaderChange({target:{value:"2"}}):t[1]>=20&&t[1]<=29&&127===t[2]?29===t[1]?a.handlePresetChange({target:{value:9}}):a.handlePresetChange({target:{value:t[1]-20}}):40===t[1]&&127===t[2]&&a.handlePresetSave()},window.localStorage.getItem("ursprst")?a.state={sliders:JSON.parse(localStorage.getItem("ursprst"))[0].sliders,activeShader:JSON.parse(localStorage.getItem("ursprst"))[0].activeShader,activePreset:0,windowState:window.screen.width<813&&(window.screen.height<415||window.screen.width<415)?[1,0,0,0,0]:[1,1,1,0,0],hideAllState:!1,uniforms:JSON.parse(localStorage.getItem("ursprst"))[0].uniforms,presets:JSON.parse(localStorage.getItem("ursprst"))}:a.state={sliders:JSON.parse(JSON.stringify(ue)),activeShader:"0",activePreset:0,windowState:window.screen.width<813&&(window.screen.height<415||window.screen.width<415)?[1,0,0,0,0]:[1,1,1,0,0],hideAllState:!1,uniforms:ue[0].map((function(e){return ie(e[3],[e[1],e[2]],[0,127])})),presets:[{activeShader:"0",sliders:JSON.parse(JSON.stringify(ue)),uniforms:ue[0].map((function(e){return ie(e[3],[e[1],e[2]],[0,127])}))}]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress),"https:"===window.location.protocol?this.midiMount():console.log("connect via HTTPS to use MIDI features!")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{activeShader:this.state.activeShader,uniforms:this.state.uniforms}),r.a.createElement("div",{style:!0===this.state.hideAllState?{visibility:"hidden"}:{visibility:"visible"}},r.a.createElement("div",{style:window.screen.width<415?{display:"block"}:{display:"flex"},className:"container"},r.a.createElement(ee,{windowState:this.state.windowState,handler:this.handleWindowChange}),r.a.createElement("div",{className:this.showHideControls()},r.a.createElement(te,{windowState:this.state.windowState,activeShader:this.state.activeShader,handler:this.handleShaderChange}),r.a.createElement(ne,{windowState:this.state.windowState,activeShader:this.state.activeShader,sliders:this.state.sliders,handler:this.handleSliderChange}),r.a.createElement(ae,{windowState:this.state.windowState,activeShader:this.state.activeShader,sliders:this.state.sliders,handler:this.handleSliderChange})),r.a.createElement("div",{className:"info"},r.a.createElement(re,{presets:this.state.presets,windowState:this.state.windowState,activePreset:this.state.activePreset,changeHandler:this.handlePresetChange,saveHandler:this.handlePresetSave}),r.a.createElement(oe,{windowState:this.state.windowState})))))}}]),n}(a.Component));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ec68a8dd.chunk.js.map