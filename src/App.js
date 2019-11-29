import React, {useState,/*useEffect*/} from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import Tables from './components/Tables';
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [semana,setSemana] = useState([]);
  let [count,setCount] = useState(0);
  let [ite,setIte] = useState(0);
  var len = Object.keys(semana).length;
  
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log('input:',input);
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    setIte(ite + 1);
    var hora = ['9:00am - 1:00pm','2:00pm - 6:00pm','6:00pm - 10:00pm'];
    var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    // setCount(count++);
    // console.log(semana);
    // setIte(ite++);
    setSemana(semana.concat([{dia:dias[count],materia:input,hora:hora[ite]}]));
    if (ite === 2){
      setIte(0);
    }

    if(len === 2){
      setCount(count + 1);
    }
    else if(len === 5){
      setCount(count + 1);
    }
    else if(len === 8){
      setCount(count + 1);
    }
    else if(len === 11){
      setCount(count + 1);
    }
    else if(len === 15){
      document.getElementById("btnsmt").style.display = 'none';
      document.getElementById("btnfin").style.display = 'none';
      document.getElementById("infield").style.display = 'none';
      alert('Ya no hay mas horarios disponibles');
    }
  }

  const Ended = () =>{
    document.getElementById("btnsmt").style.display = 'none';
    document.getElementById("btnfin").style.display = 'none';
    document.getElementById("infield").style.display = 'none';
    alert('Estos son los horarios del aula');
  }

  return (
    <div className="App">
      <h2>Generador de horarios</h2>
        <form id="FormRead" name="FormRead"  method="post" onSubmit={handleSubmit}>
            <input onChange={handleChange} name="materia" className="effect-1" type="text" id="infield" placeholder="Nombre de la materia" value={input}/>
            <div className="div_btn">
                <button type="submit" className="button" id="btnsmt">Guardar</button>
                <button type="button" className="button2" id="btnfin" onClick={Ended}>Finalizar Horarios</button>
            </div>
            {len >= 1 ? <Tables data={semana}/> : ''}
            {len >= 15 ? console.log(semana) : console.log('nada')}
            {console.log('Cantidad de materias:',Object.keys(semana).length)}
            {console.log('count:',count)}
        </form>
    </div>
  );
}

export default App;
