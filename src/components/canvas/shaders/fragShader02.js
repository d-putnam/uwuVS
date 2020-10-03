const fragShader2 = `
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_0;
  uniform float u_1;
  uniform float u_2;
  uniform float u_3;
  uniform float u_4;
  uniform float u_5;
  uniform float u_6; // rota
  uniform float u_7; // zoom
  uniform float u_8; // brightness


  mat2 rotate(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  void main(){
    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * u_7;
    float color = 0.0;

    coord = rotate( u_6 ) * coord;

    color += sin(coord.y) + atan(u_time + coord.y) + sin(u_0 * coord.x / u_time) * 2.0;
    color += sin(coord.x * u_0 + tan(u_time + coord.y * u_2 + sin(coord.x * u_4 + u_time))) * 2.0;
    color += cos(coord.x * u_1 + tan(u_time + coord.y * u_3 + cos(coord.x * u_5 + u_time))) * 2.0;

    gl_FragColor = vec4(vec3(color - sin(coord.x * u_time) , color - cos(coord.y * u_time + 9.0), color - sin(coord.y * u_time)) * -0.5 + u_8, 1.0 );
  }
`

export { fragShader2 }