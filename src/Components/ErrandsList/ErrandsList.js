import React from "react";
import './ErrandsList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'


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
            <td className={"limited-width " + (item.isCompleted ? "Complete" : "")} >
                {item.NameOfErrands}
            </td>
            <td className={"limited-width " + (item.isCompleted ? "Complete" : "")} >
                {item.Duration}
            </td>
            <td className="actionCollapse">
                <button className="action-button" onClick={() => deleteButtonClicked(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
                <button className="action-button" onClick={() => toggleButtonClicked(item.id)}>
                    {item.isCompleted ? <FontAwesomeIcon icon={faSquareMinus}></FontAwesomeIcon> : <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}  
                </button> 
                <button className="action-button" onClick={() => moveButtonClicked(item.id, true)}>
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
                </button>
                <button className="action-button" onClick={() => moveButtonClicked(item.id, false)}>
                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                </button>
            </td>
        </tr>
    ) 


    return (
        <table className="list">
            <thead>
                <tr>
                    <th className="listHead">
                        Name of errands
                    </th>
                    <th className="listHead">
                        Duration
                    </th>
                    <th className="listHead">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}