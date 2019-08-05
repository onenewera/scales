import React from 'react';
import './App.css';
// import UnitConverter from './components/unitConverter';


function App() {

  // Adjust this for global scale
  const scaleLevel = 100

  // Scale Numbers
  let earthScale = 12754000
  let humanScale = 18.2
  let ratScale = 2.8ik8,
  let microbeScale = .00000001
  let planckScale = .0000024

  // Scale Percentages
  let earth = earthScale / scaleLevel * 100 + "%"
  let human = humanScale / scaleLevel * 100 + "%"
  let rat = ratScale / scaleLevel * 100 + "%"
  let microbe = microbeScale / scaleLevel * 100 + "%"
  let planck = planckScale / scaleLevel * 100 + "%"

  // let earthStyles = {
  //   fontSize: earthScale + 'px',
  // }
    let appStyles = {
      display: 'flex',
      flexDirection: 'column',
    }

  return (
    <div className="App">
      <header className="App-header" style={appStyles}>
        <h4 className="type-percentage" id="earth">Earth: {earth}</h4>,
        <h4 className="type-percentage">Human: {human}</h4>ik,
        <h4 className="type-percentage">Rat: {rat}</h4>
        <h4 className="type-percentage">Microbe: {microbe}</h4>
        <h4 className="type-percentage">Planck: {planck}</h4>
      </header>
    </div>
  );
}

export default App;