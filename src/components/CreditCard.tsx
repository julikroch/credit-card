import React from 'react'
import { CardI } from '../App'
import CardLogo from './CardLogo'

const CreditCard = ({ cardNumber, cardCvc, cardHolder, expMonth, expYear }: CardI) => {
    return (
        <div className="creditcard__images">
            <div className="creditcard__images-back">
                <span className='creditcard__images-cvc'>{cardCvc}</span>
            </div>
            <div className="creditcard__images-front">
                <CardLogo />
                <span className='creditcard__images-number'>{cardNumber}</span>
                <div className="creditcard__details">
                    <span className='creditcard__details-name'>{cardHolder}</span>
                    <span className='creditcard__details-expdate'>{expMonth}/{expYear}</span>
                </div>
            </div>
        </div>
    )
}

export default CreditCard