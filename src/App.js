import React, { Component } from 'react';
import { Layout, Menu, Spin, Alert } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Passage from './components/Passage';
import Writer from './components/Writer';

const { Header, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'passage'
    }
  }

  renderContent = () => {
    const { mode } = this.state;

    switch(mode) {
      case 'passage':
        return <Passage />
      case 'writer':
        return <Writer />
      default:
        return <Alert message="error" type="info" showIcon />
    }
  }
  onSelectTab = ({key}) => {
    this.setState({
      mode: key
    })
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">Blog</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['passage']}
            style={{ lineHeight: '64px' }}
            onSelect={this.onSelectTab}
          >
            <Menu.Item key="passage">Reader</Menu.Item>
            <Menu.Item key="writer">Writer</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff', minHeight: '600px' }}>
            {this.renderContent()}
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Dorahackathon ©2018
        </Footer>
      </Layout>
    );
  }
}

export default App;
