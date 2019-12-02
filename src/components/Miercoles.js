import React from 'react';

function Miercoles(props) {
  console.log('Hi Wednesday');
  // const x = props.data.map(item => ());
  if(Object.keys(props.data).length >= 7){
    const miercoles = props.data.slice(6, 9).map(item => (
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
                {miercoles}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    );
  }
}  
export default Miercoles;