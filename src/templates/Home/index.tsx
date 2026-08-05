import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
console.log("checkinbox", )



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
         prev.map((produto, i ) => 
         produto.id === id ? {...produto, check: state}  : produto
         )
      )
   }


   return (
      <>

         <Box sx={{ margin: "50px", }}>
            <Typography variant="h1" gutterBottom color="warning">
               Conheça Astronomia
            </Typography>

            <p>Já olhou para cima hoje? Pare e comtemple o universo a cima de você; Meteoritos, cometas, planetas, estrelas, nebulosas, galáxias... uma experiência sem limites, um universo de possibilidades pra explorar.
               e aqui você vai encontrar os melhores e mais capacitados equipamentos de explorção desde telescópios profissionais á binóculos e monóculos que cabem na sua demanda de exploração. Não perca tempo e confira: </p>
         </Box >

         <Box sx={{ maxWidth: "600px", width:"100%", paddingLeft: "300px", paddingTop: "10px",}}>
            <Carousel infiniteLoop autoPlay showThumbs={false}>
               {MOCK_ITEMS.map((item) => (
                  <div key={item.src}>
                     <img src={item.src} alt={item.alt} />
                  </div>

               ))}
            </Carousel>
         </Box >

         <Grid container spacing={3}>
            { produtosSelecionados ? 
            (produtosSelecionados ?.map((produtos) => {
               console.log(produtos)
               return (
                  <Grid key={produtos.id} size={{ xs: 12, sm: 6, md: 3 }}>
                     <Card sx={{ height: "100%", width:"90%" }}>
                        <CardMedia
                           component="img"
                           image={produtos.img}
                           alt={produtos.nome}
                        />

                        <CardContent>
                           <Typography variant="h6">
                              {produtos.nome}
                           </Typography>

                           <Typography
                              color="primary"
                              sx={{ my: 1 }}
                           >
                              {produtos.preco}
                           </Typography>


                           <FormControlLabel
                              control={
                                 <Checkbox
                                    // checked={selected.includes(produtos.id)}
                                    // onChange={() => toggleProdutos(produtos.id)}
                                    checked={produtos?.check}
                                    onChange={(_target, value) => Addcart(value, produtos.id)}
                                 />
                              }
                              label="Adicionar ao carrinho"
                           />

                           <Button
                              fullWidth
                              variant="contained"
                              startIcon={<ShoppingCart />}
                           >
                              Comprar
                           </Button>
                        </CardContent>

                        
                     </Card>
                  </Grid>
               )
            })) : (
               <div>Not fount</div>
            )}
         </Grid>








      </>

   )
}

export default Home
