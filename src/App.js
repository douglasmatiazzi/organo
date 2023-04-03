import { useState } from 'react';
import Banner from './componentes/Banner';
import Escola from './componentes/Escola';
import Formulario from './componentes/Formulario';

function App() {

  const escolas = [
    {
      nome: 'Back-end',
      corPrimaria: '#57C278', 
      corSecundaria: '#D9F7E9',

    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Science',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE5F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }
  ]

  const [cursos, setCursos] = useState([])

  const aoNovoCursoAdicionado = (curso) => {
    console.log(curso)
    setCursos([...cursos, curso])
  }

  return (
    <div className="App">
      <Banner />     
      <Formulario 
        escolas={escolas.map(escola => escola.nome)} 
        aoCursoCadastrado={curso => aoNovoCursoAdicionado(curso)}
      />        

      {escolas.map(escola => <Escola 
        key={escola.nome} 
        nome={escola.nome} 
        corPrimaria={escola.corPrimaria} 
        corSecundaria={escola.corSecundaria}
        cursos={cursos.filter(curso => curso.escola == escola.nome)}
      />)}
         
    </div>
  );
}

export default App;
