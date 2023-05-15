import './Header.css'

function Header() {
    return (
        <>
            <header>
                <form>
                    <div className="barra-pesquisa"> 
                        <label for="pesquisa"> <img src="/images/lupa.png" alt="lupa de pesquisa" /></label>
                        <input id="pesquisa" name="pesquisa" placeholder="Pesquisa" type="search" className="search"></input>
                    </div>
                </form>
                <h1>Hanging Gardens</h1>
            </header>
        </>
    )
};

export default Header;
