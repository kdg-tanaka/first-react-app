import { Box, Image, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC } from "react";

export const UserManagement: FC = memo(() => {

  return(
    <Wrap>
      <WrapItem>
        <Box
          w="260px"
          h="260px"
          borderRadius="10px"
          shadow="md"
          _hover={{ cursor: "pointer", opacity: "0.8"}}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
            />
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  )
});
