import { useEffect, useState } from "react";
import Home from "../templates/Home";
import Cart from "../templates/Cart";
import { useApi } from "../hooks/useApi";
import { GET_HOME_ITEMS_API } from "../constants/constants";


interface Item {
    src: string;
    alt: string;
}

interface produtos {
    id: number;
}

const MOCK_ITEMS: any[] = [
    { src: "/sky-telesc.jpg", alt: "céu-telescópio" },
    { src: "/moon-foto.jpg", alt: "foto-lua" },
    { src: "/exposicao_a_arte_de_fotografar_o_cosmos.jpeg", alt: "cosmos" },
    { src: "/9-scaled.webp", alt: "céu-espaço" },
];




const MOCK_PRODUTOS: any[] = [

    {
        id: 1,
        nome: "Telescópio profissional",
        preco: 4500,
        categoria: "registro e observção",
        img: "/equip1.jpg", alt: "telescopio"
    },

    {
        id: 2,
        nome: "Binóculo",
        preco: 250,
        categoria: "Observação",
        img: "/equip2.jpg", alt: "binoculo"
    },

    {
        id: 3,
        nome: "Telescópio",
        preco: 500,
        categoria: "Observação",
        img: "/equip3.webp", alt: "telescopio aut"
    },

    {
        id: 4,
        nome: "Monóculo iniciante",
        preco: 320,
        categoria: "Observação",
        img: "/equip4.jpeg", alt: "monoculo"
    },

    {
        id: 5,
        nome: "Telescópio automatico",
        preco: 1200,
        categoria: "registro e observação",
        img: "/equip5.png", alt: "telescopio iniciante"
    },

    {
        id: 6,
        nome: "Telescópio personalizado",
        preco: 3500,
        categoria: "regidtro e observação",
        img: "/equip6.webp", alt: "telescopio person"
    },
];



function Loja() {

    const [produtos, setProdutos] = useState<any[]>([]);




    const { data: product = MOCK_PRODUTOS } = useApi<produtos[]>(
        ["home-items"],
        GET_HOME_ITEMS_API,
        MOCK_PRODUTOS,
        undefined,
        { initialData: MOCK_PRODUTOS }
    );

    useEffect(() => {
        setProdutos(product.map(item => ({
            ...item,
            check: false
        })))

    }, [product])

    return (
        <>
            <Home data={produtos} setData={setProdutos} />
            <Cart data={produtos} setData={setProdutos} />
        </>

    )
}

export default Loja
