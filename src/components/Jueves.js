import React from 'react';

function Jueves(props) {
  if(Object.keys(props.data).length >= 10){
    const jueves = props.data.slice(9, 12).map(item => (
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
                <th colSpan="2">Jueves</th>
              </tr>
              <tr>
                <th>Materia</th>
                <th>Horas</th>
              </tr>
            </thead>
            <tbody>
              {jueves}
            </tbody>
          </table>
        </div>
      </center>
    </div>
    );
  }
}  
export default Jueves;