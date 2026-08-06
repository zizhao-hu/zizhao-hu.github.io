"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2865],{72865:function(e,t,r){r.r(t),r.d(t,{volumetricLightingRenderVolumeVertexShaderWGSL:function(){return s}});var o=r(84648);r(3296),r(41475);let n="volumetricLightingRenderVolumeVertexShader",i=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute position : vec3f;varying vWorldPos: vec4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {let worldPos=mesh.world*vec4f(vertexInputs.position,1.0);vertexOutputs.vWorldPos=worldPos;vertexOutputs.position=scene.viewProjection*worldPos;}
`;o.v.ShadersStoreWGSL[n]||(o.v.ShadersStoreWGSL[n]=i);let s={name:n,shader:i}}}]);