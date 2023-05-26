import './App.css';
import React, {useState, useEffect} from 'react';
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

  useEffect(() => {
    fetch('https://hu4cqw-8080.csb.app/api/errand')
      .then(x => x.json())
      .then(response => {
        setErrandsList(response);
      });
  }, []);

  function findItemIndexById(items, itemId) {
    return items.findIndex(errand => String(errand.id) === String(itemId));
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

  const deleteAllCompletedItems = () => {
    setErrandsItems(oldErrandsItems => {
      const { errandsList, nextId } = oldErrandsItems;
      const newErrandsList = errandsList.filter(item => !item.isCompleted);
      return {
        errandsList: newErrandsList,
        nextId
      }
    });
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header'>Today Will Be Productive</h1>
        <h4><Date /> <Time /> </h4>
      </header>
      <main className='App-main'>
        <blockquote>
          To be productive you'll want to get the most out of your time, you need to be efficient and effective. Being productive isnt working long hours or frantically typing away at your computer for hours and hours each day.
        </blockquote>
        <ErrandsForm addItem={addItem} />
        <ErrandsList
          errandsItems={errandsItems.errandsList}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          moveItem={moveItem}
        />
        <button className='deleteAll' onClick={deleteAllCompletedItems}>Delete Completed Errands</button>
      </main>
    </div>
  );
}


