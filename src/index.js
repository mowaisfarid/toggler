import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  const [value, setvalue] = React.useState(true)

  function cllik() {
    setvalue((preVal) => !preVal);
// gfdgfdgfdgfdg
  }
  return (
    <div className={(value === true) ? "dark" : "light"}>

      <div>
        The bulb is {(value === true) ? "Bright" : "Dark"}
      </div>
        <button onClick={cllik}>toggle</button>

    </div>
  )

}

ReactDOM.render(
  <Room />,
  document.querySelector('#root')
)