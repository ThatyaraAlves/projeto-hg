import FlipCard from "../FlipCard/FlipCard";

const Catalogo = (props) => {
    const flipCardData = [
        {

            nome: "Alecrim",
            nomeCientifico: "Salvia Rosmarinus",
            descricao: "O alecrim é uma erva aromática comum na região do Mediterrâneo ocorrendo preferencialmente em solos de origem calcária.Devido à sua atratividade estética e razoável tolerância à seca, é utilizado em arquitetura paisagista, especialmente em áreas com clima mediterrâneo. É considerada fácil de cultivar para jardineiros principiantes, tendo uma boa tolerância a pragas",
            imagem: "/images/alecrim.jpg"  
    },
        {

            nome: "Aloe vera",
            nomeCientifico: "Aloe vera",
            descricao: "Aloe vera, também conhecida por babosa, é uma espécie de planta suculenta do gênero Aloe. Cresce selvagem em climas tropicais ao redor do mundo e é cultivada para usos agrícolas e medicinais. Também é usada para fins decorativos e cresce com sucesso dentro de casa como uma planta em vaso.",
            imagem: "/images/aloe-vera.jpg"  
        },
        {

            nome: "Ora-pro-nóbis",
            nomeCientifico: "Pereskia aculeata",
            descricao: "Popularmente conhecida como ora-pro-nóbis, orabrobó, lobrobó ou lobrobô, é uma cactácea trepadeira folhosa. É uma planta bastante rara, rústica, perene, desenvolvendo-se bem em vários tipos de solo, tanto à sombra como ao sol.",
            imagem: "/images/ora-pro-nobis.jpg"  
        },
        {

            nome: "Begônia",
            nomeCientifico: "Begônia",
            descricao: "As begónias provêm principalmente da América tropical, de florestasúmidas ou nichos de umidade das savanas, com muitas espécies epífitas ou rupícolas, embora a maioria seja terrestre. São, de maneira geral, plantas ornamentais de folhagem característica, e ocasionalmente flores atraentes",
            imagem: "/images/begonia.jpg"  
        },
        {

            nome: "Espada-de-são-jorge",
            nomeCientifico: "Dracaena trifasciata",
            descricao: "A espada-de-são-jorge, espada-de-santa-bárbara ou espada-de-Iansã, também conhecida como língua-de-sogra, rabo-de-lagarto e sanseviéria, é uma planta herbácea de origem africana. Também é importante saber que é uma planta tóxica, e que não deve ser ingerida.",
            imagem: "/images/espad-de-sao-jorge.jpg"  
        },
        {

            nome: "Cheflera",
            nomeCientifico: "Schefflera arboricola",
            descricao: "É uma planta perene que cresce até 9 metros de altura, independente ou epífita de outras árvores. As folhas são persistentes, verdes brilhantes e palmatamente compostas.É comumente cultivada para decorar ambientes de casas e escritórios, popular por sua tolerância a condições negligentes e que prejudicam seu crescimento.",
            imagem: "/images/cheflera.jpg"  
        }

    ]

    return (
        <>
            {flipCardData.map((item) => (
                <FlipCard nome={item.nome} 
                nomeCientifico={item.nomeCientifico} 
                descricao={item.descricao} 
                imagem={item.imagem} />
            ))}
        </>
    )
}

export default Catalogo