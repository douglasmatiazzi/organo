import { useState } from 'react';
import Banner from './componentes/Banner';
import Escola from './componentes/Escola';
import Formulario from './componentes/Formulario';

function App() {

  const escolas = [
    {
      nome: 'Back-End',
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
        nome: 'DevOps',
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

  const [cursos, setCursos] = useState([
    {
      "nome": "Administração do MySQL: segurança e otimização do banco", 
      "carga": "16h", 
      "data": "16/08/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mysql-dba-administracao.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mysql-dba-administracao/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Aprender a aprender: técnicas para seu autodesenvolvimento", 
      "carga": "8h", 
      "data": "08/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento/certificate",         
      "escola": "Inovação e Gestão"
    },
    {
      "nome": "Comandos DML: manipulação de dados com MySQL", 
      "carga": "10h", 
      "data": "03/08/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mysql-dml-manipulacao-de-dados.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mysql-dml-manipulacao-de-dados/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Consultas SQL: avançando no SQL com MySQL", 
      "carga": "14h", 
      "data": "28/07/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mysql-consultas-sql.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mysql-consultas-sql/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "CSS: dispondo elementos com Flexbox e Grid", 
      "carga": "8h", 
      "data": "30/09/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/css-dispondo-elementos-flexbox-grid.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/css-dispondo-elementos-flexbox-grid/certificate",         
      "escola": "Front-End"
    },
    {
      "nome": "Data Science: análise e visualização de dados", 
      "carga": "6h", 
      "data": "02/02/2023", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/data-science-primeiros-passos.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/data-science-primeiros-passos/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Django: modelo, rotas e views", 
      "carga": "8h", 
      "data": "29/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/fundamentos-django-2.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/fundamentos-django-2/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "DNS: entenda a resolução de nomes na internet", 
      "carga": "12h", 
      "data": "13/12/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/dns-resolucao-nomes-internet.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/dns-resolucao-nomes-internet/certificate",         
      "escola": "DevOps"
    },
    {
      "nome": "Docker: criando e gerenciando containers", 
      "carga": "10h", 
      "data": "24/11/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/docker-criando-gerenciando-containers.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/docker-criando-gerenciando-containers/certificate",         
      "escola": "DevOps"
    },
    {
      "nome": "Estatística com Python: frequências e medidas", 
      "carga": "10h", 
      "data": "03/03/2023", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/estatistica-distribuicoes-e-medidas.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/estatistica-distribuicoes-e-medidas/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Estatística com Python: probabilidade e amostragem", 
      "carga": "10h", 
      "data": "09/03/2023", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/estatistica-probabilidade-e-amostragem.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/estatistica-probabilidade-e-amostragem/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Flask: avançando no desenvolvimento web com Python", 
      "carga": "10h", 
      "data": "13/07/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/flask-desenvolvimento-web.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/flask-desenvolvimento-web/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Flask: crie uma webapp com Python", 
      "carga": "10h", 
      "data": "04/07/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/flask-crie-webapp-python.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/flask-crie-webapp-python/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Git e Github: controle e compartilhe seu código", 
      "carga": "6h", 
      "data": "27/10/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/git-github-controle-de-versao.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/git-github-controle-de-versao/certificate",         
      "escola": "DevOps"
    },
    {
      "nome": "HTML5 e CSS3 parte 1: crie uma página da Web", 
      "carga": "8h", 
      "data": "30/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/html5-css3-primeiros-passos.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/html5-css3-primeiros-passos/certificate",         
      "escola": "Front-End"
    },
    {
      "nome": "HTML5 e CSS3 parte 2: posicionamento, listas e navegação", 
      "carga": "8h", 
      "data": "23/08/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/html5-css3-posicionamento-listas-navegacao.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/html5-css3-posicionamento-listas-navegacao/certificate",         
      "escola": "Front-End"
    },
    {
      "nome": "HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas", 
      "carga": "8h", 
      "data": "06/09/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/html5-css3-formularios-tabelas.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/html5-css3-formularios-tabelas/certificate",         
      "escola": "Front-End"
    },
    {
      "nome": "HTML5 e CSS3 parte 4: avançando no CSS", 
      "carga": "8h", 
      "data": "12/09/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/html5-css3-avancando-css.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/html5-css3-avancando-css/certificate",         
      "escola": "Front-End"
    },
    {
      "nome": "HTTP: Entendendo a web por baixo dos panos", 
      "carga": "14h", 
      "data": "24/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/http-fundamentos.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/http-fundamentos/certificate",         
      "escola": "Front-End"
    },
    {
      "nome": "Linux I: conhecendo e utilizando o terminal", 
      "carga": "4h", 
      "data": "10/11/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/linux-ubuntu.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/linux-ubuntu/certificate",         
      "escola": "DevOps"
    },
    {
      "nome": "Linux Onboarding: usando a CLI de uma forma rápida e prática", 
      "carga": "8h", 
      "data": "14/12/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/linux-onboarding-utilizar-cli-forma-rapida-pratica.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/linux-onboarding-utilizar-cli-forma-rapida-pratica/certificate",         
      "escola": "DevOps"
    },
    {
      "nome": "Modelagem MongoDB: relacionamentos e cardinalidade", 
      "carga": "8h", 
      "data": "08/12/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mongodb-fundamentos-modelagem.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mongodb-fundamentos-modelagem/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "MongoDB: conhecendo um banco de dados NoSQL", 
      "carga": "8h", 
      "data": "05/12/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mongodb-banco-dados-nosql.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mongodb-banco-dados-nosql/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "MongoDB: modelagem de dados", 
      "carga": "10h", 
      "data": "02/12/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mongodb-modelagem-dados.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mongodb-modelagem-dados/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Procedures SQL: executando código no MySQL", 
      "carga": "14h", 
      "data": "11/08/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mysql-procedures.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mysql-procedures/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Python Brasil: validação de dados no padrão nacional", 
      "carga": "7h", 
      "data": "22/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-validacao-dados.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-validacao-dados/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Python Collections parte 1: listas e tuplas", 
      "carga": "8h", 
      "data": "17/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-collections-listas-e-tuplas.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-collections-listas-e-tuplas/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Python Collections parte 2: conjuntos e dicionários", 
      "carga": "9h", 
      "data": "20/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-collections-conjuntos-e-dicionarios.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-collections-conjuntos-e-dicionarios/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Python Pandas: tratando e analisando dados", 
      "carga": "12h", 
      "data": "14/02/2023", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/introducao-python-pandas.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/introducao-python-pandas/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Python para Data Science: linguagem e Numpy", 
      "carga": "12h", 
      "data": "17/02/2023", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-tipos-listas-numpy.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-tipos-listas-numpy/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "Python: avançando na linguagem", 
      "carga": "12h", 
      "data": "06/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-3-avancando-na-linguagem.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-3-avancando-na-linguagem/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Python: avançando na orientação a objetos", 
      "carga": "10h", 
      "data": "13/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-3-avancando-orientacao-objetos.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-3-avancando-orientacao-objetos/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Python: começando com a linguagem", 
      "carga": "12h", 
      "data": "02/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-introducao-a-linguagem.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-introducao-a-linguagem/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Python: entendendo a Orientação a Objetos", 
      "carga": "12h", 
      "data": "08/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/python-3-intro-orientacao-objetos.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/python-3-intro-orientacao-objetos/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Quality Assurance: plano de testes e gestão de bugs", 
      "carga": "8h", 
      "data": "12/10/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/quality-assurance-plano-testes-gestao-bugs.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/quality-assurance-plano-testes-gestao-bugs/certificate",         
      "escola": "Back-End"
    },
    {
      "nome": "Redes parte 1: conceitos e prática", 
      "carga": "10h", 
      "data": "17/11/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/redes-introducao.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/redes-introducao/certificate",         
      "escola": "DevOps"
    },
    {
      "nome": "RH na Educação Corporativa: visualizando novos paradigmas", 
      "carga": "8h", 
      "data": "21/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/rh-educacao-corporativa-novos-paradigmas.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/rh-educacao-corporativa-novos-paradigmas/certificate",         
      "escola": "Inovação e Gestão"
    },
    {
      "nome": "SQL com MySQL: manipule e consulte dados", 
      "carga": "12h", 
      "data": "21/07/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/mysql-manipule-dados-com-sql.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/mysql-manipule-dados-com-sql/certificate",         
      "escola": "Data Science"
    },
    {
      "nome": "String em Python: extraindo informações de uma URL", 
      "carga": "8h", 
      "data": "15/06/2022", 
      "imagem": "https://www.alura.com.br/assets/api/cursos/string-python-extraindo-informacoes-url.svg", 
      "certificado": "https://cursos.alura.com.br/user/douglass-aguiarr/course/string-python-extraindo-informacoes-url/certificate",         
      "escola": "Back-End"
    }
  ])

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
