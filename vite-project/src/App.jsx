import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import List from './components/List/List';
import './components/List/List.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <List />
      </div>
    </div>
  );
}

export default App;