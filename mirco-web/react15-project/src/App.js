import react from 'react'
import './App.css';
import BasicMap from "./router/router";

class App extends react.Component {
  render() {
    return (
      <div className={"header"}>
        <BasicMap />
      </div>
    )
  }
}

export default App;
