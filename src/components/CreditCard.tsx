import React from 'react'
import CardLogo from './CardLogo'

const CreditCard = () => {
    return (
        <div className="creditcard__images">
            <div className="creditcard__images-back">
                <span className='creditcard__images-cvc'>000</span>
            </div>
            <div className="creditcard__images-front">
                <CardLogo />
                <span className='creditcard__images-number'>0000 0000 0000 0000</span>
                <div className="creditcard__details">
                    <span className='creditcard__details-name'>Julian Krochmal</span>
                    <span className='creditcard__details-expdate'>06/24</span>
                </div>
            </div>
        </div>
    )
}

export default CreditCard