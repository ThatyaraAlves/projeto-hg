import './FlipCard.css';

const FlipCard = (props) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="images/alecrim.jpg" alt="Alecrim em vaso, fundo branco" style={{ width: '300px', height: '300px' }} />
          </div>
          <div className="flip-card-back">
            <h2 className="plantas">{props.nome}</h2>
            <p className="plantas">{props.nomeCientifico}</p>
            <p className="plantas">{props.descricao}O alecrim é uma erva aromática comum na região do Mediterrâneo 
              ocorrendo preferencialmente em solos 
              de origem calcária. Devido à sua atratividade estética e razoável tolerância à seca, é 
              utilizado em arquitetura paisagista, especialmente em áreas com clima mediterrâneo. 
              É considerada fácil de cultivar para jardineiros principiantes, tendo uma boa tolerância 
              a pragas.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
