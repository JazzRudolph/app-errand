import React from "react";
import './ErrandsList.css'

export default function ErrandsList(props) {
    const errandsItems = props.errandsItems;

    const deleteButtonClicked = (itemId) => {
        props.deleteItem(itemId);
    }

    const toggleButtonClicked = (itemId) => {
        props.toggleItem(itemId);
    }

    const moveButtonClicked = (itemId, isUp) => {
        props.moveItem(itemId, isUp);
    }

    const tableRows = errandsItems.map(item =>
        <tr key={item.id}>
            <td className={item.isCompleted ? "Complete" : ""} >
                {item.NameOfErrands}
            </td>
            <td className={item.isCompleted ? "Complete" : ""} >
                {item.Duration}
            </td>
            <td>
                <button onClick={() => deleteButtonClicked(item.id)}>
                    Delete
                </button>
                <button onClick={() => toggleButtonClicked(item.id)}>
                    {item.isCompleted ? "Clear" : "Complete"}  
                </button> 
                <button onClick={() => moveButtonClicked(item.id, false)}>
                    UP
                </button>
                <button onClick={() => moveButtonClicked(item.id, false)}>
                    DOWN
                </button>
            </td>
        </tr>
    ) 


    return (
        <table>
            <thead>
                <tr>
                    <th>Name of errands</th>
                    <th>Duration</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}