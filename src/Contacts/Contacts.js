import ContactCard from './ContactCard';
import HarryPotterPic from './harryPotter.jpg'
import QueenElisabethPic from './queenElisabeth.jpg'
import DonaldTrumpPic from './donaldTrump.jpg'

const contacts = [{img: HarryPotterPic, name: 'Harry Potter', lastMessage: 'magical!', time: "1 minute ago" },
{img: QueenElisabethPic, name: 'Queen Elisabeth', lastMessage: 'come for tea?', time: "2 minutes ago" },
{img: DonaldTrumpPic, name: 'Donald Trump', lastMessage: 'make America great again', time: "7 minutes ago" }]

const ContactList = contacts.map((contact, key) => {
    return <ContactCard key={key} name={contact.name} img={contact.img} lastMessage={contact.lastMessage} time={contact.time}/>
  });
export default ContactList;