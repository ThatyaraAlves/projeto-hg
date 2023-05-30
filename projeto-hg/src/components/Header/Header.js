import './Header.css'
import Catalogo from '../Catalogo/Catalogo'
import React, { useState } from 'react';

export const Header = ({ onPesquisaChange }) => {
    const handlePesquisaChange = (event) => {
        const termoPesquisa = event.target.value;
        onPesquisaChange(termoPesquisa);
      };
    return (
        <>
            <header>
                <form>
                    <div className="barra-pesquisa"> 
                        <label for="pesquisa"> <img src="/images/lupa.png" alt="lupa de pesquisa" /></label>
                        <input 
                        id="pesquisa" 
                        name="pesquisa" 
                        placeholder="Pesquisa" 
                        type="search" 
                        className="search"
                        onChange={handlePesquisaChange}
                        ></input>
                    </div>
                </form>
                <h1>Hanging Gardens</h1>
            </header>
            
            
        </>
    )
};

//export default Header;
