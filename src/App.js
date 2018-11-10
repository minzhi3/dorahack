import React, { Component } from 'react';
import { Layout, Menu, Spin, Alert } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Passage from './components/Passage';

const { Header, Content, Footer } = Layout;
class App extends Component {

  renderContent = () => {
    return <Passage />;
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">Blog</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['tab1']}
            style={{ lineHeight: '64px' }}
            //onSelect={this.onSelectTab}
          >
            <Menu.Item key="tab1">text1</Menu.Item>
            <Menu.Item key="tab2">text2</Menu.Item>
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
