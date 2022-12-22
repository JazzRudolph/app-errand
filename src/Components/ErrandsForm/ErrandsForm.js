import React from "react";

export default function ErrandsForm() {
    const errandsInput = React.useRef();
    const durationInput = React.useRef();


    const handleSubmit = (event) => {
        event.preventDefault();

        const errandsValue = errandsInput.current.value;
        const durationValue = durationInput.current.value;

        console.log(errandsValue, durationValue);

        errandsInput.current.value = '';
        durationInput.current.value = '';
    }



    return (
        <form action="#" method="GET" onSubmit={handleSubmit}>
            <div>
                <label>
                    Errand:
                    <input
                        type="text"
                        name="activity"
                        ref={errandsInput} />
                </label>
            </div>

            <div>
                <label>
                    Duration:
                    <input
                        type="text"
                        name="duration"
                        ref={durationInput} />
                </label>
            </div>
            <button type='submit'>
                Add 
            </button>
        </form>
    );
}