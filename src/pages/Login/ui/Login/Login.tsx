import { classNames } from "src/shared/lib/classnames/classNames";
import cls from "./Login.module.scss";

interface LoginProps {
  className?: string;
}

export const Login = (props: LoginProps) => {
  const { className } = props;

  return <div className={classNames(cls.Login, {}, [className])}></div>;
};
