import './ContactCard.css';

function ContactCard() {
  return (
    <div className="ContactCard" class="container">
      <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Content for list item
          </div>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
      </ol>
    </div>
  );
}

export default ContactCard;
