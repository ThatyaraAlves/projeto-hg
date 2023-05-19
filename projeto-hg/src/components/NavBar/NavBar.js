import './NavBar.css'


export const NavBar = (props) => {
    return (
    <nav className="home-page">
    <div className="home-page">
    <a href="#">{props.homeText}</a>
        <a href="#plantas">{props.plantasText}</a>
        <a href="#cadastro">{props.cadastroText}</a>
        <a href="#quemsomos">{props.quemSomosText}</a>
        <a href="#contato">{props.contatoText}</a>
    </div>
</nav>)
}

