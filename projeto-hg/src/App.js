import Catalogo from './components/Catalogo/Catalogo';
import Header from './components/Header';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
    <Header/>
    <NavBar
        homeText="Home"
        plantasText="Plantas"
        cadastroText="Cadastro"
        quemSomosText="Quem somos"
        contatoText="Contato"
      />
      <Catalogo/>
    </>
      
  );
}

export default App;
