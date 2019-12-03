import React from 'react';

function Viernes(props) {
  if(Object.keys(props.data).length >= 13){
    const viernes = props.data.slice(12, 15).map(item => (
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
                <th colSpan="2">Viernes</th>
              </tr>
              <tr>
                <th>Materia</th>
                <th>Horas</th>
              </tr>
            </thead>
            <tbody>
              {viernes}
            </tbody>
          </table>
        </div>
      </center>
    </div>
    );
  }
}  
export default Viernes;