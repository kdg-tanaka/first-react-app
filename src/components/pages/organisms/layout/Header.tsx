import { Flex, Link as ChakraLink, Heading, useDisclosure } from "@chakra-ui/react";
import { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { MenuDrawer } from "../../../molecules/MenuDrawer";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";

export const Header = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <Flex
      as="nav"
      bgColor="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{base: 3, md: 5 }}
    >
      <Flex as="a" align="center" mr={8} _hover={{ cursor: "pointer"}}>
        <Heading as="h1" fontSize ={{base: "md", md: "lg"}}><RouterLink to="/home">ユーザー管理アプリ</RouterLink></Heading>
      </Flex>
      <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{base: "none", md: "flex"}}
      >
        <ChakraLink pr={4}><RouterLink to="/home/user_management">ユーザー一覧</RouterLink></ChakraLink>
        <ChakraLink pr={4}><RouterLink to="/home/setting">設定</RouterLink></ChakraLink>
        <ChakraLink><RouterLink to="/home/sample">サンプルコード</RouterLink></ChakraLink>
      </Flex>
      <MenuIconButton onOpen={onOpen} />
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  )
});
