import React, { useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Button,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { useDisconnect } from "@web3modal/react";
import logo from "../images/shuggy.svg";
import { Network, Alchemy } from "alchemy-sdk";
import welcome from "../images/welcome.png";
import question from "../images/question.png";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Popular Courses", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      style={{ backgroundColor: "#aef398" }}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
        {isWelcomePage ? (
          <div>
            <img src={welcome} className="welcome" alt="logo" />
            <Button
              style={{ backgroundColor: "#BBB2FF" }}
              onClick={() => setIsWelcomePage(false)}
            >
              Let's Learn!
            </Button>
          </div>
        ) : (
          <div>
            <img src={question} className="welcome" alt="logo" />
            <Link href="/mint">
              <Button style={{ backgroundColor: "#BBB2FF" }}>Submit</Button>
            </Link>
            <Button
              style={{
                backgroundColor: "#BBB2FF",
                marginLeft: "2rem",
              }}
            >
              Ask a mentor
            </Button>
          </div>
        )}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      style={{ backgroundColor: "#fefbd4" }}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8">
        <img
          src={logo}
          className="App-logo-header"
          alt="logo"
          style={{ borderRadius: "50%" }}
        />
        <div style={{ marginLeft: "1rem" }}>3create</div>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#aef398",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const disconnect = useDisconnect();
  const [isChild, setIsChild] = useState(false);

  useEffect(() => {
    const settings = {
      apiKey: process.env.ALCHEMY_API_KEY,
      network: Network.MATIC_MUMBAI,
    };
    const alchemy = new Alchemy(settings);

    const userAddress = "0x31e2D52aE5A0760E2f9cab4D388Ba1F457814275";
    const createTokenContract = "0x45c53da2Af0a7e7d818a494576a9E2C57E811f36";

    alchemy.core
      .getTokenBalances(userAddress, [createTokenContract])
      .then((res) => {
        //check if they have a token in their wallet
        setIsChild(parseInt(res.tokenBalances[0].tokenBalance) > 0);
      });
  }, []);

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      style={{ backgroundColor: "#fefbd4" }}
      {...rest}
    >
      <div style={{ marginRight: "3rem" }}>
        {isChild
          ? "You are verified with Proof of Childhood"
          : " Please verify Proof of Childhood with PolygonID"}
      </div>
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Vitalik</Text>
                  <Text fontSize="xs" color="gray.600">
                    Student
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>
                <button
                  onClick={disconnect}
                  type="button"
                  className="disconnect"
                >
                  Disconnect Wallet
                </button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
