import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";


export const Boxx =(props) =>{
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);
  
    useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    );
}