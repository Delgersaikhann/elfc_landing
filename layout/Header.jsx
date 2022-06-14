import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const Header = () => {
  const HeaderData = [
    { page: "home", display: 0 },
    { page: "About Us", display: 500 },

    { page: "tokenomics", display: 1000 },

    { page: "Whitepaper", display: 1550 },
  ];

  const HandleClick = (event) => {
    console.log(event);
    window.scrollTo({
      top: event,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Stack zIndex="1000" pos="fixed" bg="gray.800" w="100%">
      <HStack p={3} w="70%" mx="auto" justifyContent="space-between">
        <Text fontSize={"3xl"}>ELF chain</Text>
        <HStack>
          {HeaderData.map((el, ind) => {
            return (
              //   <Link href={`/${el}`}>
              <Text
                cursor="pointer"
                onClick={() => HandleClick(el.display)}
                fontSize={"md"}
                px={5}
                py={3}
                key={ind}
              >
                {el.page}
              </Text>
              //   </Link>
            );
          })}
        </HStack>
        <Button>Buy ELFc</Button>
      </HStack>
    </Stack>
  );
};
