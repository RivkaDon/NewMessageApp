import './App.css';
import './Contacts/ContactCard.css';
import ContactList from './Contacts/Contacts';
import AddContact from './Contacts/AddContact';

function App() {
  return (
    <div className="App container">
      <div className="row" id="topStrip">
        <div className="col-4">
          <i className="bi bi-envelope-paper-heart-fill"></i>
          <i id='addButton' className="bi bi-person-plus"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-4" >
          {ContactList}
        </div>
        <div className="col">
          current chat
        </div>
      </div>
    </div>
  );
}

export default App;
