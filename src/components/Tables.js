import React,{ useState, useEffect } from 'react';


function Tables(props){
    console.log('Hi table');
    // const x = props.data.map(item => ());
    const x = props.data.slice(0,5).map(item => (
        <tr>
            <td>{item.materia}</td>
            <td>{item.hora}</td>
        </tr>            
    ))

    useEffect(()=>{
    },[props])

    return (
        <div>
          <center>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Materia</th>
                            <th>Horas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {x}
                    </tbody>
                </table>
            </div>
          </center>
        </div>
      );
}
export default Tables;