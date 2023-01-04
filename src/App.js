import './App.css';
import React from 'react';
import ErrandsForm from './Components/ErrandsForm/ErrandsForm';
import ErrandsList from './Components/ErrandsList/ErrandsList';
import Time from './Components/Time/Time';
import Date from './Components/Date/Date';


export default function App() {

  const [errandsItems, setErrandsItems] = React.useState({
    errandsList: [
      {
        NameOfErrands: 'Make Dinner',
        Duration: '1hr 30min',
        id: -2
      },
      {
        NameOfErrands: 'Wash The Dog',
        Duration: '45min',
        id: -1
      },
      {
        NameOfErrands: 'Do Laundry',
        Duration: '1hr',
        id: 0
      }
    ],
    nextId: 1
  });


  const addItem = (newItem) => {
    setErrandsItems(oldState => {
      const newState = {};
      newState.nextId = oldState.nextId + 1;
      newState.errandsList = [...oldState.errandsList];
      newItem.id = oldState.nextId.id;
      newState.errandsList.push(newItem);
      return newState;
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Errand App</h1>
        <h4><Date /> <Time /> </h4>
      </header>
      <main className='App-main'>
        <ErrandsForm addItem={addItem} />
        <ErrandsList errandsItems={errandsItems.errandsList} />
      </main>
    </div>
  );
}


