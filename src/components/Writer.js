import React, { Component } from 'react'
import { Form, Icon, Col, Row, Layout, Input, Button } from 'antd';
import axios from 'axios'

const { TextArea } = Input;

class Writer extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    newPassage = (e) => {
      e.preventDefault();
      const {title, detail} = this.state;
      if (!title || !detail) return;
      let config = {
        headers : {
            'Content-Type':'application/json;charset=UTF-8'
        },
      };
      const dateTime = Date.now();
      const timestamp = Math.floor(dateTime / 1000);
      axios.post('http://localhost:8091/api/1/setDidInfo', JSON.stringify({
        "privateKey":"3476CC4858D2C7EBA3C7C25DB788EE112FD6C7D72A2B39746E482212E64B9870",
        "settings":{
            "privateKey":"3DAD971B50498816D6D47A17120989CA3EAB265582AE6099BE03650E2DBB232C",
            "info":{
                "boarticle":{
                    "title":title,
                    "detail":detail,
                    "date":timestamp,
                    "next":"9ADBAD8857DBB4F060417BAFFDBF3C6565E6C18FA59CF109730851EE345F2684"
                }
            }
        }
      }), config)
      .then(response => {
        alert(JSON.stringify(response));
      });
    }

    renderContent() {
        const { passage, lastPaidDate, balance } = this.state;
        const FormItem = Form.Item;
        return (
              <Form onSubmit={this.newPassage}>

              <Row gutter={16}>
                    <Col span={16}>
                      <FormItem>
                        <TextArea placeholder="title" 
                        onChange={e => this.setState({title: e.target.value})} autosize 
                        />
                      </FormItem>
                      <FormItem>
                        <TextArea placeholder="detail" 
                        onChange={e => this.setState({detail: e.target.value})} 
                        autosize={{ minRows: 10, maxRows: 20 }} 
                        /> 
                      </FormItem>
                    </Col>
                </Row>
                <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
                </FormItem>

              </Form>
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
