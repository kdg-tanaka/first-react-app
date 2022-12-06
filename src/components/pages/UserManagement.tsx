import { Box, Image, Stack, Wrap, WrapItem, Text, Center, Spinner } from "@chakra-ui/react";
import { memo, FC, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "./organisms/user/UserCard";

export const UserManagement: FC = memo(() => {

  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(),[]);

  return(
    <Wrap p={{ base: 4, md: 10 }} justify='center'>
      {loading ? (
        <Center><Spinner /></Center>
      ) : (
        <>
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
              />
            </WrapItem>
          ))}
        </>
      )}
    </Wrap>
  )
});
