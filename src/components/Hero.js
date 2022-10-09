import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import mascot from "../images/shuggyandbrowser.svg";

export default function SplitScreen() {
  return (
    <div>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                Let's Create
              </Text>
              <br />
              <Text color={"blue.400"} as={"span"}>
                Together
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              An educational platform to onboard the next generation of
              innovators. We make creative technologies accessible for kids
              through collaboration, learning challenges, problem solving, and
              creativity.
            </Text>
            {/* <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Start
              </Button>
              <Button rounded={"full"}>How It Works</Button>
            </Stack> */}
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Landing Image"} src={mascot} />
        </Flex>
      </Stack>
    </div>
  );
}
