import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Item {
   src: string;
   alt: string;
}

function Home() {
   const items: Item[] = [
      { src: "/sky-telesc.jpg", alt: "céu-telescópio" },
      { src: "/moon-foto.jpg", alt: "foto-lua" },
      { src: "/exposicao_a_arte_de_fotografar_o_cosmos.jpeg", alt: "cosmos" },
      { src: "/9-scaled.webp", alt: "céu-espaço" },
   ];

   return (
      <>
         <Carousel infiniteLoop autoPlay showThumbs={false}>
            {items.map((item) => (
               <div key={item.src}>
                  <img src={item.src} alt={item.alt} />
               </div>
            ))}
         </Carousel>
         <h1>Conheça Astronomia</h1>

         <p>Já olhou para cima hoje? Pare e comtemple o universo a cima de você; Meteoritos, cometas, planetas, estrelas, nebulosas, galáxias... uma experiência sem limites, um universo de possibilidades pra explorar.
            e aqui você vai encontrar os melhores e mais capacitados equipamentos de explorção desde telescópios profissionais á binóculos e monóculos que cabem na sua demanda de exploração. Não perca tempo e confira: </p>







      </>

   )
}

export default Home
