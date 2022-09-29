// import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import First from './components/firstarea'
import Second from './components/secondarea'
import Third from './components/thirdarea'

function App() {
  return (
    <div>
      <Header />
      <First />
      <Second />
      <Third />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
