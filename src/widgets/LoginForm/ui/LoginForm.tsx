"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Avatar,
  CircularProgress,
  Alert,
  Link,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

import { classNames } from "src/shared/lib/classnames/classNames";
import cls from "./LoginForm.module.scss";
import { zodValidate } from "src/shared/utils";
import { loginFormSchema } from "../model/const/loginForm.schema";

interface LoginFormErrors {
  email?: string;
  password?: string;
  general?: string;
}

interface LoginProps {
  className?: string;
}

async function loginAction(
  prevState: LoginFormErrors | null,
  formData: FormData,
): Promise<LoginFormErrors | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validation = await zodValidate(loginFormSchema, formData);

  if (!validation.success) return validation.errors;
  else return null;
}

export const LoginForm = ({ className }: LoginProps) => {
  const router = useRouter();

  const [state, formAction, isPendingAction] = useActionState(
    loginAction,
    null,
  );

  const isLoading = isPendingAction;

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={classNames(cls.Login, {}, [className])}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderRadius: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Sign in
          </Typography>

          {state?.general && (
            <Alert
              severity="error"
              sx={{ width: "100%", mb: 2 }}
              data-testid="error-message"
            >
              {state.general}
            </Alert>
          )}

          <Box
            component="form"
            action={formAction}
            noValidate
            sx={{ width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              disabled={isLoading}
              error={!!state?.email}
              helperText={state?.email}
              defaultValue="demo@example.com"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              disabled={isLoading}
              error={!!state?.password}
              helperText={state?.password}
              defaultValue="password123"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign In"
              )}
            </Button>
          </Box>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Link
              href="/forgot-password"
              variant="body2"
              sx={{ display: "block", mb: 1 }}
            >
              Forgot password?
            </Link>
            <Link href="/signup" variant="body2">
              Don&apos;t have an account? Sign Up
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};
