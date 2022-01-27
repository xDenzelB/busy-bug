import './App.css';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';

function App() {
  const [lightcolor, setLightColor] = useState('red');
  const [lizardSize, setLizardSize] = useState(10); 
  const [alienSize, setAlienSize] = useState(10); 
  const [traffic, setTraffic] = useState(['car', 'truck']);

  return (
    <h1>Welcome</h1>
    <div className="App">
      <div className="fight">
        <div className="monster">
          <img src="alien.png" width={10 * alienSize} />
          <div className='buttons'>
            <button onClick={setAlienSize(alienSize + 1)}>Oh no! The alien is gobblin up all the electricity!</button>
            <button onClick={setLizardSize(lizardSize - 1)}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        <div className="monster">
          <img src="lizard.png" width={10 * lizardSize} />
          <div className="buttons">
            <button onClick={() => setLizardSize(lizardSize + 1)}>Yegads! The lizard is ramping up to its final form!</button>
            <button onClick={() => setAlienSize(100)}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      <TrafficLight color={lightColor} />
      <div className="buttons">
        <button onClick={() => setLightColor('red')}>Red</button>
        <button onClick={setLightColor('yellow')}>Yellow</button>
        <button onClick={() => setLightColor('green')}>Green</button>
      </div>
      <VehicleList vehicles={traffic} />
      <div className='buttons'>
        <button onClick={() => setTraffic(['car'])}>Car</button>
        <button onClick={() => setTraffic([...traffic, 'bus'])}>Bus</button>
        <button onClick={() => setTraffic(['truck'])}>Truck</button>
        <button onClick={() => setTraffic(['motorcycle'])}>Motorcycle</button>
      </div>
  
    </div>
  );
}
