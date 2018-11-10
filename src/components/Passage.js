import React, { Component } from 'react'
import { Card, Col, Row, Layout, Alert, message, Button } from 'antd';
import axios from 'axios'

class Passage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentDidMount() {
      const { account, payroll } = this.props;
      let config = {
        headers : {
            'Content-Type':'application/json;charset=UTF-8'
        },
    };
      axios.post('http://localhost:8091/api/1/getDidInfo', JSON.stringify({
        "txIds": [
          "6A34F0F0A6D5F9F4EFC481587143CFC0100811911CD67B3DA98663FB609A8493"
        ],
        "key": "boarticle"
      }), config)
      .then(response => {
        this.setState({
          passage: response.data.result.data
        });
      });
    }

    renderContent() {
        const { passage} = this.state;

        let _title = null;
        let _detail = null;

        if (passage){
          const {title, detail} = passage;
          _title = title;
          _detail = detail;
        }
        return (
            <div>
              <Row gutter={16}>
                <Col span={16}>
                  <Card title={_title}>{_detail}</Card>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={16}>
                  <Card title="card2">card2</Card>
                </Col>
              </Row>
              <Button
                type="primary"
                icon="bank"
                //onClick={this.hoge}
              >
                button2
              </Button>
            </div>
          );
    }
    render() {
        const { account, payroll, web3 } = this.props;
    
        return (
          <Layout style={{ padding: '0 24px', background: '#fff' }}>
            <h2>Passage</h2>
            {this.renderContent()}
          </Layout >
        );
    }
}
export default Passage
