import FlipCard from "../FlipCard/FlipCard"
const Catalogo = () => {
    const plantas = [
        {
         
         nome: "Alecrim",
         nomeCientifico: "Salvia Rosmarinus",
         descricao: ```O alecrim é uma erva aromática comum na região do Mediterrâneo 
         ocorrendo preferencialmente em solos 
         de origem calcária. Devido à sua atratividade estética e razoável tolerância à seca, é 
         utilizado em arquitetura paisagista, especialmente em áreas com clima mediterrâneo. 
         É considerada fácil de cultivar para jardineiros principiantes, tendo uma boa tolerância 
         a pragas```,
         imagem: "/images/alecrim.jpg"  
    },
        {
         
         nome: "Aloe vera",
         nomeCientifico: "Aloe vera",
         descricao: ```Aloe vera, também conhecida por babosa, é uma espécie de planta 
         suculenta do gênero Aloe. Cresce selvagem em climas tropicais ao redor do mundo e é
          cultivada para usos agrícolas e medicinais. Também é usada para fins decorativos e 
          cresce com sucesso dentro de casa como uma planta em vaso.```,
         imagem: "/images/aloe-vera.jpg"  
    }

    ]

    return(
        <>
        <FlipCard />
        
        
        </>
    )
}

export default Catalogo