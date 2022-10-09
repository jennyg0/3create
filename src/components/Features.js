import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <div className="Feature">
      <Stack direction={"row"} align={"right"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    </div>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <Heading style={{ marginBottom: "4rem" }}>
        We are a platform that makes learning web3 easy for kids.
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} style={{ marginLeft: "2rem", textAlign: "left" }}>
          <Text color={"gray.500"} fontSize={"lg"}>
            This is a space that is safe, fun and vibrant for our future
            generations to grow, create and move with ease in Web3.
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            Learners collaborate with peers to create solutions to global
            challenges with emerging technologies, like cryptocurrencies, NFTs
            and blockchain through fun and engaging learnings tracks for ages
            8-14.
          </Text>
        </Stack>
        <Flex>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
            style={{ marginLeft: "5rem" }}
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Collaboration"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Learning Challenges"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Creation"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Problem Solving"}
            />
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
