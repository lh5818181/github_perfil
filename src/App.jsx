import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/formulario";
import ReposList from "./components/RepoList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
    
  
  return(
      <>
      <Perfil nome="luis" endereco="https://github.com/lh5818181.png" />
      <ReposList />

      

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button" >Toggle form</button> */}
      </>
    )

}

export default App
