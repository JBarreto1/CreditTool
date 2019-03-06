import React from "react"
import CreditCard from "./CreditCard"
import categories from "../cardData/categories"
import cardData from "../cardData/cardData"

class cardView extends React.Component{
    constructor(){
        super()
        
        this.calcPoints = this.calcPoints.bind(this)
        this.calcAllCards = this.calcAllCards.bind(this)
    }

    calcAllCards(timeHorizon){
        for (let card in cardData){
            let calc = this.calcPoints(cardData[card], timeHorizon)
            cardData[card].totalPoints = calc
        }
    }

    calcPoints(card, timeHorizon){
        let monthlyTotal = 0
        for (let cats in card) {
            //Check that the property you're looking at is actually a category and not something else (i.e. is in the categories array)
            if (categories.indexOf(cats) > -1){
                let points = Number(card[cats]) * Number(this.props.data[cats])
                monthlyTotal += points
            }
        }
        let total = 0
        total = monthlyTotal * 12 * timeHorizon
        let bonus = Number(card.bonus)
        //Discover noFee cards get double points in first year
        if (card.bonusType === "variable"){
            bonus = monthlyTotal * 12
        }
        //add card bonus
        total += bonus
        return total
    }

    render(){
        //call function to calculate card points
        this.calcAllCards(this.props.data.timeHorizon)
        console.log(this.props.data.timeHorizon)
        //sort cards by expected points
        cardData.sort((a,b) => {return b.totalPoints - a.totalPoints})
        let filteredData = cardData
        //filter cards for annual fee
        if (this.props.data.includeFees) {
            filteredData = cardData.filter(value => {
                return value.hasAnnualFee === "0"
            })
        }
        const listLength = 10
        const creditCards = filteredData.slice(0,listLength).map(card => <CreditCard 
            key={card.id} 
            cardInfo={card}
            rank={filteredData.indexOf(card)}
            />
        )
        return(
            <div>
                {creditCards}
            </div>
            )
        }
}

export default cardView