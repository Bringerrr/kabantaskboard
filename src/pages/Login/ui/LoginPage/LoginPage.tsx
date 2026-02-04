"use client";

import { LoginForm } from "src/widgets/LoginForm";
import { Page } from "src/widgets/Page";

interface LoginProps {
  className?: string;
}

export const LoginPage = ({}: LoginProps) => {
  return (
    <Page>
      <LoginForm />
    </Page>
  );
};
