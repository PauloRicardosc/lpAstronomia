import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useApi } from "../../hooks/useApi";
import { GET_HOME_ITEMS_API } from "../../constants/constants";
import { Box, Button, Card, CardContent, CardMedia, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useState, type Dispatch, type SetStateAction } from "react";




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



interface HomeProps {
   data: any;
   setData: Dispatch<SetStateAction<any>>;
}

function Home({ data, setData }: HomeProps) {

   const Addcart = (state: boolean, id: number) => {
      console.log("ID", id)
      setData(prev => 
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
            { data ? 
            (data ?.map((produtos) => {
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
