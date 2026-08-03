import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CartContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: 640,
  margin: "0 auto",
  padding: theme.spacing(3),
}));

export const CartItemRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
}));

export const CartTotal = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontWeight: 700,
  fontSize: "1.1rem",
  marginTop: theme.spacing(2),
}));
