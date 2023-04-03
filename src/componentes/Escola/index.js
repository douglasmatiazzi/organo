import Curso from '../Curso'
import './Escola.css'

const Escola = (props) => {  

    const css = { backgroundColor: props.corSecundaria }

    return (        
        (props.cursos.length > 0) && <section className='escola' style={css}>

            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>    
            
            <div className='cursos'>{
                props.cursos.map( 
                    curso => <Curso
                        corDeFundo={props.corPrimaria}
                        key={curso.nome} 
                        nome={curso.nome} 
                        carga={curso.carga} 
                        data={curso.data} 
                        imagem={curso.imagem}
                        certificado={curso.certificado}
                        />
                )}
            </div>        

        </section>
    )
}

export default Escola