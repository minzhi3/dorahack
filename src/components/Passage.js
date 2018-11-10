import React, { Component } from 'react'
import { Card, Col, Row, Layout, List, message, Button } from 'antd';
import axios from 'axios'

class Passage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tx: props.tx
      };
    }

    componentDidMount() {
      const { tx } = this.props;
      if (!tx)
        return;
      let config = {
        headers : {
            'Content-Type':'application/json;charset=UTF-8'
        },
      };
      axios.post('http://localhost:8091/api/1/getDidInfo', JSON.stringify({
        "txIds": [
          tx
        ],
        "key": "boarticle"
      }), config)
      .then(response => {
        if (response.data.result.data)
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
          return (
            <List.Item
            key={this.props.tx}
            extra={<img width={272} alt="logo" src="/elaq.png" />}
            >
            <List.Item.Meta
              title={_title}
              description={_detail}
            />
            </List.Item>

            );
        }else
        return null;

    }
    render() {
        const { account, payroll, web3 } = this.props;
    
        return this.renderContent()
    }
}
export default Passage
