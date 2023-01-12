import React from "react";

export default function ErrandsList(props) {
    const errandsItems = props.errandsItems;

    const deleteButtonClicked = (event) => {
        console.log('data-id', event.target.dataset.id, Number(event.target.dataset.id));
        props.deleteItem(Number(event.target.dataset.id));
    }

    const tableRows = errandsItems.map(item =>
        <tr key={item.id}>
            <td>{item.NameOfErrands}</td>
            <td>{item.Duration}</td>
            <td><button onClick={deleteButtonClicked} data-id={(item.id)}>DELETE</button></td>
        </tr>
    )


    return (
        <table>
            <thead>
                <tr>
                    <th>Name of errands</th>
                    <th>Duration</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}