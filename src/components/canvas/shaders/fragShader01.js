const fragShader1 = `
  #ifdef GL_ES
    precision highp float;
  #endif

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_0; // wave 1
  uniform float u_1; // wave 2
  uniform float u_2; // wave 3
  uniform float u_3; // wave 4
  uniform float u_4; // wave 5
  uniform float u_5; // scanlines
  uniform float u_6; // scan_rota
  uniform float u_7; // zoom
  uniform float u_8; // brightness

  mat2 rotate(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  }

  void main(){
    vec2 coord = (gl_FragCoord.xy / u_resolution.xy) * u_7 - u_7;
    float color = 0.0;

    color += sin(coord.x * u_0 + cos(u_time + coord.y * u_1 + sin(coord.x * u_2 + u_time * 2.0))) * 2.0;
    color += cos(coord.x * u_3 + sin(u_time + coord.y * u_4 + cos(coord.x * 20.0 + u_time * 2.0))) * 2.0;

    coord = rotate( u_6 ) * coord;
    color *= cos(coord.y * u_5 + sin(u_time + coord.y)) * 5.5;

    gl_FragColor = vec4(vec3(color, color, color + u_8 / 2.0) * 1.0 + u_8, 1.0 );
  }
`;

export { fragShader1 }