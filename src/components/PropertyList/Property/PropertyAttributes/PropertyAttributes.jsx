import './PropertyAttributes.css';

const PropertyAttributes = ({ text, color = 'black', bold }) => {
  const style = {
    color: color,
    fontWeight: bold ? 'bold' : 'normal'
  };
  return (
    <div className='property-attribute' style={style}>{text}</div>
  )
}

export default PropertyAttributes