import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FormComponent(props) {
    return (
        <div className="form-group">
        <Container>
            <Row>
                <div>
                Fill in your <b>monthly</b> spending in the following categories:
                </div>
            </Row>
            <form onSubmit={props.handleSubmit}>
                <Row>
                    <Col>
                        <label>Total: 
                            <input
                                className="form-control"
                                type="number"
                                name="total"
                                placeholder="Total"
                                value={props.data.total}
                                onChange={props.handleChange}/>
                        </label>
                        <br />
                        <label>Dining: 
                        <input
                            className="form-control"
                            type="number"
                            name="dining"
                            placeholder="Dining"
                            value={props.data.dining}
                            onChange={props.handleChange}/>
                        </label>
                        <br />
                        <label>Lodging (Travel):
                        <input
                            className="form-control"
                            type="number"
                            name="travelLodging"
                            placeholder="Lodging (Travel)"
                            value={props.data.travelLodging}
                            onChange={props.handleChange}/>
                        </label>
                        <br />
                        <label>Flights (Travel):
                        <input 
                            className="form-control"
                            type="number"
                            name="travelAir"
                            placeholder="Flights (Travel)"
                            value={props.data.travelAir}
                            onChange={props.handleChange}/>
                        </label>
                        <br />
                        <label>Other (Travel):
                        <input 
                            className="form-control"
                            type="number"
                            name="travelOther"
                            placeholder="Other Travel Expenses"
                            value={props.data.travelOther}
                            onChange={props.handleChange}/>
                        </label>
                        <div className="uncat">
                            Total Tavel: ${ props.data.travelLodging + props.data.travelAir
                                + props.data.travelOther}
                        </div>
                    </Col>
                    <Col>
                        <label>Grocery: 
                        <input 
                            className="form-control"
                            type="number"
                            name="grocery"
                            placeholder="Grocery"
                            value={props.data.grocery}
                            onChange={props.handleChange}/>
                        </label>
                        <br />
                        <label>Online: 
                        <input 
                            className="form-control"
                            name="online"
                            type="number"
                            value={props.data.online}
                            placeholder="Online"
                            onChange={props.handleChange}/>
                        </label>
                        <br />
                        <label>Gas: 
                        <input 
                            className="form-control"
                            type="number"
                            placeholder="Gas"
                            name="gas"
                            onChange={props.handleChange}
                            value={props.data.gas}/>
                            
                </label>
                <br />
                <label>Entertainment: 
                <input 
                className="form-control"
                    type="number"
                    name="entertainment"
                    placeholder="Entertainment"
                    value={props.data.entertainment}
                    onChange={props.handleChange}/>
                </label>
                <br />
                <label>Retail: 
                <input 
                className="form-control"
                    type="number"
                    name="retail"
                    placeholder="Retail"
                    value={props.data.retail}
                    onChange={props.handleChange}/>
                </label>
                <br />
                    <div className="uncat">
                        Uncategorized: ${props.data.total - props.data.dining 
                                - props.data.travelLodging - props.data.travelAir
                                - props.data.travelOther - props.data.grocery 
                                - props.data.online - props.data.gas 
                                - props.data.entertainment - props.data.retail}
                    </div>
                </Col>
            </Row>
            <label>
                <input 
                    type="checkbox"
                    name="includeFees"
                    value={props.data.includeFees}
                    onChange={props.handleChange}/> Exclude Annual Fees
            </label>
            <br />
            <select 
                    value={props.data.timeHorizon} 
                    name="timeHorizon" 
                    onChange={props.handleChange}
                    >
                    <option value={1}>1 Year</option>
                    <option value={3}>3 Years</option>
                    <option value={5}>5 Years</option>
                    <option value={10}>10 Years</option>
            </select>
            
                <br />
                <br />
                
                <button>Sort Credit Cards!</button>
            </form>
            </Container>
        </div>
    )
    
}

export default FormComponent