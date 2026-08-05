import { useApi } from "../../hooks/useApi";
import { GET_HOME_ITEMS_API } from "../../constants/constants";
import { Box, Button, Card, CardContent, CardMedia, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import equip1 from "../../../public/equip1.jpg";




interface Item {
    src: string;
    alt: string;
}

interface produtos {
    id: number;
}

export function app(){

    const [checkinbox]= useState([]);
    const addItemToCart = (item)=>{setCartItems(prevItems)=>[prevItems, items]
}

return(
    
)





const MOCK_PRODUTOS: any[] = [

    {
        id: 1,
        nome: "Telescópio profissional",
        preco: 4500,
        categoria: "registro e observção",
        img: equip1, alt: "telescopio"
    },

    {
        id: 2,
        nome: "Binóculo",
        preco: 250,
        categoria: "Observação",
        img: "public/equip2.jpg", alt: "binoculo"
    },

    {
        id: 3,
        nome: "Telescópio",
        preco: 500,
        categoria: "Observação",
        img: "public/equip3.webp", alt: "telescopio aut"
    },

    {
        id: 4,
        nome: "Monóculo iniciante",
        preco: 320,
        categoria: "Observação",
        img: "public/equip4.jpeg", alt: "monoculo"
    },

    {
        id: 5,
        nome: "Telescópio automatico",
        preco: 1200,
        categoria: "registro e observação",
        img: "public/equip5.png", alt: "telescopio iniciante"
    },

    {
        id: 6,
        nome: "Telescópio personalizado",
        preco: 3500,
        categoria: "regidtro e observação",
        img: "public/equip6.webp", alt: "telescopio person"
    },
];

const checkinbox = MOCK_PRODUTOS.map(item => ({
    ...item,
    check: false
}))
console.log("checkinbox",)



function Home() {

    const [cart, setCart] = useState<produtos[]>([]);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const isProductInCart = (productId: number) => {
        return cart.some((product) => product.id === productId);
    };

    const [produtosSelecionados, setProdutosSelecionados] = useState<any[]>(checkinbox);





    const { data: produtos = MOCK_PRODUTOS } = useApi<produtos[]>(
        ["home-items"],
        GET_HOME_ITEMS_API,
        MOCK_PRODUTOS,
        undefined,
        { initialData: MOCK_PRODUTOS }
    );

    const Addcart = (state: boolean, id: number) => {
        console.log("ID", id)
        setProdutosSelecionados(prev =>
            prev.map((produto, i) =>
                produto.id === id ? { ...produto, check: state } : produto
            )
        )
    }


    return (
        <>













        </>

    )
}

export default Home
