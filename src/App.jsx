
import './App.css';
import SecondComponent from './components/SecondComponent';




function App() {

  const x = 30;
  const y = 10;

  return (
    <div className="App">
      Hi All {y > x ? x + y : x - y}
      <SecondComponent
        nameOfComponent='component12'
      >
        <SecondComponent
          nameOfComponent='component13'
        />
      </SecondComponent>
    </div>
  );
}

export default App;
