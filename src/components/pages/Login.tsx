import { memo, FC, useState, ChangeEvent } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "./atoms/button/PrimaryButton";
import { UseAuth } from "../../hooks/UseAuth";

export const Login: FC = memo(() => {
  const { login, loading } = UseAuth();

  const [userId, setUserId] = useState('');
  const onChangeUserId = (e:ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)

  const onClickLogin = () => {
    login(userId);
  }

  return(
    <>
      <Flex align="center" justify="center" h="100vh">
        <Box w="sm" bg="white" p={4} borderRadius={4} shadow="md">
          <Heading as="h1" size="lg" textAlign="center" pt={3}>ユーザー管理アプリ</Heading>
          <Divider my={4} />
          <Stack spacing={4} px={10} py={4}>
            <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
            <PrimaryButton
              disabled={userId === ""}
              loading={loading}
              onClick={onClickLogin}
            >
              ログイン
            </PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  )
});
