import { Button, Typography } from "@mui/material";
import { useApi } from "../../hooks/useApi";
import { GET_CART_API } from "../../constants/constants";
import { CartContainer, CartItemRow, CartTotal } from "./styles";

const MOCK_CART_ITEMS = [
  { id: 1, nome: "Telescópio Refrator 70mm", preco: 899.9, quantidade: 1 },
  { id: 2, nome: "Binóculo 10x50", preco: 249.9, quantidade: 2 },
  { id: 3, nome: "Filtro Solar Lunar", preco: 89.9, quantidade: 1 },
];

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

interface CartProps {
  data: any;
  setData: any;
}

function Cart({ data, setData }: CartProps) {
  const { data: items = MOCK_CART_ITEMS } = useApi(
    ["cart-items"],
    GET_CART_API,
    MOCK_CART_ITEMS,
    undefined,
    { initialData: MOCK_CART_ITEMS }
  );

  const total = items.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <CartContainer>
      <Typography variant="h5" component="h1">
        Meu Carrinho
      </Typography>

      {items.map((item) => (
        <CartItemRow key={item.id}>
          <Typography>{item.nome}</Typography>
          <Typography>Qtd: {item.quantidade}</Typography>
          <Typography>{formatPrice(item.preco)}</Typography>
        </CartItemRow>
      ))}

      <CartTotal>
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </CartTotal>

      <Button variant="contained" color="primary">
        Finalizar compra
      </Button>
    </CartContainer>
  );
}

export default Cart;
