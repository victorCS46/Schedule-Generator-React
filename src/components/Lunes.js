import React from 'react';

function Lunes(props) {
  console.log('Hi Monday');
  // const x = props.data.map(item => ());

  const lunes = props.data.slice(0, 3).map(item => (
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
              {lunes}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

export default Lunes;
