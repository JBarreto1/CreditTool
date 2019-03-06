import React from "react"
import FormComponent from "./CCFormComponent"
import CardView from './CardView'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CCForm extends React.Component{
    constructor(){
        super()
        this.state = {
            dining: 0,
            travelLodging: 0,
            travelAir: 0,
            travelOther: 0,
            grocery: 0,
            online: 0,
            gas: 0,
            entertainment: 0,
            retail: 0,
            includeFees: false,
            timeHorizon: 1,
            total: 0
        }
        
    
      
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        if (type === "checkbox") {
            this.setState({
                [name]: checked
            })
        } else {
            this.setState({
                [name]: value
            })
        }  
    }


    handleSubmit(){
    }

    render() {
        return (
            <div ref={this.myRef}>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <FormComponent
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                data={this.state}
                            />
                        </Col>
                        <Col sm={8}>
                            <CardView data={this.state}/>
                        </Col>
                    </Row>
                </Container>
            </div>
             
        )
    }
}

export default CCForm