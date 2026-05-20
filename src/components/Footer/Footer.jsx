import { Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const openHour = 9;
  const closeHour = 18;
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();
  const isOpen = currentHour >= openHour && currentHour < closeHour && currentDay >= 1 && currentDay <= 5;

  const openElement = (
    <>
      <div className='message'>
        <Clock/> <span className='open' >We are open</span>
      </div>
      <div> contact: 123-456-7890</div>
    </>
  )

  const closedElement = (
    <>
      <div className='message'>
          <Clock/> <span className='closed'>
        We are closed.
        </span></div>
      <div> open hours are from 9 AM to 5 PM</div>
    </>
  )

  return (
    <footer className='footer'>
      {isOpen ? openElement : closedElement}
    </footer>
  );
}

export default Footer;
