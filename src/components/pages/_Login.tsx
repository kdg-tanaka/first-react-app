import { memo, FC, useState, ChangeEvent, useCallback } from "react";
import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState('');
  const onChangeUserId = (e:ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)

  const navigate = useNavigate();

  const onClickCheckAuth = () => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        if (res.data) {
          navigate("/home");
        } else {
          alert("ユーザーがみつかりません");
        }
      }).catch().finally()
  }

  return(
    <>
      <Flex align="center" justify="center" h="100vh">
        <Box w="sm" bg="white" p={4} borderRadius={4} shadow="md">
          <Heading as="h1" size="lg" textAlign="center" pt={3}>ユーザー管理アプリ</Heading>
          <Divider my={4} />
          <Stack spacing={4} px={10} py={4}>
            <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
            <Button color="white" bg="teal.400" _hover={{ opacity: 0.8 }} onClick={onClickCheckAuth}>ログイン</Button>
          </Stack>
        </Box>
      </Flex>
    </>
  )
});
