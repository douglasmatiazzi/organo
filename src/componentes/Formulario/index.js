import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [carga, setCarga] = useState('')
    const [data, setData] = useState('')
    const [imagem, setImagem] = useState('')
    const [certificado, setCertificado] = useState('')
    const [escola, setEscola] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCursoCadastrado({
            nome,
            carga,
            data,
            imagem,
            certificado,
            escola
        })
        setNome('')
        setCarga('')
        setData('')
        setImagem('')
        setCertificado('')
        setEscola('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o Card do curso concluído:</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome do Curso" 
                    placeholder="Digite seu nome do curso"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Carga Horária" 
                    placeholder="Digite a carga horária"
                    valor={carga}
                    aoAlterado={valor => setCarga(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Data de Conclusão" 
                    placeholder="Digite a data de conclusão"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Logo" 
                    placeholder="Digite o endereço da imagem"
                    valor ={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />   
                <CampoTexto 
                    obrigatorio={true}
                    label="Certificado" 
                    placeholder="Digite o endereço do certificado"
                    valor ={certificado}
                    aoAlterado={valor => setCertificado(valor)}
                />                 
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Escola" 
                    itens={props.escolas}
                    valor={escola}
                    aoAlterado={valor => setEscola(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
        )
}


export default Formulario