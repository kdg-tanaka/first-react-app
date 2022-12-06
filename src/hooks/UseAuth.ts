/* eslint-disable */
import { useToast } from "@chakra-ui/react"
import axios from "axios"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../components/types/api/user"
import { useMessage } from "./useMessage"

export const UseAuth = () => {
  const navigate = useNavigate();
  const[loading, setLoading] = useState(false);

  const toast = useToast();

  const { showMessage } = useMessage();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if(res.data) {
          showMessage({title: "ログインしました", status: "success"});
          navigate("/home");
        } else {
          showMessage({title: "ユーザーがみつかりません", status: "error"});
        }
      })
      .catch(() => {
        showMessage({title: "ログインできません", status: "error"});
      })
      .finally(() => setLoading(false))
  }, [navigate])

  return { login, loading };
}
