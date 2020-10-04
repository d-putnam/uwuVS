(this["webpackJsonpuwu-vs"]=this["webpackJsonpuwu-vs"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),o=(a(21),a(14)),s=a(9),c=a.n(s),u=a(15),d=a(2),f=a(5),m=a(4),h=a(3),v=a(1),g="\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform float u_0; // wave 1\n  uniform float u_1; // wave 2\n  uniform float u_2; // wave 3\n  uniform float u_3; // wave 4\n  uniform float u_4; // wave 5\n  uniform float u_5; // scanlines\n  uniform float u_6; // scan_rota\n  uniform float u_7; // zoom\n  uniform float u_8; // brightness\n\n  mat2 rotate(float angle){\n    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\n  }\n\n  void main(){\n    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * u_7 - u_7;\n    float color = 0.0;\n\n    color += sin(coord.x * u_0 + cos(u_time + coord.y * u_1 + sin(coord.x * u_2 + u_time * 2.0))) * 2.0;\n    color += cos(coord.x * u_3 + sin(u_time + coord.y * u_4 + cos(coord.x * 20.0 + u_time * 2.0))) * 2.0;\n\n    coord = rotate( u_6 ) * coord;\n    color *= cos(coord.y * u_5 + sin(u_time + coord.y)) * 5.5;\n\n    gl_FragColor = vec4(vec3(color, color, color + u_8 / 2.0) * 1.0 + u_8, 1.0 );\n  }\n",p="\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform float u_0;\n  uniform float u_1;\n  uniform float u_2;\n  uniform float u_3;\n  uniform float u_4;\n  uniform float u_5;\n  uniform float u_6; // rota\n  uniform float u_7; // zoom\n  uniform float u_8; // brightness\n\n\n  mat2 rotate(float angle){\n    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));\n  }\n\n  void main(){\n    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * u_7;\n    float color = 0.0;\n\n    coord = rotate( u_6 ) * coord;\n\n    color += sin(coord.y) + atan(u_time + coord.y) + sin(u_0 * coord.x / u_time) * 2.0;\n    color += sin(coord.x * u_0 + tan(u_time + coord.y * u_2 + sin(coord.x * u_4 + u_time))) * 2.0;\n    color += cos(coord.x * u_1 + tan(u_time + coord.y * u_3 + cos(coord.x * u_5 + u_time))) * 2.0;\n\n    gl_FragColor = vec4(vec3(color - sin(coord.x * u_time) , color - cos(coord.y * u_time + 9.0), color - sin(coord.y * u_time)) * -0.5 + u_8, 1.0 );\n  }\n",w="\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform float u_time;\n  uniform vec2 u_resolution;\n  uniform float u_0;\n  uniform float u_1;\n  uniform float u_2;\n  uniform float u_3;\n  uniform float u_4;\n  uniform float u_5;\n  uniform float u_6;\n  uniform float u_7;\n  uniform float u_8;\n\n\nvoid main(){\n  vec2 coord = 6.0 * vec2(gl_FragCoord.xy / u_resolution);\n\n  for(int i = 1; i < 4; i++) {\n    float n = float(i);\n    coord += vec2(u_7 / n * sin(n * coord.y + u_0 * n) + 0.8, 0.4 / n * sin(coord.x + u_1 * n) + 1.6);\n  }\n\n  vec3 color = vec3(u_1 * sin(coord.x) + 0.8, 0.5 * sin(coord.y) + 1.0, sin(coord.x + coord.y));\n  color += sin(coord.y * cos(u_time / 20.0)) + u_8 + sin(coord.y * cos(u_time / 30.0) * u_2);\n  color += sin(coord.x * sin(u_time / 30.0) * u_4) + cos(coord.x * cos((u_time / 200.0) ) * ((((u_time + 100.0) / 200.0) * u_6)) / u_4) / u_5 + 0.5;\n  color -= cos(coord.y * sin(u_time / 50.0) * u_3);\n\n  gl_FragColor = vec4(color, 1.20);\n}\n",b=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).sceneSetup=function(){n.scene=new v.g,n.camera=new v.e(n.state.width/-2,n.state.width/2,n.state.height/2,n.state.height/-2,1,1e3),n.camera.position.z=2,n.clock=new v.a,n.now=n.clock.getElapsedTime(),n.geometry=new v.f(n.state.width,n.state.height),n.renderer=new v.j({antialias:!0}),n.renderer.setPixelRatio(window.devicePixelRatio),n.renderer.setSize(n.state.width,n.state.height),n.mount.appendChild(n.renderer.domElement)},n.drawSceneSetup=function(){n.drawScene=new v.g,n.drawTexture=new v.i(n.state.width,n.state.height,{minFilter:v.b,magFilter:v.b}),"0"===n.props.activeShader?n.fshader=g:"1"===n.props.activeShader?n.fshader=p:"2"===n.props.activeShader&&(n.fshader=w),n.drawMaterial=new v.h({uniforms:{u_resolution:{value:{x:n.state.width,y:n.state.height}},u_time:{value:n.now},u_0:{value:n.props.uniforms[0]},u_1:{value:n.props.uniforms[1]},u_2:{value:n.props.uniforms[2]},u_3:{value:n.props.uniforms[3]},u_4:{value:n.props.uniforms[4]},u_5:{value:n.props.uniforms[5]},u_6:{value:n.props.uniforms[6]},u_7:{value:n.props.uniforms[7]},u_8:{value:n.props.uniforms[8]}},fragmentShader:n.fshader}),n.drawPlane=new v.c(n.geometry,n.drawMaterial),n.drawScene.add(n.drawPlane)},n.brcosaSceneSetup=function(){n.brcosaScene=new v.g,n.brcosaTexture=new v.i(n.state.width,n.state.height,{minFilter:v.b,magFilter:v.b}),n.brcosaMaterial=new v.h({uniforms:{drawTexture:{type:"t",value:n.drawTexture.texture},u_resolution:{value:{x:n.state.width,y:n.state.height}},u_time:{value:n.now},u_9:{value:n.props.uniforms[9]},u_10:{value:n.props.uniforms[10]},u_11:{value:n.props.uniforms[11]}},fragmentShader:"\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform vec2 u_resolution; \n  uniform sampler2D drawTexture;\n  uniform float u_9;\n  uniform float u_10;\n  uniform float u_11;\n\n  vec3 hueShift(vec3 color, float hue) {\n    const vec3 k = vec3(0.57735, 0.57735, 0.57735);\n    float cosAngle = cos(hue);\n    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));\n  }\n\n  void main() {\n    vec2 st = gl_FragCoord.xy / (u_resolution);\n    vec2 uv = st;\n    uv *= 0.998;\n    vec3 texColor = texture2D(drawTexture, uv).rgb;\n\n    const vec3 LumCoeff = vec3(0.2125, 0.7154, 0.0721);\n    vec3 AvgLumin = vec3(0.5, 0.5, 0.5);\n    vec3 intensity = vec3(dot(texColor, LumCoeff));\n\n    vec3 satColor = mix(intensity, texColor, u_10);\n    vec3 conColor = mix(AvgLumin, satColor, u_9);\n\n    vec3 hueColor = hueShift(conColor, u_11);\n\n    gl_FragColor = vec4(1.0 * hueColor, 1.0);\n  }\n"}),n.brcosaPlane=new v.c(n.geometry,n.brcosaMaterial),n.brcosaScene.add(n.brcosaPlane)},n.fbxSceneSetup=function(){n.fbxScene=new v.g,n.textureA=new v.i(n.state.width,n.state.height,{minFilter:v.b,magFilter:v.b}),n.textureB=new v.i(n.state.width,n.state.height,{minFilter:v.b,magFilter:v.b}),n.fbxMaterial=new v.h({uniforms:{bufferTexture:{type:"t",value:n.textureA.texture},u_resolution:{value:{x:n.state.width,y:n.state.height}},drawTexture:{type:"t",value:n.brcosaTexture.texture},u_time:{value:n.now},u_12:{value:n.props.uniforms[12]},u_13:{value:n.props.uniforms[13]},u_14:{value:n.props.uniforms[14]},u_15:{value:n.props.uniforms[15]}},fragmentShader:"\n  #ifdef GL_ES\n    precision highp float;\n  #endif\n\n  uniform vec2 u_resolution; //The width and height of our screen\n  uniform sampler2D bufferTexture; //Our input texture\n  uniform sampler2D drawTexture;\n  uniform float u_time;\n  uniform float u_12;\n  uniform float u_13;\n  uniform float u_14;\n  uniform float u_15;\n\n  void main() {\n    vec2 st = gl_FragCoord.xy / (u_resolution);\n    vec2 uv = st;\n    uv *= u_15;\n\n    vec4 sum = texture2D(bufferTexture, uv);\n    vec4 src = texture2D(drawTexture, uv);\n    sum.r = mix(sum.r, src.r,  sin(u_12));\n    sum.g = mix(sum.g, src.g,  sin(u_13));\n    sum.b = mix(sum.b, src.b,  sin(u_14));\n    gl_FragColor = sum;\n  }\n"}),n.fbxPlane=new v.c(n.geometry,n.fbxMaterial),n.fbxScene.add(n.fbxPlane),n.finalMaterial=new v.d({map:n.textureB}),n.outputPlane=new v.c(n.geometry,n.finalMaterial),n.scene.add(n.outputPlane)},n.startAnimationLoop=function(){n.now=n.clock.getElapsedTime(),n.drawMaterial.uniforms.u_time.value=n.now,n.fbxMaterial.uniforms.u_time.value=n.now,n.renderer.setRenderTarget(n.drawTexture),n.renderer.render(n.drawScene,n.camera),n.renderer.setRenderTarget(null),n.renderer.setRenderTarget(n.brcosaTexture),n.renderer.render(n.brcosaScene,n.camera),n.renderer.setRenderTarget(null),n.renderer.setRenderTarget(n.textureB),n.renderer.render(n.fbxScene,n.camera),n.renderer.setRenderTarget(null);var e=n.textureA;n.textureA=n.textureB,n.textureB=e,n.outputPlane.material.map=n.textureB.texture,n.fbxMaterial.uniforms.bufferTexture.value=n.textureA.texture,n.renderer.render(n.scene,n.camera),n.requestID=window.requestAnimationFrame(n.startAnimationLoop)},n.handleWindowResize=function(){n.setState({width:window.innerWidth,height:window.outerHeight}),n.renderer.setSize(window.innerWidth,window.innerHeight),n.camera.aspect=n.state.width/n.state.height,n.camera.updateProjectionMatrix()},n.updateSliders=function(){for(var e=0;e<16;e++){var t="u_"+e,a=n.props.uniforms[e];e<9?n.drawMaterial.uniforms[t]={value:a}:e>=9&&e<=11?n.brcosaMaterial.uniforms[t]={value:a}:e>11&&(n.fbxMaterial.uniforms[t]={value:a})}},n.changeShader=function(){"0"===n.props.activeShader?n.drawMaterial.fragmentShader=g:"1"===n.props.activeShader?n.drawMaterial.fragmentShader=p:n.drawMaterial.fragmentShader=w,n.drawMaterial.needsUpdate=!0},n.state={width:window.innerWidth,height:window.outerHeight},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.sceneSetup(),this.drawSceneSetup(),this.brcosaSceneSetup(),this.fbxSceneSetup(),this.startAnimationLoop(),window.addEventListener("resize",this.handleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.cancelAnimationFrame(this.requestID),this.controls.dispose()}},{key:"componentDidUpdate",value:function(){this.updateSliders(),this.changeShader()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"canvas",ref:function(t){return e.mount=t}})}}]),a}(n.Component);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=r.a.createElement("defs",{id:"defs841"}),_=r.a.createElement("rect",{id:"Rectangle",width:24,height:24,fill:"none"}),x=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return r.a.createElement("svg",S({width:"24px",height:"24px",viewBox:"0 0 24 24",id:"three-dots",ref:t},n),a?r.a.createElement("title",null,a):null,y,r.a.createElement("g",{id:"_20x20_three-dots--grey","data-name":"20x20/three-dots--grey",transform:"translate(24) rotate(90)"},_,r.a.createElement("circle",{id:"Oval",cx:1,cy:1,r:1,transform:"translate(5 11)",stroke:"#000",strokeMiterlimit:10,strokeWidth:.5,style:{stroke:"#ffffff",strokeOpacity:.66000003,fill:"#ffffff",fillOpacity:.66000003}}),r.a.createElement("circle",{id:"Oval-2","data-name":"Oval",cx:1,cy:1,r:1,transform:"translate(11 11)",stroke:"#000",strokeMiterlimit:10,strokeWidth:.5,style:{fill:"#ffffff",fillOpacity:.66000003,stroke:"#ffffff",strokeOpacity:.66000003}}),r.a.createElement("circle",{id:"Oval-3","data-name":"Oval",cx:1,cy:1,r:1,transform:"translate(17 11)",stroke:"#000",strokeMiterlimit:10,strokeWidth:.5,style:{stroke:"#ffffff",strokeOpacity:.66000003,fill:"#ffffff",fillOpacity:.66000003}})))},C=r.a.forwardRef((function(e,t){return r.a.createElement(x,S({svgRef:t},e))}));a.p;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N=r.a.createElement("g",{id:"g837"}),P=r.a.createElement("g",{id:"g839"}),M=r.a.createElement("g",{id:"g841"}),I=r.a.createElement("g",{id:"g843"}),j=r.a.createElement("g",{id:"g845"}),R=r.a.createElement("g",{id:"g847"}),T=r.a.createElement("g",{id:"g849"}),A=r.a.createElement("g",{id:"g851"}),D=r.a.createElement("g",{id:"g853"}),F=r.a.createElement("g",{id:"g855"}),z=r.a.createElement("g",{id:"g857"}),W=r.a.createElement("g",{id:"g859"}),L=r.a.createElement("g",{id:"g861"}),B=r.a.createElement("g",{id:"g863"}),J=r.a.createElement("g",{id:"g865"}),H=function(e){var t=e.svgRef,a=e.title,n=k(e,["svgRef","title"]);return r.a.createElement("svg",O({id:"Capa_1",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 35.033 35.033",style:{enableBackground:"new 0 0 35.033 35.033"},ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",{id:"g835",style:{fill:"#ffffff",fillOpacity:.86000001}},r.a.createElement("path",{d:"M11.811,10.535l-6.983,6.984l6.983,6.981c0.78,0.781,0.78,2.048,0,2.828c-0.392,0.392-0.901,0.586-1.414,0.586   c-0.513,0-1.022-0.194-1.414-0.586l-8.397-8.396C0.211,18.558,0,18.049,0,17.519c0-0.529,0.211-1.039,0.586-1.414l8.397-8.398   c0.781-0.78,2.047-0.78,2.828,0C12.591,8.488,12.591,9.752,11.811,10.535z M34.447,16.104l-8.396-8.398   c-0.781-0.78-2.047-0.78-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l6.982,6.984L23.223,24.5c-0.781,0.781-0.781,2.048,0,2.828   c0.392,0.392,0.902,0.586,1.414,0.586s1.023-0.194,1.414-0.586l8.396-8.396c0.375-0.375,0.586-0.884,0.586-1.414   C35.033,16.99,34.822,16.479,34.447,16.104z M21.012,3.831c-1.076-0.277-2.161,0.373-2.435,1.441l-6,23.498   c-0.272,1.07,0.373,2.16,1.442,2.434c0.167,0.043,0.334,0.063,0.497,0.063c0.894,0,1.706-0.603,1.937-1.505l6-23.498   C22.727,5.193,22.081,4.104,21.012,3.831z",id:"path833",style:{fill:"#ffffff",fillOpacity:.86000001}})),N,P,M,I,j,R,T,A,D,F,z,W,L,B,J)},G=r.a.forwardRef((function(e,t){return r.a.createElement(H,O({svgRef:t},e))}));a.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var K=r.a.createElement("defs",{id:"defs847"}),V=function(e){var t=e.svgRef,a=e.title,n=q(e,["svgRef","title"]);return r.a.createElement("svg",U({id:"svg843",viewBox:"0 0 1000 1000",y:"0px",x:"0px",ref:t},n),a?r.a.createElement("title",null,a):null,K,r.a.createElement("g",{style:{fill:"#ffffff",fillOpacity:.86000001},id:"g841"},r.a.createElement("g",{style:{fill:"#ffffff",fillOpacity:.86000001},id:"g839",transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"},r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:.86000001},id:"path835",d:"M5419.9,4724c-441.5-81.5-849.1-310.2-1201.1-676.1c-423.6-441.5-705.9-988.3-847.1-1640.6c-27.8-137.2-57.7-264.5-61.7-282.4c-9.9-31.8-49.7-35.8-455.4-35.8h-445.4l-19.9-73.6c-11.9-41.8-29.8-119.3-41.8-175c-11.9-53.7-25.8-115.3-31.8-133.2c-9.9-33.8,19.9-35.8,449.4-35.8c429.5,0,459.4-2,449.4-33.8c-6-19.9-198.9-920.7-429.5-2004.5c-230.7-1083.8-449.4-2095.9-489.2-2253c-121.3-495.2-296.3-942.6-463.3-1183.2c-121.3-177-320.2-320.2-467.3-336.1c-53.7-6-67.6,8-183,190.9c-214.8,346-375.8,469.3-614.5,469.3c-149.1,0-260.5-49.7-344-151.1c-165.1-198.9-165.1-487.2,0-674.1c149.1-169,411.6-244.6,771.6-222.7c338.1,21.9,700,159.1,1034.1,393.7c210.8,147.2,582.6,529,733.8,749.7c149.1,220.7,316.2,560.8,397.7,815.3c33.8,101.4,256.5,1097.7,493.2,2213.3l431.5,2026.3h582.7h582.6l11.9,55.7c21.9,97.5,69.6,292.3,79.5,328.1c9.9,31.8-25.8,33.8-576.7,33.8c-324.1,0-588.6,8-588.6,15.9c0,47.7,188.9,878.9,240.6,1067.9c208.8,739.8,493.2,1153.4,811.3,1187.2c65.6,6,71.6,2,181-179c222.7-367.9,369.9-481.2,614.5-481.2c157.1,0,268.5,45.7,346,139.2c220.7,260.5,145.2,664.2-151.1,811.3C6024.4,4747.9,5706.3,4777.7,5419.9,4724z"}),r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:.86000001},id:"path837",d:"M9220.1,2178.7c-63.6-15.9-179-63.6-258.5-103.4c-294.3-153.1-741.7-680.1-1165.3-1374.1c-113.3-186.9-212.8-334.1-220.7-326.1c-6,8-31.8,107.4-55.7,222.7c-47.7,214.8-200.8,795.4-254.5,954.5c-83.5,244.6-216.7,435.5-371.9,527c-117.3,67.6-334.1,115.3-479.2,103.4c-139.2-11.9-350-75.6-737.8-226.7L5398,1848.6l-33.8-127.3c-17.9-69.6-39.8-139.2-45.8-155.1c-7.9-23.9,27.9-19.9,185,21.9c264.5,69.6,525,71.6,676.1,6c198.9-87.5,300.3-250.6,429.5-688c105.4-354,332.1-1211,332.1-1252.8c0-129.3-586.6-934.6-908.8-1248.8l-97.4-93.5l-202.8,69.6c-246.6,85.5-375.8,101.4-531,69.6c-163.1-33.8-248.6-81.5-344-188.9c-103.4-117.3-129.3-198.9-119.3-367.9c9.9-183,83.5-304.2,232.6-381.8c188.9-99.4,487.2-69.6,729.8,73.6c296.3,173,700,646.3,1141.4,1336.3c115.3,177,210.8,320.1,214.8,316.2c4-4,63.6-230.7,133.2-503.1c177-696,248.6-888.9,385.8-1046c143.2-161.1,411.6-242.6,737.8-224.7c254.5,13.9,467.3,65.6,797.4,192.9l250.6,97.4l33.8,125.3c19.9,67.6,37.8,137.2,43.7,157.1c8,29.8,2,29.8-75.6,6c-280.4-83.5-690-87.5-861-7.9c-137.2,63.6-290.3,220.7-363.9,377.8c-69.6,145.2-214.8,612.5-363.9,1177.2L7673-28.6l45.7,89.5c77.6,143.2,377.8,592.6,529,785.5c75.6,99.4,204.8,248.6,286.3,334.1l147.2,153.1l208.8-61.7c550.8-161.1,958.5,2,1006.2,403.7c15.9,141.2-17.9,260.5-105.4,356C9651.6,2184.6,9452.7,2236.3,9220.1,2178.7z"}))))},X=r.a.forwardRef((function(e,t){return r.a.createElement(V,U({svgRef:t},e))}));a.p;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Q=r.a.createElement("defs",{id:"defs839"}),$=function(e){var t=e.svgRef,a=e.title,n=Z(e,["svgRef","title"]);return r.a.createElement("svg",Y({id:"svg835",viewBox:"0 0 1000 1000",height:15,width:15,ref:t},n),a?r.a.createElement("title",null,a):null,Q,r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:.86000001},id:"path833",d:"M736,818C634,818,569,706,494,577C487,564,480,551,472,538C464,525,457,512,450,500C386,390,331,295,271,295C254,295,190,313,70,537L6,503C155,222,242,222,271,222C373,222,438,334,513,463C520,476,527,489,535,502C543,515,550,528,557,540C621,650,676,745,736,745C753,745,817,727,937,503L1001,537C852,818,765,818,736,818z"}))},ee=r.a.forwardRef((function(e,t){return r.a.createElement($,Y({svgRef:t},e))}));a.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ne=r.a.createElement("defs",{id:"defs839"}),re=function(e){var t=e.svgRef,a=e.title,n=ae(e,["svgRef","title"]);return r.a.createElement("svg",te({id:"svg835",viewBox:"0 0 24 24",height:24,width:24,ref:t},n),a?r.a.createElement("title",null,a):null,ne,r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:.86000001},id:"path833",d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"}))},le=r.a.forwardRef((function(e,t){return r.a.createElement(re,te({svgRef:t},e))})),ie=(a.p,a(23),function(e){var t=e.windowState,a=e.handler,n=function(e){var a="nav-button ";return 1===t[e]&&(a+="active "),a};return r.a.createElement("div",{className:"nav"},r.a.createElement("button",{value:0,className:n(0),onClick:a,title:"Shader select [Q]"},r.a.createElement(C,{className:"shader-icon"})),r.a.createElement("button",{value:1,className:n(1),onClick:a,title:"Wave controls [W]"},r.a.createElement(ee,{className:"wave-icon"})),r.a.createElement("button",{value:2,className:n(2),onClick:a,title:"Feedback controls [E]"},r.a.createElement(X,{className:"fbx-icon"})),r.a.createElement("button",{value:3,className:n(3),onClick:a,title:"Presets [R]"},r.a.createElement(G,{className:"preset-icon"})),r.a.createElement("button",{value:4,className:n(4),onClick:a,title:"About [T]"},r.a.createElement(le,{className:"info-icon"})))}),oe=(a(8),function(e){var t=e.windowState,a=e.activeShader,n=e.handler;return r.a.createElement("div",{id:"shader-ctrl",value:a,className:function(){var e="ctrl-module ";return 0===t[0]?e+="hidden ":e+="showing ",e}()},r.a.createElement("div",{className:"center label"},"SHADERS"),r.a.createElement("br",null),r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"0"===a?"button active":"button inactive",onClick:n,value:0,title:"Shader 1 [Z]"},"[Z]"),r.a.createElement("button",{className:"1"===a?"button active":"button inactive",onClick:n,value:1,title:"Shader 2 [X]"},"[X]"),r.a.createElement("button",{className:"2"===a?"button active":"button inactive",onClick:n,value:2,title:"Shader 3 [C]"},"[C]")))}),se=function(e){var t=e.windowState,a=e.activeShader,n=e.sliders,l=e.handler;return r.a.createElement("div",{id:"wave-ctrl",className:function(){var e="ctrl-module ";return 0===t[1]?e+="hidden ":e+="showing ",e}()},r.a.createElement("div",{className:"center label"},"WAVES"),r.a.createElement("br",null),r.a.createElement("div",{className:"slider-wrap"},n[a].filter((function(e){return e[0]<=11})).map((function(e){return r.a.createElement("div",{className:"slider-row",key:e[0]},r.a.createElement("input",{className:"slider",type:"range",min:0,max:127,"data-target":e[0],"data-min":e[1],"data-max":e[2],value:e[3],onChange:l}),r.a.createElement("span",{className:"slider-label"},e[4]))}))))},ce=function(e){var t=e.windowState,a=e.activeShader,n=e.sliders,l=e.handler;return r.a.createElement("div",{id:"fbx-ctrl",className:function(){var e="ctrl-module ";return 0===t[2]?e+="hidden ":e+="showing ",e}()},r.a.createElement("div",{className:"center label"},"FEEDBACK"),r.a.createElement("br",null),r.a.createElement("div",{className:"slider-wrap"},n[a].filter((function(e){return e[0]>11})).map((function(e){return r.a.createElement("div",{className:"slider-row",key:e[0]},r.a.createElement("input",{className:"slider",type:"range",min:0,max:127,"data-target":e[0],"data-min":e[1],"data-max":e[2],value:e[3],onChange:l}),r.a.createElement("span",{className:"slider-label"},e[4]))}))))},ue=(a(12),function(e){var t=e.windowState,a=e.presets,n=e.activePreset,l=e.changeHandler,i=e.saveHandler,o=function(e){var t="button ";return e===n?t+="active ":(t+="inactive ",void 0===a[e]&&(t+="empty ")),t},s=function(e){var t="preset-label ";return void 0!==a[e]&&(t+="hidden"),t};return r.a.createElement("div",{id:"presets",className:function(){var e="info-module ";return 0===t[3]?e+="hidden ":e+="showing ",e}()},r.a.createElement("div",{className:"center label"},"PRESETS"),r.a.createElement("br",null),r.a.createElement("div",{className:"center button-wrap"},[0,1,2,3,4,5,6,7,8,9].map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("button",{onClick:l,value:e,className:o(e),title:"Preset ["+(e+1)+"]"},"[",e+1!==10?e+1:0,"]"),r.a.createElement("span",{className:s(e)},"EMPTY"))}))),r.a.createElement("div",{className:"center submit-wrap"},r.a.createElement("button",{className:"save button",title:"save preset [S]",onClick:i},"save preset [S]")))}),de=function(e){var t=e.windowState;return r.a.createElement("div",{id:"about",className:function(){var e="info-module ";return 0===t[4]?e+="hidden ":e+="showing ",e}()},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{style:{fontWeight:"bold"},className:"center label"},"ABOUT"),r.a.createElement("p",null,"uwu-VS is a semi-modular video synthesis instrument for web browsers."),r.a.createElement("p",null,"Inspired by live coding environments ",r.a.createElement("a",{href:"https://hydra.ojack.xyz/",target:"blank"},"HYDRA")," by Olivia Jack, and ",r.a.createElement("a",{href:"https://shawnlawson.github.io/The_Force/",target:"blank"},"THE FORCE")," by Shawn Lawson, I wanted to make a browser app flexible enough for live performance but accessible to users without any prior coding experience (though MIDI scripting is encouraged!)"),r.a.createElement("p",null,"Built using GLSL and three.js, the structure is as follows:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Our (drawShader) creates an initial texture based on the sliders in the (WAVES) table"),r.a.createElement("li",null,"This texture is passed to our (feedbackShader) and processed based on the sliders in the (FEEDBACK) table")),r.a.createElement("p",null,"The active (drawShader) can be changed via the (SHADERS) table or keys [z], [x], [c]."),r.a.createElement("p",null,"To save a preset, press the [s] key. This will save the current arrangement of sliders (for each shader) to number keys [1]-[0]. Once all ten slots are filled, saving a preset will overwrite the current selection."),r.a.createElement("p",null,"All parameters can be controlled via the Web MIDI API (",r.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess#Browser_compatibility",target:"blank"},"click here for supported browsers"),") meaning uwu-VS plays well with others! Try using a control surface or sending MIDI messages from another program (Ableton, Max/MSP, etc.)"),r.a.createElement("p",null,"Below you can find a table of accepted keyboard shortcuts and MIDI messages:"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Key"),r.a.createElement("th",null,"MIDI CC#"),r.a.createElement("th",null,"Function")),r.a.createElement("tr",null,r.a.createElement("td",null,"[esc]"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"fullscreen window")),r.a.createElement("tr",null,r.a.createElement("td",null,"[~]"),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"hide all UI elements")),r.a.createElement("tr",null,r.a.createElement("td",null,"[s]"),r.a.createElement("td",null,"40 ",r.a.createElement("br",null)," (trigger value: 127)"),r.a.createElement("td",null,"save current preset")),r.a.createElement("tr",null,r.a.createElement("td",null,"[1]-[0]"),r.a.createElement("td",null,"20-29 ",r.a.createElement("br",null)," (trigger value: 127)"),r.a.createElement("td",null,"recall preset")),r.a.createElement("tr",null,r.a.createElement("td",null,"[z] [x] [c]"),r.a.createElement("td",null,"30, 21, 32 ",r.a.createElement("br",null)," (trigger value: 127)"),r.a.createElement("td",null,"select active drawShader")),r.a.createElement("tr",null,r.a.createElement("td",null,"-"),r.a.createElement("td",null,"0-11 (value 0-127)"),r.a.createElement("td",null,"drawShader sliders")),r.a.createElement("tr",null,r.a.createElement("td",null,"-"),r.a.createElement("td",null,"12-15 (value 0-127)"),r.a.createElement("td",null,"feedbackShader sliders")))),r.a.createElement("span",{style:{fontSize:"smaller"}},"\xa9 2020 d putnam")))},fe=a(10),me=function(e,t,a){var n=Object(fe.a)(t,2),r=n[0],l=n[1],i=Object(fe.a)(a,2),o=i[0],s=i[1];return Number((e-o)/(s-o))*(l-r)+r},he=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ve=[[[0,1,30,0,"\u223f1"],[1,150,10,30,"\u223f2"],[2,1,200,110,"\u223f3"],[3,20,50,118,"\u223f4"],[4,1,100,26,"\u223f5"],[5,0,100,0,"scan"],[6,0,2.09,0,"rota"],[7,.5,.1,60,"zoom"],[8,-1,2,45,"brightness"],[9,.65,1,127,"contrast"],[10,0,2,127,"saturation"],[11,0,6.28,127,"hue"],[12,.4,0,60,"\u223fR"],[13,.4,0,9,"\u223fG"],[14,.3,0,83,"\u223fB"],[15,1,.98,0,"\u0394"]],[[0,1,90,1,"\u223f1"],[1,1,100,127,"\u223f2"],[2,1,100,100,"\u223f3"],[3,0,100,127,"\u223f4"],[4,-100,100,100,"\u223f5"],[5,-100,100,0,"\u223f6"],[6,-.5,.5,42,"rota"],[7,.4,.1,63,"zoom"],[8,0,2,68,"brightness"],[9,.65,1,71,"contrast"],[10,0,2,60,"saturation"],[11,0,6.28,127,"hue"],[12,.4,0,30,"\u223fR"],[13,.4,0,0,"\u223fG"],[14,.3,0,10,"\u223fB"],[15,1,.98,0,"\u0394"]],[[0,0,5,119,"\u223f1"],[1,0,5,26,"\u223f2"],[2,10,30,99,"\u223f3"],[3,0,15,0,"\u223f4"],[4,1,7,40,"\u223f5"],[5,.1,1,31,"\u223f6"],[6,15,80,100,"\u223f7"],[7,0,1.5,110,"warp"],[8,-2,1,31,"brightness"],[9,.65,1,127,"contrast"],[10,0,2,127,"saturation"],[11,0,6.28,127,"hue"],[12,.4,0,101,"\u223fR"],[13,.4,0,39,"\u223fG"],[14,.3,0,92,"\u223fB"],[15,1,.98,18,"\u0394"]]],ge=(a(24),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleShaderChange=function(e){n.setState({activeShader:e.target.value}),n.setState({uniforms:n.state.sliders[e.target.value].map((function(e){return me(e[3],[e[1],e[2]],[0,127])}))})},n.handleSliderChange=function(e){var t=Number(e.target.dataset.target),a=n.state.sliders.map((function(e){return e}));a[n.state.activeShader][t][3]=Number(e.target.value),n.setState({sliders:a});var r=[a[n.state.activeShader][t][1],a[n.state.activeShader][t][2]],l=[Number(0),Number(127)];(function(){var e=Object(u.a)(c.a.mark((function e(){var a,i,o,s,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<10)){e.next=15;break}return i=n.state.uniforms[t],o=me(n.state.sliders[n.state.activeShader][t][3],r,l)/1,s=-1*(i-(i*(1-(c=.1))+o*c)),u=i,d=n.state.uniforms.map((function(e){return e})),u+=Number(s),d[t]=u,n.setState({uniforms:d}),e.next=12,he(15);case 12:a++,e.next=1;break;case 15:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}})()()},n.handlePresetChange=function(e){n.state.presets[e.target.value]&&n.setState({activePreset:Number(e.target.value),activeShader:n.state.presets[e.target.value].activeShader,sliders:n.state.presets[e.target.value].sliders,uniforms:n.state.presets[e.target.value].uniforms})},n.handlePresetSave=function(){var e=JSON.parse(JSON.stringify(n.state.sliders)),t={activeShader:n.state.activeShader,sliders:e,uniforms:n.state.uniforms},a=n.state.presets.map((function(e){return e}));if(a.length<10){n.setState({activePreset:a.length});var r=a.concat(t);n.setState({presets:r}),window.localStorage.setItem("ursprst",JSON.stringify(r))}else a[n.state.activePreset]=t,n.setState({presets:a}),window.localStorage.setItem("ursprst",JSON.stringify(a))},n.handleWindowChange=function(e){var t=n.state.windowState.map((function(e){return e}));window.screen.width<415||window.screen.width<813&&window.screen.height<415?1===t[e.target.value]?t=n.state.windowState.map((function(){return 0})):(t=n.state.windowState.map((function(){return 0})))[e.target.value]=1:0===t[e.target.value]?t[e.target.value]=1:t[e.target.value]=0,n.setState({windowState:t})},n.showHideControls=function(){var e="controls ";return 0===n.state.windowState[0]&&0===n.state.windowState[1]&&0===n.state.windowState[2]?e+="hidden":e+="showing",e},n.handleKeyPress=function(e){81===e.keyCode?n.handleWindowChange({target:{value:0}}):87===e.keyCode?n.handleWindowChange({target:{value:1}}):69===e.keyCode?n.handleWindowChange({target:{value:2}}):82===e.keyCode?n.handleWindowChange({target:{value:3}}):84===e.keyCode?n.handleWindowChange({target:{value:4}}):90===e.keyCode?n.handleShaderChange({target:{value:"0"}}):88===e.keyCode?n.handleShaderChange({target:{value:"1"}}):67===e.keyCode?n.handleShaderChange({target:{value:"2"}}):e.keyCode>=49&&e.keyCode<=57?n.state.presets.length>=e.keyCode-48&&n.handlePresetChange({target:{value:e.keyCode-49}}):48===e.keyCode?10===n.state.presets.length&&n.handlePresetChange({target:{value:9}}):83===e.keyCode?n.handlePresetSave():192===e.keyCode?!1===n.state.hideAllState?n.setState({hideAllState:!0}):n.setState({hideAllState:!1}):27===e.keyCode&&(document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen())},n.midiMount=function(){navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(n.onMIDISuccess,n.onMIDIFailure):console.log("WebMIDI is not supported in this browser.")},n.onMIDIFailure=function(){console.log("Could not access your MIDI devices.")},n.onMIDISuccess=function(e){var t,a=Object(o.a)(e.inputs.values());try{for(a.s();!(t=a.n()).done;){t.value.onmidimessage=n.getMIDIMessage}}catch(r){a.e(r)}finally{a.f()}},n.getMIDIMessage=function(e){var t=e.data;if(t[1]<=15){var a={target:{dataset:{target:t[1]},value:t[2]}};n.handleSliderChange(a)}else 30===t[1]&&127===t[2]?n.handleShaderChange({target:{value:"0"}}):31===t[1]&&127===t[2]?n.handleShaderChange({target:{value:"1"}}):32===t[1]&&127===t[2]?n.handleShaderChange({target:{value:"2"}}):t[1]>=20&&t[1]<=29&&127===t[2]?29===t[1]?n.handlePresetChange({target:{value:9}}):n.handlePresetChange({target:{value:t[1]-20}}):40===t[1]&&127===t[2]&&n.handlePresetSave()},window.localStorage.getItem("ursprst")?n.state={sliders:JSON.parse(localStorage.getItem("ursprst"))[0].sliders,activeShader:JSON.parse(localStorage.getItem("ursprst"))[0].activeShader,activePreset:0,windowState:window.screen.width<813&&(window.screen.height<415||window.screen.width<415)?[1,0,0,0,0]:[1,1,1,0,0],hideAllState:!1,uniforms:JSON.parse(localStorage.getItem("ursprst"))[0].uniforms,presets:JSON.parse(localStorage.getItem("ursprst"))}:n.state={sliders:JSON.parse(JSON.stringify(ve)),activeShader:"0",activePreset:0,windowState:window.screen.width<813&&(window.screen.height<415||window.screen.width<415)?[1,0,0,0,0]:[1,1,1,0,0],hideAllState:!1,uniforms:ve[0].map((function(e){return me(e[3],[e[1],e[2]],[0,127])})),presets:[{activeShader:"0",sliders:JSON.parse(JSON.stringify(ve)),uniforms:ve[0].map((function(e){return me(e[3],[e[1],e[2]],[0,127])}))}]},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress),"https:"===window.location.protocol?this.midiMount():console.log("connect via HTTPS to use MIDI features!")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{activeShader:this.state.activeShader,uniforms:this.state.uniforms}),r.a.createElement("div",{style:!0===this.state.hideAllState?{visibility:"hidden"}:{visibility:"visible"}},r.a.createElement("div",{style:window.screen.width<415?{display:"block"}:{display:"flex"},className:"container"},r.a.createElement(ie,{windowState:this.state.windowState,handler:this.handleWindowChange}),r.a.createElement("div",{className:this.showHideControls()},r.a.createElement(oe,{windowState:this.state.windowState,activeShader:this.state.activeShader,handler:this.handleShaderChange}),r.a.createElement(se,{windowState:this.state.windowState,activeShader:this.state.activeShader,sliders:this.state.sliders,handler:this.handleSliderChange}),r.a.createElement(ce,{windowState:this.state.windowState,activeShader:this.state.activeShader,sliders:this.state.sliders,handler:this.handleSliderChange})),r.a.createElement("div",{className:"info"},r.a.createElement(ue,{presets:this.state.presets,windowState:this.state.windowState,activePreset:this.state.activePreset,changeHandler:this.handlePresetChange,saveHandler:this.handlePresetSave}),r.a.createElement(de,{windowState:this.state.windowState})))))}}]),a}(n.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.79f4eb16.chunk.js.map