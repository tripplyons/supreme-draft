import logo from './logo.svg';
import './App.css';
import Simulator from './hoc/Simulator/Simulator.js';
import Deckbuilder from './hoc/Deckbuilder/Deckbuilder.js';
import testPool from './examplePool.js'
import Menubar from './components/Menubar/Menubar.js';

console.log(testPool)

function App() {
  // <Deckbuilder cards={testPool} />
  // return  <div className="App"><Simulator /></div>
  return (
    <div className="App">
      <Menubar />
      <Simulator />
    </div>
  );
}

export default App;
