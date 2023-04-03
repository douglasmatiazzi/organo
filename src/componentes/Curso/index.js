import './Curso.css'

const Curso = (props) => {
    
    return (

        <div className='curso'>
            
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.carga}</h5>
                <h5>{props.data}</h5>
                <h5>{props.certificado}</h5>
            </div>   

        </div>
    )
}

export default Curso