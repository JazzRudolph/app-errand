import React from "react";
import './ErrandsForm.css';

export default function ErrandsForm(props) {
    const [errorMessage, setErrorMessage] = React.useState('');
    const errandsInput = React.useRef();
    const durationInput = React.useRef();



    const handleSubmit = (event) => {
        event.preventDefault();

        const errandsValue = errandsInput.current.value.trim();
        const durationValue = durationInput.current.value.trim();

        if (errandsValue.length > 0 && durationValue.length > 0) {
            setErrorMessage('');
            console.log(errandsValue, durationValue);
            props.addItem({
                NameOfErrands: errandsValue,
                Duration: durationValue
            })

            errandsInput.current.value = '';
            durationInput.current.value = '';
        } else {
            setErrorMessage('Please Fill in Blanks!');
        }

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
            <p className= "error-message">{errorMessage}</p>
        </form>
    );
}