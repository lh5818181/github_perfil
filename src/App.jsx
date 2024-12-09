import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/RepoList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');
  
  return(
      <>
      <label className="label-perfil" >Insira o Nome do Usuario do GitHub e Clique em qualquer parte da tela:</label>
      <input className="input-perfil" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Nome do Usuario" />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>

      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button" >Toggle form</button> */}
      </>
    )

}

export default App
