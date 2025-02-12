"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[304],{1838:(e,t,i)=>{i.d(t,{N:()=>a});var n=i(2115),o=i(7249),r=i(3307);function a(e){let t=(0,n.useRef)(0),{isStatic:i}=(0,n.useContext)(o.Q);(0,n.useEffect)(()=>{if(i)return;let n=({timestamp:i,delta:n})=>{t.current||(t.current=i),e(i-t.current,n)};return r.Gt.update(n,!0),()=>(0,r.WG)(n)},[e])}},1747:(e,t,i)=>{function n(e,t){let i,n,o,r,a,s,l,u;function c(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}em(),t={IMMEDIATE:!0,TRIGGER:"hover",AUTO:!1,INTERVAL:3e3,SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SPLAT_COUNT:Number.parseInt(20*Math.random())+5,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1,...t};let d=[],f=[],h=[];d.push(new c);let{gl:_,ext:m}=function(e){let t,i,n,o,r;let a={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},s=e.getContext("webgl2",a),l=!!s;l||(s=e.getContext("webgl",a)||e.getContext("experimental-webgl",a)),l?(s.getExtension("EXT_color_buffer_float"),i=s.getExtension("OES_texture_float_linear")):(t=s.getExtension("OES_texture_half_float"),i=s.getExtension("OES_texture_half_float_linear")),s.clearColor(0,0,0,1);let u=l?s.HALF_FLOAT:t.HALF_FLOAT_OES;return l?(n=p(s,s.RGBA16F,s.RGBA,u),o=p(s,s.RG16F,s.RG,u),r=p(s,s.R16F,s.RED,u)):(n=p(s,s.RGBA,s.RGBA,u),o=p(s,s.RGBA,s.RGBA,u),r=p(s,s.RGBA,s.RGBA,u)),{gl:s,ext:{formatRGBA:n,formatRG:o,formatR:r,halfFloatTexType:u,supportLinearFiltering:i}}}(e);function p(e,t,i,n){if(!function(e,t,i,n){let o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,i,n,null);let r=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}(e,t,i,n))switch(t){case e.R16F:return p(e,e.RG16F,e.RG,n);case e.RG16F:return p(e,e.RGBA16F,e.RGBA,n);default:return null}return{internalFormat:t,format:i}}/Mobi|Android/i.test(navigator.userAgent)&&(t.DYE_RESOLUTION=512),m.supportLinearFiltering||(t.DYE_RESOLUTION=512,t.SHADING=!1,t.BLOOM=!1,t.SUNRAYS=!1);class v{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let i=0;i<e.length;i++)t+=function(e){if(0===e.length)return 0;let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i)|0;return t}(e[i]);let i=this.programs[t];if(!i){let n=E(_.FRAGMENT_SHADER,this.fragmentShaderSource,e);i=b(this.vertexShader,n),this.programs[t]=i}i!==this.activeProgram&&(this.uniforms=x(i),this.activeProgram=i)}bind(){_.useProgram(this.activeProgram)}}class g{constructor(e,t){this.uniforms={},this.program=b(e,t),this.uniforms=x(this.program)}bind(){_.useProgram(this.program)}}function b(e,t){let i=_.createProgram();if(_.attachShader(i,e),_.attachShader(i,t),_.linkProgram(i),!_.getProgramParameter(i,_.LINK_STATUS))throw _.getProgramInfoLog(i);return i}function x(e){let t=[],i=_.getProgramParameter(e,_.ACTIVE_UNIFORMS);for(let n=0;n<i;n++){let i=_.getActiveUniform(e,n).name;t[i]=_.getUniformLocation(e,i)}return t}function E(e,t,i){t=function(e,t){if(!t)return e;let i="";return t.forEach(e=>{i+=`#define ${e}
`}),i+e}(t,i);let n=_.createShader(e);if(_.shaderSource(n,t),_.compileShader(n),!_.getShaderParameter(n,_.COMPILE_STATUS))throw _.getShaderInfoLog(n);return n}let y=E(_.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),T=E(_.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),w=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),S=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),A=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),R=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
`),C=E(_.FRAGMENT_SHADER,t.TRANSPARENT?`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
`:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),D=`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;
        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif
    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif
    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif
    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,L=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),N=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),k=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),U=E(_.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),F=E(_.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;
    #define ITERATIONS 16
    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;
        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;
        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;
        float color = texture2D(uTexture, vUv).a;
        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }
        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),B=E(_.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),P=E(_.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;
        vec2 iuv = floor(st);
        vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,m.supportLinearFiltering?null:["MANUAL_FILTERING"]),I=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),M=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),z=E(_.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
`),H=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),G=E(_.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),X=(_.bindBuffer(_.ARRAY_BUFFER,_.createBuffer()),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),_.STATIC_DRAW),_.bindBuffer(_.ELEMENT_ARRAY_BUFFER,_.createBuffer()),_.bufferData(_.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),_.STATIC_DRAW),_.vertexAttribPointer(0,2,_.FLOAT,!1,0,0),_.enableVertexAttribArray(0),e=>{_.bindFramebuffer(_.FRAMEBUFFER,e),_.drawElements(_.TRIANGLES,6,_.UNSIGNED_SHORT,0)}),V=function(e){let t=_.createTexture();_.bindTexture(_.TEXTURE_2D,t),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,_.LINEAR),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.REPEAT),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.REPEAT),_.texImage2D(_.TEXTURE_2D,0,_.RGB,1,1,0,_.RGB,_.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let i={texture:t,width:1,height:1,attach:e=>(_.activeTexture(_.TEXTURE0+e),_.bindTexture(_.TEXTURE_2D,t),e)},n=new Image;return n.onload=()=>{i.width=n.width,i.height=n.height,_.bindTexture(_.TEXTURE_2D,t),_.texImage2D(_.TEXTURE_2D,0,_.RGB,_.RGB,_.UNSIGNED_BYTE,n)},i}(),Y=new g(T,w),j=new g(y,S),W=new g(y,A),K=new g(y,R),J=new g(y,C),Q=new g(y,L),q=new g(y,N),Z=new g(y,k),$=new g(y,U),ee=new g(y,F),et=new g(y,B),ei=new g(y,P),en=new g(y,I),eo=new g(y,M),er=new g(y,z),ea=new g(y,H),es=new g(y,G),el=new v(y,D);function eu(){let e=eE(t.SIM_RESOLUTION),c=eE(t.DYE_RESOLUTION),d=m.halfFloatTexType,f=m.formatRGBA,p=m.formatRG,v=m.formatR,g=m.supportLinearFiltering?_.LINEAR:_.NEAREST;i=i?ef(i,c.width,c.height,f.internalFormat,f.format,d,g):ed(c.width,c.height,f.internalFormat,f.format,d,g),n=n?ef(n,e.width,e.height,p.internalFormat,p.format,d,g):ed(e.width,e.height,p.internalFormat,p.format,d,g),o=ec(e.width,e.height,v.internalFormat,v.format,d,_.NEAREST),r=ec(e.width,e.height,v.internalFormat,v.format,d,_.NEAREST),a=ed(e.width,e.height,v.internalFormat,v.format,d,_.NEAREST),function(){let e=eE(t.BLOOM_RESOLUTION),i=m.halfFloatTexType,n=m.formatRGBA,o=m.supportLinearFiltering?_.LINEAR:_.NEAREST;s=ec(e.width,e.height,n.internalFormat,n.format,i,o),h.length=0;for(let r=0;r<t.BLOOM_ITERATIONS;r++){let t=e.width>>r+1,a=e.height>>r+1;if(t<2||a<2)break;let s=ec(t,a,n.internalFormat,n.format,i,o);h.push(s)}}(),function(){let e=eE(t.SUNRAYS_RESOLUTION),i=m.halfFloatTexType,n=m.formatR,o=m.supportLinearFiltering?_.LINEAR:_.NEAREST;l=ec(e.width,e.height,n.internalFormat,n.format,i,o),u=ec(e.width,e.height,n.internalFormat,n.format,i,o)}()}function ec(e,t,i,n,o,r){_.activeTexture(_.TEXTURE0);let a=_.createTexture();_.bindTexture(_.TEXTURE_2D,a),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MIN_FILTER,r),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_MAG_FILTER,r),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_S,_.CLAMP_TO_EDGE),_.texParameteri(_.TEXTURE_2D,_.TEXTURE_WRAP_T,_.CLAMP_TO_EDGE),_.texImage2D(_.TEXTURE_2D,0,i,e,t,0,n,o,null);let s=_.createFramebuffer();_.bindFramebuffer(_.FRAMEBUFFER,s),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,a,0),_.viewport(0,0,e,t),_.clear(_.COLOR_BUFFER_BIT);let l=1/e,u=1/t;return{texture:a,fbo:s,width:e,height:t,texelSizeX:l,texelSizeY:u,attach:e=>(_.activeTexture(_.TEXTURE0+e),_.bindTexture(_.TEXTURE_2D,a),e)}}function ed(e,t,i,n,o,r){let a=ec(e,t,i,n,o,r),s=ec(e,t,i,n,o,r);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(O){a=O},get write(){return s},set write(O){s=O},swap(){let e=a;a=s,s=e}}}function ef(e,t,i,n,o,r,a){return e.width===t&&e.height===i||(e.read=function(e,t,i,n,o,r,a){let s=ec(t,i,n,o,r,a);return j.bind(),_.uniform1i(j.uniforms.uTexture,e.attach(0)),X(s.fbo),s}(e.read,t,i,n,o,r,a),e.write=ec(t,i,n,o,r,a),e.width=t,e.height=i,e.texelSizeX=1/t,e.texelSizeY=1/i),e}(function(){let e=[];t.SHADING&&e.push("SHADING"),t.BLOOM&&e.push("BLOOM"),t.SUNRAYS&&e.push("SUNRAYS"),el.setKeywords(e)})(),eu(),t.IMMEDIATE&&ep(t.SPLAT_COUNT),setTimeout(function e(){t.AUTO&&t.INTERVAL&&!t.PAUSED&&f.push(t.SPLAT_COUNT),setTimeout(e,t.INTERVAL)},t.INTERVAL);let eh=Date.now(),e_=0;function em(){let t=ey(e.clientWidth),i=ey(e.clientHeight);return(e.width!==t||e.height!==i)&&(e.width=t,e.height=i,!0)}function ep(e){for(let t=0;t<e;t++){let e=ex();e.r*=10,e.g*=10,e.b*=10,ev(Math.random(),Math.random(),1e3*(Math.random()-.5),1e3*(Math.random()-.5),e)}}function ev(o,r,a,s,l){_.viewport(0,0,n.width,n.height),et.bind(),_.uniform1i(et.uniforms.uTarget,n.read.attach(0)),_.uniform1f(et.uniforms.aspectRatio,e.width/e.height),_.uniform2f(et.uniforms.point,o,r),_.uniform3f(et.uniforms.color,a,s,0),_.uniform1f(et.uniforms.radius,function(t){let i=e.width/e.height;return i>1&&(t*=i),t}(t.SPLAT_RADIUS/100)),X(n.write.fbo),n.swap(),_.viewport(0,0,i.width,i.height),_.uniform1i(et.uniforms.uTarget,i.read.attach(0)),_.uniform3f(et.uniforms.color,l.r,l.g,l.b),X(i.write.fbo),i.swap()}function eg(t,i,n,o){t.id=i,t.down=!0,t.moved=!1,t.texcoordX=n/e.width,t.texcoordY=1-o/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=ex()}function eb(i,n,o){"click"===t.TRIGGER&&(i.moved=i.down),i.prevTexcoordX=i.texcoordX,i.prevTexcoordY=i.texcoordY,i.texcoordX=n/e.width,i.texcoordY=1-o/e.height,i.deltaX=function(t){let i=e.width/e.height;return i<1&&(t*=i),t}(i.texcoordX-i.prevTexcoordX),i.deltaY=function(t){let i=e.width/e.height;return i>1&&(t/=i),t}(i.texcoordY-i.prevTexcoordY),"hover"===t.TRIGGER&&(i.moved=Math.abs(i.deltaX)>0||Math.abs(i.deltaY)>0)}function ex(){let e=function(e,t,i){let n,o,r;let a=Math.floor(6*e),s=6*e-a,l=1*(1-1*s),u=i*(1-(1-s)*t);switch(a%6){case 0:n=i,o=u,r=0;break;case 1:n=l,o=i,r=0;break;case 2:n=0,o=i,r=u;break;case 3:n=0,o=l,r=i;break;case 4:n=u,o=0,r=i;break;case 5:n=i,o=0,r=l}return{r:n,g:o,b:r}}(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function eE(e){let t=_.drawingBufferWidth/_.drawingBufferHeight;t<1&&(t=1/t);let i=Math.round(e),n=Math.round(e*t);return _.drawingBufferWidth>_.drawingBufferHeight?{width:n,height:i}:{width:i,height:n}}function ey(e){return Math.floor(e*(window.devicePixelRatio||1))}!function c(){var p,v,g;let b=function(){let e=Date.now(),t=(e-eh)/1e3;return t=Math.min(t,.016666),eh=e,t}();em()&&eu(),t.COLORFUL&&(e_+=b*t.COLOR_UPDATE_SPEED)>=1&&(p=e_,v=0,g=0,e_=(p-v)%1+v,d.forEach(e=>{e.color=ex()})),f.length>0&&ep(f.pop()),d.forEach(e=>{e.moved&&(e.moved=!1,function(e){let i=e.deltaX*t.SPLAT_FORCE,n=e.deltaY*t.SPLAT_FORCE;ev(e.texcoordX,e.texcoordY,i,n,e.color)}(e))}),t.PAUSED||function(e){_.disable(_.BLEND),_.viewport(0,0,n.width,n.height),eo.bind(),_.uniform2f(eo.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(eo.uniforms.uVelocity,n.read.attach(0)),X(r.fbo),er.bind(),_.uniform2f(er.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(er.uniforms.uVelocity,n.read.attach(0)),_.uniform1i(er.uniforms.uCurl,r.attach(1)),_.uniform1f(er.uniforms.curl,t.CURL),_.uniform1f(er.uniforms.dt,e),X(n.write.fbo),n.swap(),en.bind(),_.uniform2f(en.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(en.uniforms.uVelocity,n.read.attach(0)),X(o.fbo),W.bind(),_.uniform1i(W.uniforms.uTexture,a.read.attach(0)),_.uniform1f(W.uniforms.value,t.PRESSURE),X(a.write.fbo),a.swap(),ea.bind(),_.uniform2f(ea.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(ea.uniforms.uDivergence,o.attach(0));for(let e=0;e<t.PRESSURE_ITERATIONS;e++)_.uniform1i(ea.uniforms.uPressure,a.read.attach(1)),X(a.write.fbo),a.swap();es.bind(),_.uniform2f(es.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(es.uniforms.uPressure,a.read.attach(0)),_.uniform1i(es.uniforms.uVelocity,n.read.attach(1)),X(n.write.fbo),n.swap(),ei.bind(),_.uniform2f(ei.uniforms.texelSize,n.texelSizeX,n.texelSizeY),m.supportLinearFiltering||_.uniform2f(ei.uniforms.dyeTexelSize,n.texelSizeX,n.texelSizeY);let s=n.read.attach(0);_.uniform1i(ei.uniforms.uVelocity,s),_.uniform1i(ei.uniforms.uSource,s),_.uniform1f(ei.uniforms.dt,e),_.uniform1f(ei.uniforms.dissipation,t.VELOCITY_DISSIPATION),X(n.write.fbo),n.swap(),_.viewport(0,0,i.width,i.height),m.supportLinearFiltering||_.uniform2f(ei.uniforms.dyeTexelSize,i.texelSizeX,i.texelSizeY),_.uniform1i(ei.uniforms.uVelocity,n.read.attach(0)),_.uniform1i(ei.uniforms.uSource,i.read.attach(1)),_.uniform1f(ei.uniforms.dissipation,t.DENSITY_DISSIPATION),X(i.write.fbo),i.swap()}(b),function(n){var o,r,a,c,d;t.BLOOM&&function(e,i){if(h.length<2)return;let n=i;_.disable(_.BLEND),Q.bind();let o=t.BLOOM_THRESHOLD*t.BLOOM_SOFT_KNEE+1e-4,r=t.BLOOM_THRESHOLD-o;_.uniform3f(Q.uniforms.curve,r,2*o,.25/o),_.uniform1f(Q.uniforms.threshold,t.BLOOM_THRESHOLD),_.uniform1i(Q.uniforms.uTexture,e.attach(0)),_.viewport(0,0,n.width,n.height),X(n.fbo),q.bind();for(let e=0;e<h.length;e++){let t=h[e];_.uniform2f(q.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(q.uniforms.uTexture,n.attach(0)),_.viewport(0,0,t.width,t.height),X(t.fbo),n=t}_.blendFunc(_.ONE,_.ONE),_.enable(_.BLEND);for(let e=h.length-2;e>=0;e--){let t=h[e];_.uniform2f(q.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(q.uniforms.uTexture,n.attach(0)),_.viewport(0,0,t.width,t.height),X(t.fbo),n=t}_.disable(_.BLEND),Z.bind(),_.uniform2f(Z.uniforms.texelSize,n.texelSizeX,n.texelSizeY),_.uniform1i(Z.uniforms.uTexture,n.attach(0)),_.uniform1f(Z.uniforms.intensity,t.BLOOM_INTENSITY),_.viewport(0,0,i.width,i.height),X(i.fbo)}(i.read,s),t.SUNRAYS&&(o=i.read,r=i.write,a=l,_.disable(_.BLEND),$.bind(),_.uniform1i($.uniforms.uTexture,o.attach(0)),_.viewport(0,0,r.width,r.height),X(r.fbo),ee.bind(),_.uniform1f(ee.uniforms.weight,t.SUNRAYS_WEIGHT),_.uniform1i(ee.uniforms.uTexture,r.attach(0)),_.viewport(0,0,a.width,a.height),X(a.fbo),function(e,t,i){Y.bind();for(let i=0;i<1;i++)_.uniform2f(Y.uniforms.texelSize,e.texelSizeX,0),_.uniform1i(Y.uniforms.uTexture,e.attach(0)),X(t.fbo),_.uniform2f(Y.uniforms.texelSize,0,e.texelSizeY),_.uniform1i(Y.uniforms.uTexture,t.attach(0)),X(e.fbo)}(l,u,0)),_.blendFunc(_.ONE,_.ONE_MINUS_SRC_ALPHA),_.enable(_.BLEND);let f=(0,_.drawingBufferWidth),m=n?n.height:_.drawingBufferHeight;_.viewport(0,0,f,m);let p=n?n.fbo:null;t.TRANSPARENT||(d={r:(c=t.BACK_COLOR).r/255,g:c.g/255,b:c.b/255},K.bind(),_.uniform4f(K.uniforms.color,d.r,d.g,d.b,1),X(p)),!n&&t.TRANSPARENT&&(J.bind(),_.uniform1f(J.uniforms.aspectRatio,e.width/e.height),X(p)),function(e,n,o){if(el.bind(),t.SHADING&&_.uniform2f(el.uniforms.texelSize,1/n,1/o),_.uniform1i(el.uniforms.uTexture,i.read.attach(0)),t.BLOOM){_.uniform1i(el.uniforms.uBloom,s.attach(1)),_.uniform1i(el.uniforms.uDithering,V.attach(2));let e={x:n/V.width,y:o/V.height};_.uniform2f(el.uniforms.ditherScale,e.x,e.y)}t.SUNRAYS&&_.uniform1i(el.uniforms.uSunrays,l.attach(3)),X(e)}(p,f,m)}(null),requestAnimationFrame(c)}(),e.addEventListener("mousedown",e=>{let t=ey(e.offsetX),i=ey(e.offsetY),n=d.find(e=>-1===e.id);n||(n=new c),eg(n,-1,t,i)}),setTimeout(()=>{e.addEventListener("mousemove",e=>{let t=ey(e.offsetX),i=ey(e.offsetY);eb(d[0],t,i)})},500),window.addEventListener("mouseup",()=>{d[0].down=!1}),e.addEventListener("touchstart",e=>{e.preventDefault();let t=e.targetTouches;for(;t.length>=d.length;)d.push(new c);for(let e=0;e<t.length;e++){let i=ey(t[e].pageX),n=ey(t[e].pageY);eg(d[e+1],t[e].identifier,i,n)}}),e.addEventListener("touchmove",e=>{e.preventDefault();let t=e.targetTouches;for(let e=0;e<t.length;e++){let i=ey(t[e].pageX),n=ey(t[e].pageY);eb(d[e+1],i,n)}},!1),window.addEventListener("touchend",e=>{let t=e.changedTouches;for(let e=0;e<t.length;e++)d.find(i=>i.id===t[e].identifier).down=!1}),window.addEventListener("keydown",e=>{"KeyP"===e.code&&(t.PAUSED=!t.PAUSED)," "===e.key&&f.push(Number.parseInt(20*Math.random())+5)})}i.d(t,{A:()=>n}),function(e,t){"object"==typeof exports&&"u">typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.dat={})}(globalThis,function(e){function t(e,t){var i=e.__state.conversionName.toString(),n=Math.round(e.r),o=Math.round(e.g),r=Math.round(e.b),a=e.a,s=Math.round(e.h),l=e.s.toFixed(1),u=e.v.toFixed(1);if(t||"THREE_CHAR_HEX"===i||"SIX_CHAR_HEX"===i){for(var c=e.hex.toString(16);c.length<6;)c="0"+c;return"#"+c}return"CSS_RGB"===i?"rgb("+n+","+o+","+r+")":"CSS_RGBA"===i?"rgba("+n+","+o+","+r+","+a+")":"HEX"===i?"0x"+e.hex.toString(16):"RGB_ARRAY"===i?"["+n+","+o+","+r+"]":"RGBA_ARRAY"===i?"["+n+","+o+","+r+","+a+"]":"RGB_OBJ"===i?"{r:"+n+",g:"+o+",b:"+r+"}":"RGBA_OBJ"===i?"{r:"+n+",g:"+o+",b:"+r+",a:"+a+"}":"HSV_OBJ"===i?"{h:"+s+",s:"+l+",v:"+u+"}":"HSVA_OBJ"===i?"{h:"+s+",s:"+l+",v:"+u+",a:"+a+"}":"unknown format"}function i(e,t,i){Object.defineProperty(e,t,{get:function(){return"RGB"===this.__state.space||k.recalculateRGB(this,t,i),this.__state[t]},set:function(e){"RGB"!==this.__state.space&&(k.recalculateRGB(this,t,i),this.__state.space="RGB"),this.__state[t]=e}})}function n(e,t){Object.defineProperty(e,t,{get:function(){return"HSV"===this.__state.space||k.recalculateHSV(this),this.__state[t]},set:function(e){"HSV"!==this.__state.space&&(k.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=e}})}function o(e){if("0"===e||b.isUndefined(e))return 0;var t=e.match(B);return b.isNull(t)?0:parseFloat(t[1])}function r(e){var t=e.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}function a(e,t,i,n){e.style.background="",b.each(j,function(o){e.style.cssText+="background: "+o+"linear-gradient("+t+", "+i+" 0%, "+n+" 100%); "})}function s(e,t,i){var n=document.createElement("li");return t&&n.appendChild(t),i?e.__ul.insertBefore(n,i):e.__ul.appendChild(n),e.onResize(),n}function l(e){P.unbind(window,"resize",e.__resizeHandler),e.saveToLocalStorageIfPossible&&P.unbind(window,"unload",e.saveToLocalStorageIfPossible)}function u(e,t){var i=e.__preset_select[e.__preset_select.selectedIndex];i.innerHTML=t?i.value+"*":i.value}function c(e,t){var i=e.getRoot(),n=i.__rememberedObjects.indexOf(t.object);if(-1!==n){var o=i.__rememberedObjectIndecesToControllers[n];if(void 0===o&&(o={},i.__rememberedObjectIndecesToControllers[n]=o),o[t.property]=t,i.load&&i.load.remembered){var r=i.load.remembered,a=void 0;if(r[e.preset])a=r[e.preset];else{if(!r[Q])return;a=r[Q]}if(a[n]&&void 0!==a[n][t.property]){var s=a[n][t.property];t.initialValue=s,t.setValue(s)}}}}function d(e,t,i,n){if(void 0===t[i])throw Error('Object "'+t+'" has no property "'+i+'"');var o=void 0;o=n.color?new Y(t,i):W.apply(e,[t,i].concat(n.factoryArgs)),n.before instanceof U&&(n.before=n.before.__li),c(e,o),P.addClass(o.domElement,"c");var r=document.createElement("span");P.addClass(r,"property-name"),r.innerHTML=o.property;var a=document.createElement("div");a.appendChild(r),a.appendChild(o.domElement);var l=s(e,a,n.before);return P.addClass(l,en.CLASS_CONTROLLER_ROW),o instanceof Y?P.addClass(l,"color"):P.addClass(l,A(o.getValue())),function(e,t,i){if(i.__li=t,i.__gui=e,b.extend(i,{options:function(t){if(arguments.length>1){var n=i.__li.nextElementSibling;return i.remove(),d(e,i.object,i.property,{before:n,factoryArgs:[b.toArray(arguments)]})}if(b.isArray(t)||b.isObject(t)){var o=i.__li.nextElementSibling;return i.remove(),d(e,i.object,i.property,{before:o,factoryArgs:[t]})}},name:function(e){return i.__li.firstElementChild.firstElementChild.innerHTML=e,i},listen:function(){return i.__gui.listen(i),i},remove:function(){return i.__gui.remove(i),i}}),i instanceof X){var n=new G(i.object,i.property,{min:i.__min,max:i.__max,step:i.__step});b.each(["updateDisplay","onChange","onFinishChange","step"],function(e){var t=i[e],o=n[e];i[e]=n[e]=function(){var e=Array.prototype.slice.call(arguments);return o.apply(n,e),t.apply(i,e)}}),P.addClass(t,"has-slider"),i.domElement.insertBefore(n.domElement,i.domElement.firstElementChild)}else if(i instanceof G){var o=function(t){if(b.isNumber(i.__min)&&b.isNumber(i.__max)){var n=i.__li.firstElementChild.firstElementChild.innerHTML,o=i.__gui.__listening.indexOf(i)>-1;i.remove();var r=d(e,i.object,i.property,{before:i.__li.nextElementSibling,factoryArgs:[i.__min,i.__max,i.__step]});return r.name(n),o&&r.listen(),r}return t};i.min=b.compose(o,i.min),i.max=b.compose(o,i.max)}else i instanceof I?(P.bind(t,"click",function(){P.fakeEvent(i.__checkbox,"click")}),P.bind(i.__checkbox,"click",function(e){e.stopPropagation()})):i instanceof V?(P.bind(t,"click",function(){P.fakeEvent(i.__button,"click")}),P.bind(t,"mouseover",function(){P.addClass(i.__button,"hover")}),P.bind(t,"mouseout",function(){P.removeClass(i.__button,"hover")})):i instanceof Y&&(P.addClass(t,"color"),i.updateDisplay=b.compose(function(e){return t.style.borderLeftColor=i.__color.toString(),e},i.updateDisplay),i.updateDisplay());i.setValue=b.compose(function(t){return e.getRoot().__preset_select&&i.isModified()&&u(e.getRoot(),!0),t},i.setValue)}(e,l,o),e.__controllers.push(o),o}function f(e,t){return document.location.href+"."+t}function h(e,t,i){var n=document.createElement("option");n.innerHTML=t,n.value=t,e.__preset_select.appendChild(n),i&&(e.__preset_select.selectedIndex=e.__preset_select.length-1)}function _(e,t){t.style.display=e.useLocalStorage?"block":"none"}function m(e,t){e.domElement.style.width=t+"px",e.__save_row&&e.autoPlace&&(e.__save_row.style.width=t+"px"),e.__closeButton&&(e.__closeButton.style.width=t+"px")}function p(e,t){var i={};return b.each(e.__rememberedObjects,function(n,o){var r={},a=e.__rememberedObjectIndecesToControllers[o];b.each(a,function(e,i){r[i]=t?e.initialValue:e.getValue()}),i[o]=r}),i}var v=Array.prototype.forEach,g=Array.prototype.slice,b={BREAK:{},extend:function(e){return this.each(g.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach((function(i){this.isUndefined(t[i])||(e[i]=t[i])}).bind(this))},this),e},defaults:function(e){return this.each(g.call(arguments,1),function(t){(this.isObject(t)?Object.keys(t):[]).forEach((function(i){this.isUndefined(e[i])&&(e[i]=t[i])}).bind(this))},this),e},compose:function(){var e=g.call(arguments);return function(){for(var t=g.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(v&&e.forEach&&e.forEach===v)e.forEach(t,i);else if(e.length===e.length+0){var n=void 0,o=void 0;for(n=0,o=e.length;n<o;n++)if(n in e&&t.call(i,e[n],n)===this.BREAK)return}else for(var r in e)if(t.call(i,e[r],r)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var n=void 0;return function(){var o=this,r=arguments,a=i||!n;clearTimeout(n),n=setTimeout(function(){n=null,i||e.apply(o,r)},t),a&&e.apply(o,r)}},toArray:function(e){return e.toArray?e.toArray():g.call(e)},isUndefined:function(e){return void 0===e},isNull:function(e){return null===e},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return isNaN(e)}),isArray:Array.isArray||function(e){return e.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return!1===e||!0===e},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)}},x=[{litmus:b.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:t},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return null!==t&&{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:t},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:t},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return null!==t&&{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:t}}},{litmus:b.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:b.isArray,conversions:{RGB_ARRAY:{read:function(e){return 3===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return 4===e.length&&{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:b.isObject,conversions:{RGBA_OBJ:{read:function(e){return!!(b.isNumber(e.r)&&b.isNumber(e.g)&&b.isNumber(e.b)&&b.isNumber(e.a))&&{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return!!(b.isNumber(e.r)&&b.isNumber(e.g)&&b.isNumber(e.b))&&{space:"RGB",r:e.r,g:e.g,b:e.b}},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return!!(b.isNumber(e.h)&&b.isNumber(e.s)&&b.isNumber(e.v)&&b.isNumber(e.a))&&{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return!!(b.isNumber(e.h)&&b.isNumber(e.s)&&b.isNumber(e.v))&&{space:"HSV",h:e.h,s:e.s,v:e.v}},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],E=void 0,y=void 0,T=function(){y=!1;var e=arguments.length>1?b.toArray(arguments):arguments[0];return b.each(x,function(t){if(t.litmus(e))return b.each(t.conversions,function(t,i){if(E=t.read(e),!1===y&&!1!==E)return y=E,E.conversionName=i,E.conversion=t,b.BREAK}),b.BREAK}),y},w=void 0,S={hsv_to_rgb:function(e,t,i){var n=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),r=i*(1-t),a=i*(1-o*t),s=i*(1-(1-o)*t),l=[[i,s,r],[a,i,r],[r,i,s],[r,a,i],[s,r,i],[i,r,a]][n];return{r:255*l[0],g:255*l[1],b:255*l[2]}},rgb_to_hsv:function(e,t,i){var n=Math.min(e,t,i),o=Math.max(e,t,i),r=o-n,a=void 0,s=void 0;return 0===o?{h:NaN,s:0,v:0}:(s=r/o,(a=(e===o?(t-i)/r:t===o?2+(i-e)/r:4+(e-t)/r)/6)<0&&(a+=1),{h:360*a,s:s,v:o/255})},rgb_to_hex:function(e,t,i){var n=this.hex_with_component(0,2,e);return n=this.hex_with_component(n,1,t),n=this.hex_with_component(n,0,i)},component_from_hex:function(e,t){return e>>8*t&255},hex_with_component:function(e,t,i){return i<<(w=8*t)|e&~(255<<w)}},A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},C=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),D=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},L=function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},N=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e},k=function(){function e(){if(R(this,e),this.__state=T.apply(this,arguments),!1===this.__state)throw Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return C(e,[{key:"toString",value:function(){return t(this)}},{key:"toHexString",value:function(){return t(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),e}();k.recalculateRGB=function(e,t,i){if("HEX"===e.__state.space)e.__state[t]=S.component_from_hex(e.__state.hex,i);else{if("HSV"!==e.__state.space)throw Error("Corrupted color state");b.extend(e.__state,S.hsv_to_rgb(e.__state.h,e.__state.s,e.__state.v))}},k.recalculateHSV=function(e){var t=S.rgb_to_hsv(e.r,e.g,e.b);b.extend(e.__state,{s:t.s,v:t.v}),b.isNaN(t.h)?b.isUndefined(e.__state.h)&&(e.__state.h=0):e.__state.h=t.h},k.COMPONENTS=["r","g","b","h","s","v","hex","a"],i(k.prototype,"r",2),i(k.prototype,"g",1),i(k.prototype,"b",0),n(k.prototype,"h"),n(k.prototype,"s"),n(k.prototype,"v"),Object.defineProperty(k.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}}),Object.defineProperty(k.prototype,"hex",{get:function(){return this.__state.space,this.__state.hex=S.rgb_to_hex(this.r,this.g,this.b),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var U=function(){function e(t,i){R(this,e),this.initialValue=t[i],this.domElement=document.createElement("div"),this.object=t,this.property=i,this.__onChange=void 0,this.__onFinishChange=void 0}return C(e,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),e}(),F={};b.each({HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},function(e,t){b.each(e,function(e){F[e]=t})});var B=/(\d+(\.\d+)?)px/,P={makeSelectable:function(e,t){void 0!==e&&void 0!==e.style&&(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var n=i,o=t;b.isUndefined(o)&&(o=!0),b.isUndefined(n)&&(n=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),n&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,n){var o=i||{},r=F[t];if(!r)throw Error("Event type "+t+" not supported.");var a=document.createEvent(r);switch(r){case"MouseEvents":var s=o.x||o.clientX||0,l=o.y||o.clientY||0;a.initMouseEvent(t,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,s,l,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var u=a.initKeyboardEvent||a.initKeyEvent;b.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break;default:a.initEvent(t,o.bubbles||!1,o.cancelable||!0)}b.defaults(a,n),e.dispatchEvent(a)},bind:function(e,t,i,n){return e.addEventListener?e.addEventListener(t,i,n||!1):e.attachEvent&&e.attachEvent("on"+t,i),P},unbind:function(e,t,i,n){return e.removeEventListener?e.removeEventListener(t,i,n||!1):e.detachEvent&&e.detachEvent("on"+t,i),P},addClass:function(e,t){if(void 0===e.className)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);-1===i.indexOf(t)&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return P},removeClass:function(e,t){if(t){if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),n=i.indexOf(t);-1!==n&&(i.splice(n,1),e.className=i.join(" "))}}else e.className=void 0;return P},hasClass:function(e,t){return RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return o(t["border-left-width"])+o(t["border-right-width"])+o(t["padding-left"])+o(t["padding-right"])+o(t.width)},getHeight:function(e){var t=getComputedStyle(e);return o(t["border-top-width"])+o(t["border-bottom-width"])+o(t["padding-top"])+o(t["padding-bottom"])+o(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},I=function(e){function t(e,i){R(this,t);var n=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.__prev=n.getValue(),n.__checkbox=document.createElement("input"),n.__checkbox.setAttribute("type","checkbox"),P.bind(n.__checkbox,"change",function(){n.setValue(!n.__prev)},!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return L(t,U),C(t,[{key:"setValue",value:function(e){var i=D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return!0===this.getValue()?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),M=function(e){function t(e,i,n){R(this,t);var o=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=n;if(o.__select=document.createElement("select"),b.isArray(r)){var a={};b.each(r,function(e){a[e]=e}),r=a}return b.each(r,function(e,t){var i=document.createElement("option");i.innerHTML=t,i.setAttribute("value",e),o.__select.appendChild(i)}),o.updateDisplay(),P.bind(o.__select,"change",function(){var e=this.options[this.selectedIndex].value;o.setValue(e)}),o.domElement.appendChild(o.__select),o}return L(t,U),C(t,[{key:"setValue",value:function(e){var i=D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,e);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return P.isActive(this.__select)?this:(this.__select.value=this.getValue(),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(),z=function(e){function t(e,i){function n(){r.setValue(r.__input.value)}R(this,t);var o=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),r=o;return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),P.bind(o.__input,"keyup",n),P.bind(o.__input,"change",n),P.bind(o.__input,"blur",function(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}),P.bind(o.__input,"keydown",function(e){13===e.keyCode&&this.blur()}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return L(t,U),C(t,[{key:"updateDisplay",value:function(){return P.isActive(this.__input)||(this.__input.value=this.getValue()),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),H=function(e){function t(e,i,n){R(this,t);var o=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i)),a=n||{};return o.__min=a.min,o.__max=a.max,o.__step=a.step,b.isUndefined(o.__step)?0===o.initialValue?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=r(o.__impliedStep),o}return L(t,U),C(t,[{key:"setValue",value:function(e){var i=e;return void 0!==this.__min&&i<this.__min?i=this.__min:void 0!==this.__max&&i>this.__max&&(i=this.__max),void 0!==this.__step&&i%this.__step!=0&&(i=Math.round(i/this.__step)*this.__step),D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(e){return this.__min=e,this}},{key:"max",value:function(e){return this.__max=e,this}},{key:"step",value:function(e){return this.__step=e,this.__impliedStep=e,this.__precision=r(e),this}}]),t}(),G=function(e){function t(e,i,n){function o(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function r(e){var t=u-e.clientY;l.setValue(l.getValue()+t*l.__impliedStep),u=e.clientY}function a(){P.unbind(window,"mousemove",r),P.unbind(window,"mouseup",a),o()}R(this,t);var s=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,n));s.__truncationSuspended=!1;var l=s,u=void 0;return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),P.bind(s.__input,"change",function(){var e=parseFloat(l.__input.value);b.isNaN(e)||l.setValue(e)}),P.bind(s.__input,"blur",function(){o()}),P.bind(s.__input,"mousedown",function(e){P.bind(window,"mousemove",r),P.bind(window,"mouseup",a),u=e.clientY}),P.bind(s.__input,"keydown",function(e){13===e.keyCode&&(l.__truncationSuspended=!0,this.blur(),l.__truncationSuspended=!1,o())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return L(t,H),C(t,[{key:"updateDisplay",value:function(){var e;return this.__input.value=this.__truncationSuspended?this.getValue():Math.round(this.getValue()*(e=Math.pow(10,this.__precision)))/e,D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),X=function(e){function t(e,i,n,o,r){function a(e){e.preventDefault();var t,i,n,o,r=d.__background.getBoundingClientRect();return d.setValue((t=e.clientX,i=r.left,n=r.right,(o=d.__min)+(t-i)/(n-i)*(d.__max-o))),!1}function s(){P.unbind(window,"mousemove",a),P.unbind(window,"mouseup",s),d.__onFinishChange&&d.__onFinishChange.call(d,d.getValue())}function l(e){var t,i,n,o=e.touches[0].clientX,r=d.__background.getBoundingClientRect();d.setValue((t=r.left,i=r.right,(n=d.__min)+(o-t)/(i-t)*(d.__max-n)))}function u(){P.unbind(window,"touchmove",l),P.unbind(window,"touchend",u),d.__onFinishChange&&d.__onFinishChange.call(d,d.getValue())}R(this,t);var c=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,{min:n,max:o,step:r})),d=c;return c.__background=document.createElement("div"),c.__foreground=document.createElement("div"),P.bind(c.__background,"mousedown",function(e){document.activeElement.blur(),P.bind(window,"mousemove",a),P.bind(window,"mouseup",s),a(e)}),P.bind(c.__background,"touchstart",function(e){1===e.touches.length&&(P.bind(window,"touchmove",l),P.bind(window,"touchend",u),l(e))}),P.addClass(c.__background,"slider"),P.addClass(c.__foreground,"slider-fg"),c.updateDisplay(),c.__background.appendChild(c.__foreground),c.domElement.appendChild(c.__background),c}return L(t,H),C(t,[{key:"updateDisplay",value:function(){var e=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*e+"%",D(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(),V=function(e){function t(e,i,n){R(this,t);var o=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return o.__button=document.createElement("div"),o.__button.innerHTML=void 0===n?"Fire":n,P.bind(o.__button,"click",function(e){return e.preventDefault(),o.fire(),!1}),P.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return L(t,U),C(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(),Y=function(e){function t(e,i){function n(e){c(e),P.bind(window,"mousemove",c),P.bind(window,"touchmove",c),P.bind(window,"mouseup",r),P.bind(window,"touchend",r)}function o(e){d(e),P.bind(window,"mousemove",d),P.bind(window,"touchmove",d),P.bind(window,"mouseup",s),P.bind(window,"touchend",s)}function r(){P.unbind(window,"mousemove",c),P.unbind(window,"touchmove",c),P.unbind(window,"mouseup",r),P.unbind(window,"touchend",r),u()}function s(){P.unbind(window,"mousemove",d),P.unbind(window,"touchmove",d),P.unbind(window,"mouseup",s),P.unbind(window,"touchend",s),u()}function l(){var e=T(this.value);!1!==e?(_.__color.__state=e,_.setValue(_.__color.toOriginal())):this.value=_.__color.toString()}function u(){_.__onFinishChange&&_.__onFinishChange.call(_,_.__color.toOriginal())}function c(e){-1===e.type.indexOf("touch")&&e.preventDefault();var t=_.__saturation_field.getBoundingClientRect(),i=e.touches&&e.touches[0]||e,n=i.clientX,o=i.clientY,r=(n-t.left)/(t.right-t.left),a=1-(o-t.top)/(t.bottom-t.top);return a>1?a=1:a<0&&(a=0),r>1?r=1:r<0&&(r=0),_.__color.v=a,_.__color.s=r,_.setValue(_.__color.toOriginal()),!1}function d(e){-1===e.type.indexOf("touch")&&e.preventDefault();var t=_.__hue_field.getBoundingClientRect(),i=1-((e.touches&&e.touches[0]||e).clientY-t.top)/(t.bottom-t.top);return i>1?i=1:i<0&&(i=0),_.__color.h=360*i,_.setValue(_.__color.toOriginal()),!1}R(this,t);var f,h=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));h.__color=new k(h.getValue()),h.__temp=new k(0);var _=h;h.domElement=document.createElement("div"),P.makeSelectable(h.domElement,!1),h.__selector=document.createElement("div"),h.__selector.className="selector",h.__saturation_field=document.createElement("div"),h.__saturation_field.className="saturation-field",h.__field_knob=document.createElement("div"),h.__field_knob.className="field-knob",h.__field_knob_border="2px solid ",h.__hue_knob=document.createElement("div"),h.__hue_knob.className="hue-knob",h.__hue_field=document.createElement("div"),h.__hue_field.className="hue-field",h.__input=document.createElement("input"),h.__input.type="text",h.__input_textShadow="0 1px 1px ",P.bind(h.__input,"keydown",function(e){13===e.keyCode&&l.call(this)}),P.bind(h.__input,"blur",l),P.bind(h.__selector,"mousedown",function(){P.addClass(this,"drag").bind(window,"mouseup",function(){P.removeClass(_.__selector,"drag")})}),P.bind(h.__selector,"touchstart",function(){P.addClass(this,"drag").bind(window,"touchend",function(){P.removeClass(_.__selector,"drag")})});var m=document.createElement("div");return b.extend(h.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),b.extend(h.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:h.__field_knob_border+(h.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),b.extend(h.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),b.extend(h.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),b.extend(m.style,{width:"100%",height:"100%",background:"none"}),a(m,"top","rgba(0,0,0,0)","#000"),b.extend(h.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),(f=h.__hue_field).style.background="",f.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",f.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",f.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",f.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",f.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",b.extend(h.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:h.__input_textShadow+"rgba(0,0,0,0.7)"}),P.bind(h.__saturation_field,"mousedown",n),P.bind(h.__saturation_field,"touchstart",n),P.bind(h.__field_knob,"mousedown",n),P.bind(h.__field_knob,"touchstart",n),P.bind(h.__hue_field,"mousedown",o),P.bind(h.__hue_field,"touchstart",o),h.__saturation_field.appendChild(m),h.__selector.appendChild(h.__field_knob),h.__selector.appendChild(h.__saturation_field),h.__selector.appendChild(h.__hue_field),h.__hue_field.appendChild(h.__hue_knob),h.domElement.appendChild(h.__input),h.domElement.appendChild(h.__selector),h.updateDisplay(),h}return L(t,U),C(t,[{key:"updateDisplay",value:function(){var e=T(this.getValue());if(!1!==e){var t=!1;b.each(k.COMPONENTS,function(i){if(!b.isUndefined(e[i])&&!b.isUndefined(this.__color.__state[i])&&e[i]!==this.__color.__state[i])return t=!0,{}},this),t&&b.extend(this.__color.__state,e)}b.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var i=this.__color.v<.5||this.__color.s>.5?255:0,n=255-i;b.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+i+","+i+","+i+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,a(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),b.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+i+","+i+","+i+")",textShadow:this.__input_textShadow+"rgba("+n+","+n+","+n+",.7)"})}}]),t}(),j=["-moz-","-o-","-webkit-","-ms-",""],W=function(e,t){var i=e[t];return b.isArray(arguments[2])||b.isObject(arguments[2])?new M(e,t,arguments[2]):b.isNumber(i)?b.isNumber(arguments[2])&&b.isNumber(arguments[3])?b.isNumber(arguments[4])?new X(e,t,arguments[2],arguments[3],arguments[4]):new X(e,t,arguments[2],arguments[3]):b.isNumber(arguments[4])?new G(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new G(e,t,{min:arguments[2],max:arguments[3]}):b.isString(i)?new z(e,t):b.isFunction(i)?new V(e,t,""):b.isBoolean(i)?new I(e,t):null},K=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},J=function(){function e(){R(this,e),this.backgroundElement=document.createElement("div"),b.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),P.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),b.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;P.bind(this.backgroundElement,"click",function(){t.hide()})}return C(e,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),b.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,t=function t(){e.domElement.style.display="none",e.backgroundElement.style.display="none",P.unbind(e.domElement,"webkitTransitionEnd",t),P.unbind(e.domElement,"transitionend",t),P.unbind(e.domElement,"oTransitionEnd",t)};P.bind(this.domElement,"webkitTransitionEnd",t),P.bind(this.domElement,"transitionend",t),P.bind(this.domElement,"oTransitionEnd",t),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-P.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-P.getHeight(this.domElement)/2+"px"}}]),e}();({load:function(e,t){var i=t||document,n=i.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,i.getElementsByTagName("head")[0].appendChild(n)},inject:function(e,t){var i=t||document,n=document.createElement("style");n.type="text/css",n.innerHTML=e;var o=i.getElementsByTagName("head")[0];try{o.appendChild(n)}catch{}}}).inject(function(e){if(e&&"u">typeof window){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t),e}}(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`));var Q="Default",q=function(){try{return!!window.localStorage}catch{return!1}}(),Z=void 0,$=!0,ee=void 0,et=!1,ei=[],en=function e(t){var i,n=this,o=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),P.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],o=b.defaults(o,{closeOnTop:!1,autoPlace:!0,width:e.DEFAULT_WIDTH}),o=b.defaults(o,{resizable:o.autoPlace,hideable:o.autoPlace}),b.isUndefined(o.load)?o.load={preset:Q}:o.preset&&(o.load.preset=o.preset),b.isUndefined(o.parent)&&o.hideable&&ei.push(this),o.resizable=b.isUndefined(o.parent)&&o.resizable,o.autoPlace&&b.isUndefined(o.scrollable)&&(o.scrollable=!0);var r=q&&"true"===localStorage.getItem(f(this,"isLocal")),a=void 0,l=void 0;if(Object.defineProperties(this,{parent:{get:function(){return o.parent}},scrollable:{get:function(){return o.scrollable}},autoPlace:{get:function(){return o.autoPlace}},closeOnTop:{get:function(){return o.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:o.load.preset},set:function(e){n.parent?n.getRoot().preset=e:o.load.preset=e,function(e){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].value===e.preset&&(e.__preset_select.selectedIndex=t)}(this),n.revert()}},width:{get:function(){return o.width},set:function(e){o.width=e,m(n,e)}},name:{get:function(){return o.name},set:function(e){o.name=e,l&&(l.innerHTML=o.name)}},closed:{get:function(){return o.closed},set:function(t){o.closed=t,o.closed?P.addClass(n.__ul,e.CLASS_CLOSED):P.removeClass(n.__ul,e.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=t?e.TEXT_OPEN:e.TEXT_CLOSED)}},load:{get:function(){return o.load}},useLocalStorage:{get:function(){return r},set:function(e){q&&(r=e,e?P.bind(window,"unload",a):P.unbind(window,"unload",a),localStorage.setItem(f(n,"isLocal"),e))}}}),b.isUndefined(o.parent)){if(o.closed=!1,P.addClass(this.domElement,e.CLASS_MAIN),P.makeSelectable(this.domElement,!1),q&&r){n.useLocalStorage=!0;var u=localStorage.getItem(f(this,"gui"));u&&(o.load=JSON.parse(u))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=e.TEXT_CLOSED,P.addClass(this.__closeButton,e.CLASS_CLOSE_BUTTON),o.closeOnTop?(P.addClass(this.__closeButton,e.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(P.addClass(this.__closeButton,e.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),P.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{void 0===o.closed&&(o.closed=!0);var c=document.createTextNode(o.name);P.addClass(c,"controller-name"),l=s(n,c),P.addClass(this.__ul,e.CLASS_CLOSED),P.addClass(l,"title"),P.bind(l,"click",function(e){return e.preventDefault(),n.closed=!n.closed,!1}),o.closed||(this.closed=!1)}o.autoPlace&&(b.isUndefined(o.parent)&&($&&(ee=document.createElement("div"),P.addClass(ee,"dg"),P.addClass(ee,e.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ee),$=!1),ee.appendChild(this.domElement),P.addClass(this.domElement,e.CLASS_AUTO_PLACE)),this.parent||m(n,o.width)),this.__resizeHandler=function(){n.onResizeDebounced()},P.bind(window,"resize",this.__resizeHandler),P.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),P.bind(this.__ul,"transitionend",this.__resizeHandler),P.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),o.resizable&&function(e){function t(t){return t.preventDefault(),e.width+=o-t.clientX,e.onResize(),o=t.clientX,!1}function i(){P.removeClass(e.__closeButton,en.CLASS_DRAG),P.unbind(window,"mousemove",t),P.unbind(window,"mouseup",i)}function n(n){return n.preventDefault(),o=n.clientX,P.addClass(e.__closeButton,en.CLASS_DRAG),P.bind(window,"mousemove",t),P.bind(window,"mouseup",i),!1}var o=void 0;e.__resize_handle=document.createElement("div"),b.extend(e.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),P.bind(e.__resize_handle,"mousedown",n),P.bind(e.__closeButton,"mousedown",n),e.domElement.insertBefore(e.__resize_handle,e.domElement.firstElementChild)}(this),a=function(){q&&"true"===localStorage.getItem(f(n,"isLocal"))&&localStorage.setItem(f(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=a,o.parent||(i=n.getRoot(),i.width+=1,b.defer(function(){i.width-=1}))};en.toggleHide=function(){et=!et,b.each(ei,function(e){e.domElement.style.display=et?"none":""})},en.CLASS_AUTO_PLACE="a",en.CLASS_AUTO_PLACE_CONTAINER="ac",en.CLASS_MAIN="main",en.CLASS_CONTROLLER_ROW="cr",en.CLASS_TOO_TALL="taller-than-window",en.CLASS_CLOSED="closed",en.CLASS_CLOSE_BUTTON="close-button",en.CLASS_CLOSE_TOP="close-top",en.CLASS_CLOSE_BOTTOM="close-bottom",en.CLASS_DRAG="drag",en.DEFAULT_WIDTH=245,en.TEXT_CLOSED="Close Controls",en.TEXT_OPEN="Open Controls",en._keydownHandler=function(e){"text"===document.activeElement.type||72!==e.which&&72!==e.keyCode||en.toggleHide()},P.bind(window,"keydown",en._keydownHandler,!1),b.extend(en.prototype,{add:function(e,t){return d(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return d(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;b.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ee.removeChild(this.domElement);var e=this;b.each(this.__folders,function(t){e.removeFolder(t)}),P.unbind(window,"keydown",en._keydownHandler,!1),l(this)},addFolder:function(e){if(void 0!==this.__folders[e])throw Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new en(t);this.__folders[e]=i;var n=s(this,i.domElement);return P.addClass(n,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],l(e);var t=this;b.each(e.__folders,function(t){e.removeFolder(t)}),b.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=P.getOffset(e.__ul).top,i=0;b.each(e.__ul.childNodes,function(t){e.autoPlace&&t===e.__save_row||(i+=P.getHeight(t))}),window.innerHeight-t-20<i?(P.addClass(e.domElement,en.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-20+"px"):(P.removeClass(e.domElement,en.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&b.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:b.debounce(function(){this.onResize()},50),remember:function(){if(b.isUndefined(Z)&&((Z=new J).domElement.innerHTML=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`),this.parent)throw Error("You can only call remember on a top level GUI.");var e=this;b.each(Array.prototype.slice.call(arguments),function(t){0===e.__rememberedObjects.length&&function(e){var t=e.__save_row=document.createElement("li");P.addClass(e.domElement,"has-save"),e.__ul.insertBefore(t,e.__ul.firstChild),P.addClass(t,"save-row");var i=document.createElement("span");i.innerHTML="&nbsp;",P.addClass(i,"button gears");var n=document.createElement("span");n.innerHTML="Save",P.addClass(n,"button"),P.addClass(n,"save");var o=document.createElement("span");o.innerHTML="New",P.addClass(o,"button"),P.addClass(o,"save-as");var r=document.createElement("span");r.innerHTML="Revert",P.addClass(r,"button"),P.addClass(r,"revert");var a=e.__preset_select=document.createElement("select");if(e.load&&e.load.remembered?b.each(e.load.remembered,function(t,i){h(e,i,i===e.preset)}):h(e,Q,!1),P.bind(a,"change",function(){for(var t=0;t<e.__preset_select.length;t++)e.__preset_select[t].innerHTML=e.__preset_select[t].value;e.preset=this.value}),t.appendChild(a),t.appendChild(i),t.appendChild(n),t.appendChild(o),t.appendChild(r),q){var s=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block","true"===localStorage.getItem(f(e,"isLocal"))&&l.setAttribute("checked","checked"),_(e,s),P.bind(l,"change",function(){e.useLocalStorage=!e.useLocalStorage,_(e,s)})}var u=document.getElementById("dg-new-constructor");P.bind(u,"keydown",function(e){e.metaKey&&(67===e.which||67===e.keyCode)&&Z.hide()}),P.bind(i,"click",function(){u.innerHTML=JSON.stringify(e.getSaveObject(),void 0,2),Z.show(),u.focus(),u.select()}),P.bind(n,"click",function(){e.save()}),P.bind(o,"click",function(){var t=prompt("Enter a new preset name.");t&&e.saveAs(t)}),P.bind(r,"click",function(){e.revert()})}(e),-1===e.__rememberedObjects.indexOf(t)&&e.__rememberedObjects.push(t)}),this.autoPlace&&m(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=p(this)),e.folders={},b.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=p(this),u(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Q]=p(this,!0)),this.load.remembered[e]=p(this),this.preset=e,h(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){b.each(this.__controllers,function(t){this.getRoot().load.remembered?c(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),b.each(this.__folders,function(e){e.revert(e)}),e||u(this.getRoot(),!1)},listen:function(e){var t=0===this.__listening.length;this.__listening.push(e),t&&function e(t){0!==t.length&&K.call(window,function(){e(t)}),b.each(t,function(e){e.updateDisplay()})}(this.__listening)},updateDisplay:function(){b.each(this.__controllers,function(e){e.updateDisplay()}),b.each(this.__folders,function(e){e.updateDisplay()})}});var eo={Color:k,math:S,interpret:T},er={Controller:U,BooleanController:I,OptionController:M,StringController:z,NumberController:H,NumberControllerBox:G,NumberControllerSlider:X,FunctionController:V,ColorController:Y},ea={dom:P},es={GUI:en};e.color=eo,e.controllers=er,e.dom=ea,e.gui=es,e.GUI=en,e.default={color:eo,controllers:er,dom:ea,gui:es,GUI:en},Object.defineProperty(e,"__esModule",{value:!0})})}}]);