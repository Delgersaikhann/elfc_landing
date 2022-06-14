import { VStack, Spacer } from "@chakra-ui/react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { TextBox } from "../components/TextBox";

export default function Home() {
  return (
    <VStack minH="100vh" bg="gray.700" justifyContent="space-between">
      <Header />
      <TextBox />
      {/* <Spacer /> */}
      <Footer />
    </VStack>
  );
}
