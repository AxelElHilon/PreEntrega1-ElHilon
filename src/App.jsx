import React from "react";
import NavBar from "./components/Navbar";
import 'font-awesome/css/font-awesome.min.css';
import ItemListContainer from "./components/ItemListContainer";

/* Componentes 
- Son Funciones
- Arrancan en mayuscula 
- Tienen retorno si o si 
- Se pueden retornar muchos datos pero mayormente JSX
- No se pueden retornar DOS o más elementos JSX
- Siempre se debe retornar un solo elemento JSX
- Se puede retornar un fragmento de JSX <> </>
*/
function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a HypeGear!" />
    </div>
  );
}
export default App
