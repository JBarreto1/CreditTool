import React from "react"
//import Card from 'react-bootstrap/Card'

function CreditCard(props) {
        return(
            <div className="credit-card">
                <h3 className="credit-title">
                    {props.rank + 1} {props.cardInfo.cardName}
                </h3>
                <p>
                Estimated Dollar Value: {props.cardInfo.totalPoints} <br />Annual Fee: {props.cardInfo.annualFee}
                </p>
            </div>
        )
}

export default CreditCard