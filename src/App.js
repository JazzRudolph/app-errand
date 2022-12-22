import './App.css';
import React from 'react';
import ErrandsForm from './Components/ErrandsForm/ErrandsForm';
import ErrandsList from './Components/ErrandsList/ErrandsList';
import Time from './Components/Time/Time';
import Date from './Components/Date/Date';


export default function App() {

  const [errandsItems, setErrandsItems] = React.useState([
    {
      NameOfErrands: 'Make Dinner',
      Duration: '1hr 30min',
      id: 1
    },
    {
      NameOfErrands: 'Wash The Dog',
      Duration: '45min',
      id: 2
    },
    {
      NameOfErrands: 'Do Laundry',
      Duration: '1hr/ 1:41:27',
      id: 3
    }
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Errand App</h1>
        <h4><Date /> <Time /> </h4>
      </header>
      <main className='App-main'>
        <ErrandsForm />
        <ErrandsList errandsItems={errandsItems} />
      </main>
    </div>
  );
}


