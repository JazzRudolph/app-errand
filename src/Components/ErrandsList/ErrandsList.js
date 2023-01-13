import React from "react";
import './ErrandsList.css'

export default function ErrandsList(props) {
    const errandsItems = props.errandsItems;

    const deleteButtonClicked = (event) => {

        props.deleteItem(Number(event.target.dataset.id));
    }

    const toggleButtonClicked = (event) => {
        props.toggleItem(Number(event.target.dataset.id));
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
                <button onClick={deleteButtonClicked} data-id={(item.id)}>
                    Delete
                </button>
                <button onClick={toggleButtonClicked} data-id={(item.id)}>
                    {item.isCompleted ? "Clear" : "Complete"}  
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