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
        isCompleted: false,
        id: 1
      },
      {
        NameOfErrands: 'Wash The Dog',
        Duration: '45min',
        isCompleted: false,
        id: 2
      },
      {
        NameOfErrands: 'Do Laundry',
        Duration: '1hr',
        isCompleted: false,
        id: 3
      }
    ],
    nextId: 4
  });

  function findItemIndexById(items, itemId) {
    return items.findIndex(errand => String(errand.id) === String(itemId));
  }

  const moveItem = (itemId, isUp) => {
    const newErrandsItems = [...errandsItems.errandsList];
    const nextId = errandsItems.nextId;
    const itemIndex = findItemIndexById(newErrandsItems, itemId);
    const otherIndex = isUp ? itemIndex - 1 : itemIndex + 1;
    if (itemIndex === -1 || isUp ? itemIndex <= 0 : itemIndex >= newErrandsItems.length - 1) {
      return;
    }
    let swap = newErrandsItems[itemIndex];
    newErrandsItems[itemIndex] = newErrandsItems[otherIndex];
    newErrandsItems[otherIndex] = swap;

    setErrandsItems({
      nextId,
      errandsList: newErrandsItems 
    });

  }


  const addItem = (newItem) => {
    setErrandsItems(oldState => {
      const newState = {};
      newState.nextId = oldState.nextId + 1;
      newState.errandsList = [...oldState.errandsList];
      newItem.id = oldState.nextId;
      newItem.isCompleted = false;
      newState.errandsList.push(newItem);
      return newState;
    });
  }


  const deleteItem = (itemId) => {
    setErrandsItems(oldErrandsItems => {
      const { errandsList, nextId } = oldErrandsItems;
      const newErrandsList = errandsList.filter(item => item.id !== itemId);
      return {
        errandsList: newErrandsList,
        nextId
      }
    });
  }

  const toggleItem = (itemId) => {
    setErrandsItems(oldErrandsItems => {
      const { errandsList, nextId } = oldErrandsItems;
      const newErrandsList = errandsList.map(item => {
        item = {...item}
        if (item.id === itemId) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
        return {
        errandsList: newErrandsList,
        nextId
      }
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
        <ErrandsList
          errandsItems={errandsItems.errandsList}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          moveItem={moveItem}
        />
      </main>
    </div>
  );
}


