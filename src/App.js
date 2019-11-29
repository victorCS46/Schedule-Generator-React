import React, {useState,/*useEffect*/} from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import Tables from './components/Tables';
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [semana,setSemana] = useState([]);
  // let [count,setCount] = useState(0);
  let [ite,setIte] = useState(0);
  var len = Object.keys(semana).length;
  
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    setIte(ite + 1);
    var hora = ['9:00am - 1:00pm','2:00pm - 6:00pm','6:00pm - 10:00pm'];
    // setCount(count++);
    // console.log(semana);
    // setIte(ite++);
    setSemana(semana.concat([{materia:input,hora:hora[ite]}]));
    // setSemana(semana.push({materia:input,hora:'1'}));
    // console.log(semana.map(x => x.materias))
    if (ite === 2){
      setIte(0);
    }
    if(len === 14){
      document.getElementById("btnsmt").style.display = 'none'
    }
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
            {len >= 15 ? <Tables data={semana}/> : ''}
            {len >= 3 ? console.log(semana[0]) : console.log('nada')}
            {console.log(Object.keys(semana).length)}
            {/* {console.log(semana.hora[0])} */}
        </form>
    </div>
  );
}

export default App;
