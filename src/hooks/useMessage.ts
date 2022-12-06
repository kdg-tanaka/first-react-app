import { useToast } from "@chakra-ui/react"

export const useMessage = () => {

  type Props = {
    title: string,
    status: 'success' | 'error' | 'warning' | 'info';
  }

  const toast = useToast();

  const showMessage = (props: Props) => {
    const{ title, status} = props;

    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  }

  return { showMessage };
}
