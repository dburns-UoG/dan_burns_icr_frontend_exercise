import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import data from './data.json';
import BarChartByYear from './barChartByYear';
import './App.css';

function IndexPage() {
    return (
        <Row className="index">
            {
                data.map((item) => {
                    return (
                        <Col key={item.short_name} >
                            <Link to={item.id}>
                                <p>{item.short_name}</p>
                                {getImageTag(item)}
                            </Link>
                        </Col>
                    );
                })
            }
        </Row>
    );
}

function GenePage({ match }) {
    window.scrollTo(0, 0);
    let dataItem = data.find((item) => item.id === match.params.gene);

    return (
        <div className="gene">
            <Row>
                <h2>{dataItem.short_name}</h2>
            </Row>
            <Row>
                <Col>
                    {getImageTag(dataItem)}
                    <Row>
                        <Col><p><em>Full name:</em></p></Col>
                        <Col><p>{dataItem.full_name}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><em>Family:</em></p></Col>
                        <Col><p>{dataItem.family}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><em>Gene ID:</em></p></Col>
                        <Col><p>{dataItem.id}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><em>No. of structure:</em></p></Col>
                        <Col><p>{dataItem.num_structures}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><em>No. of compounds:</em></p></Col>
                        <Col><p>{dataItem.num_compounds}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><em>Is druggable?</em></p></Col>
                        <Col><p>{dataItem.features.is_druggable.toString()}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><em>Is enzyme?</em></p></Col>
                        <Col><p>{dataItem.features.is_enzyme.toString()}</p></Col>
                    </Row>
                </Col>
                <Col>
                    <p>{dataItem.description}</p>
                </Col>
            </Row>
            <Row className="publicationsHistory">
                <BarChartByYear class="publicationsHistory" data={dataItem.publications} yAxisLabel="No. of publications" />
            </Row>
        </div>
    );
}

function getImageTag(dataItem) {
    return <img src={dataItem.image} alt={"Structure representative of " + dataItem.short_name} />
}

function App() {

    data.sort((a, b) => a.short_name.localeCompare(b.short_name));

    return (
        <Router>
            <header>
                <Link to="/">Return to Index</Link>
            </header>

            <Route path="/" exact component={IndexPage} />
            <Route path="/:gene" component={GenePage} />
        </Router>
    );
}

export default App;
