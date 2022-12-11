/* eslint-disable react-hooks/exhaustive-deps */
import { Wrap, WrapItem, Center, Spinner, useDisclosure } from "@chakra-ui/react";
import { memo, FC, useEffect, useState, useCallback } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { User } from "../types/api/user";
import { UserCard } from "./organisms/user/UserCard";
import { UserDetailModal } from "./organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const[selectedUser, setSelectedUser] = useState<User | null>(null);
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(),[]);

  const onClickUser = useCallback((id: number) => {
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  }, [users, onOpen])

  return(
    <>
      <Wrap p={{ base: 4, md: 10 }} justify='center'>
        {loading ? (
          <Center><Spinner /></Center>
        ) : (
          <>
            {users.map((user) => (
              <WrapItem key={user.id}>
                <UserCard
                  id={user.id}
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </>
        )}
      </Wrap>
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin} />
    </>
  )
});
