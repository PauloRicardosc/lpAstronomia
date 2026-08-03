import { react } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";

interface Item {
   title: string;
}

function Home() {
   const items: Item = [
      { title: "Item 1" },
      { title: "Item 2" },
      { title: "Item 3" },
   ];

   function CarouselItem({ item }: { item: Item }) {
      return (
         <Paper sx={{ p: 4 }}>
            <Typography>{item.title}</Typography>
         </Paper>
      );
   }

   console.log(items)
   return (
      <>
         {/* <Carousel>
            <figure>
               <img src="public/sky-telesc.jpg" alt="céu-telescoipio" />
               <img src="public/moon-foto.jpg" alt="foto-lua" />
               <img src="public/exposicao_a_arte_de_fotografar_o_cosmos.jpeg" alt="cosmos" />
               <img src="public/9-scaled.webp" alt="céu-espaço" />
            </figure>

         </Carousel> */}

         <Carousel>
            {items.map((item) => (
               <CarouselItem key={item.title} item={item} />
            ))}
         </Carousel>
         <h1>Conheça Astronomia</h1>

         <p>Já olhou para cima hoje? Pare e comtemple o universo a cima de você; Meteoritos, cometas, planetas, estrelas, nebulosas, galáxias... uma experiência sem limites, um universo de possibilidades pra explorar.
            e aqui você vai encontrar os melhores e mais capacitados equipamentos de explorção desde telescópios profissionais á binóculos e monóculos que cabem na sua demanda de exploração. Não perca tempo e confira: </p>







      </>

   )
}

export default Home
