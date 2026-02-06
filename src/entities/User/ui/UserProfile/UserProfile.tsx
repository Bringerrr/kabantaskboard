import { classNames } from "src/shared/lib/classnames/classNames";
import cls from "./UserProfile.module.scss";

interface UserProfileProps {
  className?: string;
}

export const UserProfile = (props: UserProfileProps) => {
  const { className } = props;

  return <div className={classNames(cls.User, {}, [className])}></div>;
};
