import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useApi } from "../../hooks/useApi";
import { GET_HOME_ITEMS_API } from "../../constants/constants";

interface Item {
   src: string;
   alt: string;
}

const MOCK_ITEMS: Item[] = [
   { src: "/sky-telesc.jpg", alt: "céu-telescópio" },
   { src: "/moon-foto.jpg", alt: "foto-lua" },
   { src: "/exposicao_a_arte_de_fotografar_o_cosmos.jpeg", alt: "cosmos" },
   { src: "/9-scaled.webp", alt: "céu-espaço" },
];

function Home() {
   const { data: items = MOCK_ITEMS } = useApi<Item[]>(
      ["home-items"],
      GET_HOME_ITEMS_API,
      MOCK_ITEMS,
      undefined,
      { initialData: MOCK_ITEMS }
   );

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
