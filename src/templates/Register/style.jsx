import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RegisterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: 480,
  margin: "0 auto",
  padding: theme.spacing(3),
}));

export const OrdersList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
}));

export const OrderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
