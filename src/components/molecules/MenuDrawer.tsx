import { memo, FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
}

export const MenuDrawer: FC<Props> = memo((props) => {

  const{ onClose, isOpen } = props;

  const routerLinkStyle = {
    display: "inline-flex",
    width: "100%",
    height: "2.5rem",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={()=>onClose()}><RouterLink to="/home" style={routerLinkStyle}>TOP</RouterLink></Button>
            <Button w="100%" onClick={()=>onClose()}><RouterLink to="/home/user_management" style={routerLinkStyle}>ユーザー一覧</RouterLink></Button>
            <Button w="100%" onClick={()=>onClose()}><RouterLink to="/home/setting" style={routerLinkStyle}>設定</RouterLink></Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
});

