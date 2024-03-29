import React from "react";
import './ErrandsForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
            <div className="inputField">
                <label>
                    Errand:
                    <input
                    className="input"
                        type="text"
                        name="activity"
                        ref={errandsInput} />
                </label>
            </div>

            <div className="inputField">
                <label>
                    Duration:
                    <input
                    className="input"
                        type="text"
                        name="duration"
                        ref={durationInput} />
                </label>
            </div>
            <button
                className="addButton"
                type='submit'>
                <FontAwesomeIcon icon={faPlus}>
                </FontAwesomeIcon>
            </button>
            <p className= "error-message">{errorMessage}</p>
        </form>
    );
}