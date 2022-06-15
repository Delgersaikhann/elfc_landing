import { VStack, Spacer, Stack, Box } from "@chakra-ui/react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { TextBox } from "../components/TextBox";
import { Model } from "../components/Model-with-animations";

export default function Home() {
  return (
    <VStack minH="100vh" bg="gray.700" justifyContent="space-between">
      <Header />
      <Box h="100px" />
      <TextBox />
      {/* <Model /> */}
      <Stack id="home" h="100vh" bg="red">
        home
      </Stack>
      <Stack id="About Us" h="100vh" bg="red">
        About Us
      </Stack>
      {/* <Spacer /> */}
      <Footer />
    </VStack>
  );
}
