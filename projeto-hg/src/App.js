import Catalogo from './components/Catalogo/Catalogo';
import Header from './components/Header';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
function App() {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const handlePesquisaChange = (termoPesquisa) => {
    setTermoPesquisa(termoPesquisa);
  };
  return (
    <>
    <Header onPesquisaChange={handlePesquisaChange}/>
    <NavBar
        homeText="Home"
        plantasText="Plantas"
        cadastroText="Cadastro"
        quemSomosText="Quem somos"
        contatoText="Contato"
      />
      <Catalogo termoPesquisa={termoPesquisa} />
    </>
      
  );
}

export default App;
