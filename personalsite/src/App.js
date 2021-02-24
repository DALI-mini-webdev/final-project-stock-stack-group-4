import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
  
      <DropdownButton id="dropdown-item-button" title="Add a Stock">
      <Dropdown.Item as="button">AAPL</Dropdown.Item>
      <Dropdown.Item as="button">NFLX</Dropdown.Item>
      <Dropdown.Item as="button">PNRA</Dropdown.Item>
</DropdownButton>


    </div>
  );
}

export default App;
