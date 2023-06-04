import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) =>{
   
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (evento) => {
        evento.preventDefault() // remove o comportamento padrão do navegador de enviar o form para a mesma url. Nós é que vamos decidir oq será feito.
        props.aoColaboradorAdicionado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={onSubmit}>
                <h2>{props.titulo}</h2>
                <CampoTexto 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} //quando escrito dessa forma, estamos pegando o valor que vem lá do componente, quando ele chama 'aoAlterado'
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"/>
                <CampoTexto 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} 
                    obrigatorio={true} 
                    label="Cargo"
                    placeholder="Digite seu cargo"/>
                <CampoTexto 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time"
                    itens={props.nomesTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar card
                </Botao>           
            </form>
        </section>
    )
}

export default Formulario;



{/* 
     {props.labelCamposTexto.map((label, index) => {
                        return <CampoTexto label={label} placeholder={props.placeholderCamposTexto[index]}/>
                })}
                <ListaSuspensa label="Time" itens={itens}/>
                <Botao>
                    Criar card
                </Botao> 
*/}