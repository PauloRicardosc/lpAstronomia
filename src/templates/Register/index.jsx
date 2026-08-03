import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useApi } from "../../hooks/useApi";
import { CREATE_NEW_USER_API, GET_ORDERS_API } from "../../constants/constants";
import { api } from "../../services/api";
import { RegisterContainer, OrdersList, OrderRow } from "./style";

const MOCK_ORDERS = [
  { id: 1, produto: "Telescópio Refrator 70mm", status: "Enviado" },
  { id: 2, produto: "Binóculo 10x50", status: "Em separação" },
];

function Register() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
  });

  const { data: pedidos = MOCK_ORDERS } = useApi(
    ["orders"],
    GET_ORDERS_API,
    MOCK_ORDERS,
    undefined,
    { initialData: MOCK_ORDERS }
  );

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post(CREATE_NEW_USER_API, form);
    } catch (error) {
      console.error("Falha ao enviar dados do cliente", error);
    }
  };

  return (
    <RegisterContainer component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" component="h1">
        Dados do Cliente
      </Typography>

      <TextField
        label="Nome"
        value={form.nome}
        onChange={handleChange("nome")}
        required
      />
      <TextField
        label="E-mail"
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        required
      />
      <TextField
        label="Telefone"
        value={form.telefone}
        onChange={handleChange("telefone")}
        required
      />
      <TextField
        label="Endereço"
        value={form.endereco}
        onChange={handleChange("endereco")}
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>

      <Typography variant="h6" component="h2">
        Meus Pedidos
      </Typography>
      <OrdersList>
        {pedidos.map((pedido) => (
          <OrderRow key={pedido.id}>
            <span>{pedido.produto}</span>
            <span>{pedido.status}</span>
          </OrderRow>
        ))}
      </OrdersList>
    </RegisterContainer>
  );
}

export default Register;
