import './PropertyImage.css';


const PropertyImage = ({ image, available, children }) => {
  return (
    <div style={{
      backgroundImage : `url(${image})`,
      backgroundSize : 'cover',
      backgroundPosition : 'center',
      opacity : `${available ? 1 : 0.5}`
    }} className='property-image'>
        {children}
    </div>
  )
}

export default PropertyImage