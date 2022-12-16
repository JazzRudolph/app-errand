import './App.css';
import ErrandsList from './Components/ErrandsList/ErrandsList';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Errand App</h1>
      </header>
      <main className='App-main'>
        <section>Errand Form</section>
        <ErrandsList />
      </main>
    </div>
  );
}


