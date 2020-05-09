import React from 'react';
import MainTable from './components/MainTable';

function App() {

  const style = {
    main: {
      background: '#D35353',
      height: '100vh'
    },
    headerOne: {
      textAlign: 'center'
    },
    headerTwo: {
      textAlign: 'center',
      background: '#D98888'
    },
    table: {
      marginTop: '40px'
    }
  }
  return (
    <div style={style.main} className="wrapper">
      <h1 style={style.headerOne}>John and Jane Adams Family Buisness</h1>
      <p style={style.headerTwo}>Click any column to switch how the table is sorted. You may also filter by department!</p>
      <MainTable style={style.table}/>
    </div>
  );
}

export default App;
