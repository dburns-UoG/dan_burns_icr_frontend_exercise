import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom";
import { getImageTag } from './ImageDisplayHelper';

class IndexPage extends Component {
    state = { data: [] }

    componentDidMount() {
        fetch('https://dburns-UoG.github.io/dan_burns_icr_frontend_exercise/data.json')
            .then((response) => response.json())
            .then((data) => {
                data.sort((a, b) => a.short_name.localeCompare(b.short_name));
                this.setState({
                    data: data
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Row className="index">
                {
                    this.state.data.map((item) => {
                        return (
                            <Col key={item.short_name} >
                                <Link to={{
                                    pathname: item.id,
                                    state: {
                                        data: this.state.data
                                    }
                                }}>
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
}

export default IndexPage;