import './Card.css'

const Card = ({nomeColaborador, cargo, imagem, corDeFundo})=>{
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nomeColaborador}/>
            </div>
            <div className='rodape'>
                <h4>{nomeColaborador}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card;