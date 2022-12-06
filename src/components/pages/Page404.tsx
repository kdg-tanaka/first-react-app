import { FC } from "react";
import { Link } from "react-router-dom";

export const Page404: FC = () => {
  return(
    <>
      <p>ページが見つかりません</p>
      <Link to="/">TOPに戻る</Link>
    </>
  );
}
