import { useState } from "react";
import { CardI } from "../App";

const Form = ({ setCard, card }: any) => {

    const [errorMsg, setErrorMsg] = useState<CardI>({
        cardHolder: false,
        cardNumber: false,
        expMonth: false,
        expYear: false,
        cardCvc: false
    })

    const handleChange = (e: any) => {

        if (e.target.name !== 'cardHolder') {
            let isNum = /^\d+$/.test(e.target.value);

            setErrorMsg({
                ...errorMsg,
                [e.target.name]: !isNum ? true : false
            })
        }

        setCard({
            ...card,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='creditcard__form'>
            <div className='creditcard__form-cardholder'>
                <label className='creditcard__form-label' htmlFor="cardHolder">Cardholder Name</label>
                <input
                    type="text"
                    name="cardHolder"
                    id="cardHolder"
                    placeholder='Jane Doe'
                    onChange={handleChange}
                />
            </div>
            <div className='creditcard__form-number'>
                <label className='creditcard__form-label' htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    maxLength={16}
                    placeholder='0000 0000 0000 0000'
                    onChange={handleChange}
                />
            </div>

            <div className="creditcard__form-details">
                <div className="creditcard__form-exp-date">
                    <label className='creditcard__form-label' htmlFor="cardNumber">Exp. date (MM/YY)</label>
                    <div className="creditcard__form-date-inputs">
                        <input
                            type="text"
                            name="expMonth"
                            id="expMonth"
                            maxLength={2}
                            placeholder='MM'
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="expYear"
                            id="expYear"
                            maxLength={2}
                            placeholder='YY'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="creditcard__form-cvc">
                    <label className='creditcard__form-label' htmlFor="cardCvc">CVC</label>
                    <input
                        type="text"
                        name="cardCvc"
                        id="cardCvc"
                        maxLength={3}
                        placeholder='123'
                        onChange={handleChange}
                    />
                </div>
            </div>

            <button type="submit" className='creditcard__form-btn'>Confirm</button>
        </div>
    )
}

export default Form