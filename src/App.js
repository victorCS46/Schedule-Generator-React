import React, {useState} from 'react';
import Lunes from './components/Lunes';
import Martes from './components/Martes';
import Miercoles from './components/Miercoles';
import Jueves from './components/Jueves';
import Viernes from './components/Viernes';
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

  //Agregando materias con sus dias y horarios
  const handleSubmit =  (e) => {
    e.preventDefault();
    setIte(ite + 1);
    var hora = ['9:00am - 1:00pm','2:00pm - 6:00pm','6:00pm - 10:00pm'];
    var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
    setSemana(semana.concat([{dia:dias[count],materia:input,hora:hora[ite]}]));
    if (ite === 2) {
      setIte(0);
    }

    if(len === 2) {
      setCount(count + 1);
    }
    else if(len === 5) {
      setCount(count + 1);
    }
    else if(len === 8) {
      setCount(count + 1);
    }
    else if(len === 11) {
      setCount(count + 1);
    }
    else if(len === 15) {
      document.getElementById("FormRead").style.display = 'none';
      alert('Ya no hay mas horarios disponibles');
    }
  }

  const Ended = () =>{
    document.getElementById("FormRead").style.display = 'none';
    alert('Estos son los horarios del aula');
  }

  //renderizando componentes
  return (
    <div className="App">
      <h2>Generador de horarios</h2>
        <form id="FormRead" name="FormRead"  method="post" onSubmit={handleSubmit}>
            <input onChange={handleChange} name="materia" className="effect-1" type="text" id="infield" placeholder="Nombre de la materia" value={input}/>
            <div className="div_btn" id="div_btn">
                <button type="submit" className="button" id="btnsmt">Guardar</button>
                <button type="button" className="button2" id="btnfin" onClick={Ended}>Finalizar Horarios</button>
            </div>
        </form>
        {len >= 1  ? <Lunes data={semana}/>     : ''}
        {len >= 4  ? <Martes data={semana}/>    : ''}
        {len >= 7  ? <Miercoles data={semana}/> : ''}
        {len >= 10 ? <Jueves data={semana}/>    : ''}
        {len >= 13 ? <Viernes data={semana}/>   : ''}
        {len >= 15 ? console.log(semana) : console.log('nada')}
        {console.log('Cantidad de materias:',Object.keys(semana).length)}
        {console.log('count:',count)}
    </div>
  );
}

export default App;