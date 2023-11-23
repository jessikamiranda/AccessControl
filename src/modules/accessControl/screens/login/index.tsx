"use client";

import {
  OutlinedInputProps,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import { Button, Container, LoginBox } from "./styles";
import Box from "@public/components/Box";
import Typography from "@public/components/Typography";

const Login = () => {
  const StyledTextField = styled((props: TextFieldProps) => (
    <TextField
      InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      width: "390px",
      overflow: "hidden",
      color: "rgba(28, 28, 28, 0.40)",
      borderRadius: 12,
      backgroundColor:
        theme.palette.mode === "light" ? "rgba(28, 28, 28, 0.05)" : "#1A2027",
      border: "1px solid",
      borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "rgba(28, 28, 28, 0.02)",
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(28, 28, 28, 0.05)",
        borderColor: "rgba(28, 28, 28, 0.15)",
      },
    },
    "& label": {
      color: "#1c1c1c",
    },
    "& label.Mui-focused": {
      color: "#1c1c1c",
    },
  }));

  return (
    <Container>
      <LoginBox>
        <Box
          display="flex"
          flexDirection="column"
          gap="8px"
          alignItems="center"
        >
          <Typography color="#1c1c1c" size="24px" weight="600">
            Login
          </Typography>
          <Typography color="rgba(28, 28, 28, 0.40)" size="14px">
            Controle de Acesso
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="16px">
          <StyledTextField
            label="Usuário"
            id="user"
            variant="filled"
            style={{ marginTop: 11 }}
          />

          <StyledTextField
            label="Senha"
            id="password"
            variant="filled"
            type="password"
            style={{ marginTop: 11 }}
          />
        </Box>

        <Button type="submit" value="Entrar" />
      </LoginBox>
    </Container>
  );
};

export default Login;
