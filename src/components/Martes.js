import React from 'react';

function Martes(props) {
  if(Object.keys(props.data).length >= 4){
    const martes = props.data.slice(3, 6).map(item => (
      <tr>
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
                <th colSpan="2">Martes</th>
              </tr>
              <tr>
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