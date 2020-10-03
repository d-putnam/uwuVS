const fragShader3 = `
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
  uniform float u_6;
  uniform float u_7;
  uniform float u_8;


void main(){
  vec2 coord = 6.0 * vec2(gl_FragCoord.xy / u_resolution);

  for(int i = 1; i < 4; i++) {
    float n = float(i);
    coord += vec2(u_7 / n * sin(n * coord.y + u_0 * n) + 0.8, 0.4 / n * sin(coord.x + u_1 * n) + 1.6);
  }

  vec3 color = vec3(u_1 * sin(coord.x) + 0.8, 0.5 * sin(coord.y) + 1.0, sin(coord.x + coord.y));
  color += sin(coord.y * cos(u_time / 20.0)) + u_8 + sin(coord.y * cos(u_time / 30.0) * u_2);
  color += sin(coord.x * sin(u_time / 30.0) * u_4) + cos(coord.x * cos((u_time / 200.0) ) * ((((u_time + 100.0) / 200.0) * u_6)) / u_4) / u_5 + 0.5;
  color -= cos(coord.y * sin(u_time / 50.0) * u_3);

  gl_FragColor = vec4(color, 1.20);
}
`

export { fragShader3 }