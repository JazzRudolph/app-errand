import React from "react";

export default function ErrandsList(props) {
    const errandsItems = props.errandsItems;
    const tableRows = errandsItems.map(item =>
        <tr key={item.id}>
            <td>{item.NameOfErrands}</td>
            <td>{item.Duration}</td>
            <td><button>DELETE</button></td>
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