import './App.css';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>A Bear of a Project</p>
      </header>
      <p className="App-body">Username:</p>
      
      <p className="App-body">Add a Stock:</p>

      
      
  
      <DropdownButton id="dropdown-item-button" title="Add a Stock">
      <Dropdown.Item as="button">AAPL</Dropdown.Item>
      <Dropdown.Item as="button">NFLX</Dropdown.Item>
      <Dropdown.Item as="button">PNRA</Dropdown.Item>
</DropdownButton>

    </div>
   
    );}
    

export default App;