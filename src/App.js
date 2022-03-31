import './App.css';
import ContactCard from './Contacts/ContactCard';
import './Contacts/ContactCard.css';

function App() {
  return (
    <div className="App" class="container">
      <div class="row" id="topStrip">
        <div class="col">
          <i class="bi bi-envelope-paper-heart-fill"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-4" >
          <ContactCard />
        </div>
        <div class="col">
          current chat
        </div>
      </div>
    </div>
  );
}

export default App;
