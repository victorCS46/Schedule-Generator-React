import React, {useState,/*useEffect*/} from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [semana,setSemana] = useState([]);
  // let [count,setCount] = useState(0);
  let [ite,setIte] = useState(0);
  
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    setIte(ite + 1);
    // setCount(count++);
    // console.log(semana);
    // setIte(ite++);
    setSemana(semana.concat([{materia:input,hora:ite}]));
    // setSemana(semana.push({materia:input,hora:'1'}));
    // console.log(semana.map(x => x.materias))
  }
  return (
    <div className="App">
      <h2>Generador de horarios</h2>
        <form id="FormRead" name="FormRead"  method="post" onSubmit={handleSubmit}>
            <input onChange={handleChange} name="materia" className="effect-1" type="text" id="infield" placeholder="Nombre de la materia" value={input}/>
            <div className="div_btn">
                <button type="submit" className="button" id="btnsmt">Guardar</button>
                <button type="button" className="button2" id="btnfin">Finalizar Horarios</button>
            </div>
            {console.log(semana)}
            {/* { {console.log(semana.hora[1])} */}
        </form>
    </div>
  );
}

export default App;
