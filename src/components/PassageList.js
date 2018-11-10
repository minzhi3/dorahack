import React, { Component } from 'react'
import { Card, Col, Row, Layout, Alert, List, Button } from 'antd';
import axios from 'axios'
import Passage from './Passage'

class PassageList extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      const { account, payroll } = this.props;
      this.setState({
        listData: [
            {tx: "D35C885324DF5DB363A4B56CF70B56E20DCC8DA57AA6015D837291B261BF55C2"},
            {tx: "75bcc6ed2b6900aa938da9e60061e0d165efff4b82be0e8eb939d7aefac27439"},
            {tx: "6A34F0F0A6D5F9F4EFC481587143CFC0100811911CD67B3DA98663FB609A8493"},
        ]
      })
    }

    renderContent() {
        const { listData} = this.state;
        if (listData)
        return (
            <List
                itemLayout="horizontal"
                dataSource={listData}
                renderItem={item => (
                <List.Item>
                    <Passage
                    tx={item.tx}
                    />
                </List.Item>
                )}
            />
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
export default PassageList
