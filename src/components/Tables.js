import React from 'react';


function Tables(props) {
  console.log('Hi table');
  // const x = props.data.map(item => ());

  const lunes = props.data.slice(0, 16).map(item => (
    <tr>
      <td>{item.dia}</td>
      <td>{item.materia}</td>
      <td>{item.hora}</td>
    </tr>
  ))

  return (
    <div>
      <center>
        <div>
          <table class="vcs-table">
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
export default Tables;