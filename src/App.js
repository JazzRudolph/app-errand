import './App.css';
import ErrandsForm from './Components/ErrandsForm/ErrandsForm';
import ErrandsList from './Components/ErrandsList/ErrandsList';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Errand App</h1>
      </header>
      <main className='App-main'>
        <ErrandsForm />
        <ErrandsList />
      </main>
    </div>
  );
}


