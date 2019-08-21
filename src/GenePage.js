import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BarChartByYear from './barChartByYear';
import { getImageTag } from './ImageDisplayHelper';

class GenePage extends Component {
    render() {
        window.scrollTo(0, 0);
        let dataItem = this.props.location.state.data.find((item) => item.id === this.props.match.params.geneId);

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
}

export default GenePage;