import Player from './components/Player.jsx';
import TimerCahallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerCahallenge title="Easy" targetTime={1}/>
        <TimerCahallenge title="Not easy" targetTime={5}/>
        <TimerCahallenge title="Getting tough" targetTime={10}/>
        <TimerCahallenge title="Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
