import { Button } from "@chakra-ui/react"
import { FC, memo } from "react"

type Props = {
  children: any;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const {children, loading = false, disabled = false, onClick} = props;

  return(
    <>
      <Button
        color="white"
        bg="teal.400"
        _hover={{ opacity: 0.8 }}
        disabled={disabled || loading}
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  )
});
