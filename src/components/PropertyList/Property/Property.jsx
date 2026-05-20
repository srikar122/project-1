import PropertyImage from './PropertyImage/PropertyImage';
import PropertyTypeLabel from './PropertyImage/PropertyTypeLabel/PropertyTypeLabel';
import IconWithText from './PropertyImage/IconWithText/IconWithText'
import PropertyAttribute from './PropertyAttributes/PropertyAttributes'
import './Property.css';

const Property = ({ id, type, bedrooms, bathrooms, surface, price, image, available, address, date }) => {
  return (
    <div className='property'>
        <PropertyImage
            image={image}
            available={available} 
        >
          <PropertyTypeLabel type={type} />
        {
          !available && <IconWithText available = {available} />
        }  
        </PropertyImage>
        <PropertyAttribute text = {address} bold/>
        <PropertyAttribute text = {`$${price.toLocaleString()}`} color="green" />
        <PropertyAttribute text = {`available from ${date}`} />
    </div>
  );
}

export default Property;