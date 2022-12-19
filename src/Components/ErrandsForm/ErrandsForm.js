import React from "react";

export default function ErrandsForm() {
    return (
        <form action="#" method="GET">
            <div>
                <label>
                    Errand:
                    <input type="text" name="activity" />
                </label>
            </div>

            <div>
                <label>
                    Duration:
                    <input type="text" name="duration" />
                </label>
            </div>
            <button type='submit'>
                Add
            </button>
        </form>
    );
}