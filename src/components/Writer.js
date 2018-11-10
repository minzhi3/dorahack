import React, { Component } from 'react'
import { Form, Icon, Card, Col, Row, Layout, Input, Button } from 'antd';

const { TextArea } = Input;

class Writer extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    newPassage() {

    }
    renderContent() {
        const { passage, lastPaidDate, balance } = this.state;
    
        return (
            <div>
                <Row gutter={16}>
                    <Col span={16}>
                        <TextArea placeholder="Autosize height based on content lines" autosize />
                            <div style={{ margin: '24px 0' }} />
                        <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 10, maxRows: 20 }} />
                    </Col>
                </Row>

              <Button
                type="primary"
                icon="bank"
                onClick={this.newPassage}
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
            <h2>Writer</h2>
            {this.renderContent()}
          </Layout >
        );
    }
}
export default Writer;
