export default function Vehicle(props) {
  return <div className="vehicle">
    {vehicle === 'car' && '🚗'}
    {vehicle === 'truck' && '🚚'}
    {vehicle === 'bus' && '🚌'}
    {vehicle === 'motorcycle' && '🏍️'}
  </div>;
}