import './App.css';
import ErrandsForm from './Components/ErrandsForm/ErrandsForm';
import ErrandsList from './Components/ErrandsList/ErrandsList';
import Time from './Components/Time/Time';
import Date from './Components/Date/Date'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Errand App</h1>
        <h4><Date /> <Time /> </h4>
      </header>
      <main className='App-main'>
        <ErrandsForm />
        <ErrandsList />
      </main>
    </div>
  );
}


