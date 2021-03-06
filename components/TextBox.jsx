import { HStack, Box, Text } from "@chakra-ui/react"
import { Canvas, useFrame } from "@react-three/fiber";
import { Boxx } from "../components/Box";
import { CameraController } from "./cameraController";
export const TextBox = () =>{

    return(
        <HStack bg="gray.600" >
<Box >
<Canvas style={{height : "100%"}}>
        <CameraController />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={2} />
        <pointLight position={[-10, -10, -10]} />
        <Boxx position={[-1.2, 0, 0]} />
        <Boxx position={[1.2, 0, 0]} />
      </Canvas>
</Box>

<Text color="white">
Hi
</Text>
        </HStack>
    )
}