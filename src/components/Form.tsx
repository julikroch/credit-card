import React from 'react'

const Form = ({ setCard }: any) => {
    return (
        <div className='creditcard__form'>
            <div className='creditcard__form-cardholder'>
                <label className='creditcard__form-label' htmlFor="cardHolder">Cardholder Name</label>
                <input type="text" name="cardHolder" id="cardHolder" placeholder='Jane Doe' />
            </div>
            <div className='creditcard__form-number'>
                <label className='creditcard__form-label' htmlFor="cardNumber">Card Number</label>
                <input type="number" name="cardNumber" id="cardNumber" maxLength={16} placeholder='0000 0000 0000 0000' />
            </div>

            <div className="creditcard__form-details">
                <div className="creditcard__form-exp-date">
                    <label className='creditcard__form-label' htmlFor="cardNumber">Exp. date (MM/YY)</label>
                    <div className="creditcard__form-date-inputs">
                        <input type="number" name="expMonth" id="expMonth" maxLength={2} placeholder='MM' />
                        <input type="number" name="expYear" id="expYear" maxLength={2} placeholder='YY' />
                    </div>
                </div>
                <div className="creditcard__form-cvc">
                    <label className='creditcard__form-label' htmlFor="cardCvc">CVC</label>
                    <input type="number" name="cardCvc" id="cardCvc" maxLength={3} placeholder='123' />
                </div>
            </div>

            <button type="submit" className='creditcard__form-btn'>Confirm</button>
        </div>
    )
}

export default Form