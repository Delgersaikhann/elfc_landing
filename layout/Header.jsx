import { Button, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const HeaderData = [
    { page: "Home", display: 0 },
    { page: "About Us", display: 500 },
    { page: "Tokenomics", display: 1000 },
    { page: "Whitepaper", display: 1550 },
  ];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const HandleClick = (display) => {
    console.log(display);
    window.scrollTo({
      top: display,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Stack zIndex="1000" pos="fixed" w="100%">
      <HStack p={2} w="70%" mx="auto" justifyContent="space-between">
        <HStack>
          <Image
            h="30px"
            src="https://cdn.discordapp.com/attachments/936466303307374623/974585153903030292/elfc_logo_png-01.png"
          />
          <Text fontSize={"2xl"}>ELF</Text>
        </HStack>

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
                color="#ffffff80"
                _hover={{ color: "white" }}
              >
                {el.page}
              </Text>
              //   </Link>
            );
          })}
        </HStack>
        <Flex w="30%" justifyContent="flex-end">
          <Button>Buy ELFc</Button>
        </Flex>
      </HStack>
    </Stack>
  );
};
