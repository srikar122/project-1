import './Header.css';
import { House, Phone, Mail} from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="item brand">
        <House/>
        <span>Hyderabad Rentals</span>
      </div>
      <div className="item contact">
        <Phone/>
        <span>+91 9999999999</span>
      </div>
      <div className="item contact">
        <Mail/>
        <span>info@hyderabadrentals.com</span>
      </div>
    </header>
  );
}

export default Header;