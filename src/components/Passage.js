import React, { Component } from 'react'
import { Card, Col, Row, Layout, Alert, message, Button } from 'antd';

class Passage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    renderContent() {
        const { passage} = this.state;
    
        return (
            <div>
              <Row gutter={16}>
                <Col span={16}>
                  <Card title="card1">card1</Card>
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
