import React, { Component } from 'react'
import { Card, Col, Row, Layout, Alert, List, Button } from 'antd';
import axios from 'axios'
import Passage from './Passage'

class PassageList extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    currHeight = 0
    count = 20
    config = {
        headers : {
            'Content-Type':'application/json;charset=UTF-8'
        },
    }
    listData = []
    prepareData(){
        axios.get('http://localhost:8091/api/1/currHeight', this.config)
        .then(response => {
            this.currHeight = response.data.result
            this.fetchTransaction(this.currHeight);
        });
    }

    fetchTransaction(height){
        if (height + this.count < this.currHeight) {
            this.setState({
                listData: this.listData
            })
            return;
        };
        axios.get('http://localhost:8091/api/1/txs/'+height, this.config)
        .then(response => {
            this.listData.push({tx: response.data.result.Transactions[0]});
            this.fetchTransaction(height - 1);
        });
    }
    componentDidMount() {
        //this.prepareData();
        this.listData = [
            {tx: "D35C885324DF5DB363A4B56CF70B56E20DCC8DA57AA6015D837291B261BF55C2"},
            {tx: "75bcc6ed2b6900aa938da9e60061e0d165efff4b82be0e8eb939d7aefac27439"},
            {tx: "6A34F0F0A6D5F9F4EFC481587143CFC0100811911CD67B3DA98663FB609A8493"},
            {tx: "24058cdbb1143584360a288a02281f8ca466f66dbb877b5def1aa7837e18f013"},
            {tx: "75BCC6ED2B6900AA938DA9E60061E0D165EFFF4B82BE0E8EB939D7AEFAC27439"}
        ];
        this.setState({
            listData: this.listData
        })
    }

    renderContent() {
        const { listData} = this.state;
        if (listData)
        return (
            <List
                itemLayout="vertical"
                size="large"
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
