import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TemparetureAndDetails from './components/TemparetureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';

function App() {
  return (
    <div className="App">
      <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400'>
        <TopButtons />
        <Inputs />
        
        <TimeAndLocation />
        
        <TemparetureAndDetails />
        
        <Forecast title="hourly forecase" />
        <Forecast  title="daily forecase"/>
      </div>
    </div>
  );
}

export default App;
