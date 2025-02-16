"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import * as THREE from "three";

const modelUrl = "/models/66cce947c3b85821cf8acfe2.glb";

export default function Avatar(props) {
  const group = useRef();
  const { scene } = useGLTF(modelUrl);
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: typingAnimation } = useFBX("animations/HipHop.fbx");
  typingAnimation[0].name = "HipHop";
  const { actions } = useAnimations(typingAnimation, group);

  // State to hold the mouse position
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2());

  useEffect(() => {
    // Verifica se o objeto window está disponível
    if (typeof window !== "undefined") {
      const handleMouseMove = (event) => {
        // Atualiza a posição do mouse com coordenadas globais
        setMousePosition(new THREE.Vector2(event.clientX, event.clientY));
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Limpeza do listener de evento ao desmontar
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    const head = group.current.getObjectByName("Head");
    if (!head) return;

    // Obtém a posição da cabeça no mundo
    const headWorldPosition = new THREE.Vector3();
    head.getWorldPosition(headWorldPosition);

    // Converte a posição do mouse para coordenadas normalizadas do dispositivo (-1 a +1)
    const target = new THREE.Vector3(
      (mousePosition.x / window.innerWidth) * 2 - 1,
      -(mousePosition.y / window.innerHeight) * 2 + 1,
      -1
    );

    // Converte para coordenadas do mundo
    target.unproject(state.camera);

    // Ajusta a direção do olhar
    head.lookAt(target);
  });

  useEffect(() => {
    actions["HipHop"].reset().play();
  }, [actions]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
      </group>
    </group>
  );
}

useGLTF.preload(modelUrl);
