import { useEffect } from "react";
import * as THREE from "three";

const WaterBlob = () => {
  useEffect(() => {
    // Create the Three.js scene
    const canvas = document.getElementById('threeCanvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
    // Configure the renderer with transparent background
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true, // Makes the background transparent
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Ensures the background is fully transparent
  
    // Create the water blob geometry (a sphere)
    const geometry = new THREE.SphereGeometry(1, 32, 32);
  
    // Create a custom shader material for a smooth, fluid blob effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        backgroundColor: { value: new THREE.Color(0x000000) }, // Default background color (dark)
      },
      vertexShader: `

      
        varying vec3 vNormal;
varying vec2 vUv;
varying float vDisplacement;

uniform float time;
uniform float u_intensity;
uniform float u_time;

// Classic Perlin 3D Noise
vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float cnoise(vec3 P) {
    vec3 Pi0 = floor(P);
    vec3 Pi1 = Pi0 + vec3(1.0);
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

void main() {
    vUv = uv;
    vNormal = normal;

    // Displacement based on Perlin noise
    vDisplacement = cnoise(position * 2.0 + vec3(u_time * 0.9));

    // Calculate spherical displacement (based on radial distance)
    float dist = length(position);
    float waveEffect = sin(u_time + dist * 5.0) * 0.15;

    // Apply displacement with a more dynamic spherical effect
    vec3 displacedPosition = position;
    displacedPosition.x += waveEffect * cos(position.y * 2.0);
    displacedPosition.y += waveEffect * sin(position.x * 2.0);
    displacedPosition.z += waveEffect * cos(position.z * 2.0);

    // Apply Perlin noise-based displacement to create dynamic waves
    vec3 newPosition = displacedPosition + normal * (u_intensity * vDisplacement);

    // Transform the new position
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    // Final position
    gl_Position = projectedPosition;
}


      `,
      fragmentShader: `
  uniform float u_time;
uniform float u_intensity;
varying vec2 vUv;
varying float vDisplacement;

void main() {
    // Fresnel effect to simulate glass-like edges
    float fresnel = pow(1.0 - dot(normalize(vec3(0.0, 0.0, 1.0)), normalize(vec3(gl_FragCoord.xy, 1.0))), 32.0);

    // More dynamic distortion based on displacement
    float distort = 0.5 * vDisplacement * u_intensity * sin(vUv.y * 50.0 + u_time);

    // Color for a more dynamic liquid (lighter color with shimmer)
    vec3 color = vec3(0.2, 0.5, 1.0) - distort;

    // Transparency based on fresnel
    float alpha = 0.1 + 0.2 * fresnel;

    // Specular highlights for a stronger reflective surface
    vec3 viewDir = normalize(vec3(gl_FragCoord.xy, 9.0));
    vec3 normal = normalize(vec3(1.0, 1.0, 1.0)); // Liquid surface normal
    float specular = pow(max(dot(viewDir, normal), 0.0), 32.0);

    // Final color with specular highlights
    gl_FragColor = vec4(color + specular, alpha);
}



      `,
      transparent: true, // This makes the material transparent
      depthWrite: false, // Prevents depth writing for transparency
    });
    
    const blob = new THREE.Mesh(geometry, material);
    scene.add(blob);
  
    // Set the camera position
    camera.position.z = 3;
  
    // Animate the blob and update the shader over time
    function animate() {
      requestAnimationFrame(animate);
  
      // Update time uniform for ripple effect
      material.uniforms.time.value += 0.05;
  
      // Rotate the blob to give it a more fluid, organic motion
      blob.rotation.x += 0.02;
      blob.rotation.y += 0.01;
  
      // Dynamically change background color based on time to simulate light/dark background transitions
      let backgroundColor = new THREE.Color(0x000000);
      if (Math.sin(material.uniforms.time.value) > 0) {
        backgroundColor = new THREE.Color(0xFFFFFF); // Light background
      }
      material.uniforms.backgroundColor.value = backgroundColor;
  
      renderer.render(scene, camera);
    }
  
    animate();
  
    // Resize handler
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
  
    window.addEventListener('resize', handleResize);
  
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array, so it only runs once
  
  return <canvas id="threeCanvas" className="absolute top-0 left-0 w-full h-full pointer-events-none" />;

};

export default WaterBlob;
