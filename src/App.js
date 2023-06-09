import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9',
    },
    {
      nome: 'Front-end',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8',
    },
    {
      nome: 'UX',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF',
    }
  ]


  const titulo = 'Preencha os dados para criar o card do colaborador'
  const labelCamposTexto = ['Nome', 'Cargo', 'Imagem']
  const placeholderCamposTexto = [
    'Digite seu nome',
    'Digite seu cargo',
    'Informe o endereço da imagem'
  ]
 
  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario nomesTimes={times.map(time => time.nome)} aoColaboradorAdicionado={colaborador => aoColaboradorAdicionado(colaborador)} titulo={titulo} labelCamposTexto={labelCamposTexto} placeholderCamposTexto={placeholderCamposTexto}/>
      {times.map(time => <Time key={time.nome} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
      <Rodape/>
    </div>
  );
}

export default App;
