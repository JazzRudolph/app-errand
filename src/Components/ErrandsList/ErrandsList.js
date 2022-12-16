import React from "react";

export default function ErrandsList() {
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
                <tr>
                    <td>Grocery Shopping</td>
                    <td>1 hour</td>
                    <td>
                        <button>!</button>
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Walk the dog</td>
                    <td>20 minutes</td>
                    <td>
                        <button>!</button>
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>Do laundry</td>
                    <td>1 hour 30 minutes</td>
                    <td>
                        <button>!</button>
                    </td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}