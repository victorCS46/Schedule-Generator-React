import React from 'react';

function Martes(props) {
  console.log('Hi Tuesday');
  // const x = props.data.map(item => ());
  if(Object.keys(props.data).length >= 4){
    const martes = props.data.slice(3, 6).map(item => (
      <tr>
        <td>{item.dia}</td>
        <td>{item.materia}</td>
        <td>{item.hora}</td>
      </tr>
    ))
  
    return (
      <div className="table-div">
        <center>
          <div>
            <table className="vcs-table">
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Materia</th>
                  <th>Horas</th>
                </tr>
              </thead>
              <tbody>
                {martes}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    );
  }
}  
export default Martes;