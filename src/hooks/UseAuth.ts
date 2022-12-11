/* eslint-disable */
import axios from "axios"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../components/types/api/user"
import { useLoginUser } from "./useLoginUser"
import { useMessage } from "./useMessage"

export const UseAuth = () => {
  const navigate = useNavigate();
  const[loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if(res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
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

  return { login, loading, setLoginUser };
}
