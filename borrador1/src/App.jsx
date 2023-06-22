import Navbar from "./layouts/navbar/Navbar";
import { Productos } from "./componentes/pague/container/Container";

const App = () => {

  let saludo = "Bienvenidos a tu joyeria Scarlata"

  return (
<div>
  <Navbar/>
  <Productos saludo={saludo} />
  </div>
  )
  
  
};

export default App;