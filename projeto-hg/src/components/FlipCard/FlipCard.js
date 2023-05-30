import './FlipCard.css';

const FlipCard = (props) => {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {<img src={props.imagem} alt="Imagem da planta" style={{ width: '300px', height: '300px' }} /> }
          </div>
          <div className="flip-card-back">
            <h2 className="plantas">{props.nome}</h2>
            <p className="plantas">{props.nomeCientifico}</p>
            <p className="plantas">{props.descricao}</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
