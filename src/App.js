import React, { Component } from 'react';
import { Layout, Menu, Spin, Alert } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;
class App extends Component {

  renderContent = () => {
    return "textfjadlfkajfhalkjdhfalkfhakjfdhaklhfladjhkflahflk"
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">Blog</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['employer']}
            style={{ lineHeight: '64px' }}
            onSelect={this.onSelectTab}
          >
            <Menu.Item key="1">text1</Menu.Item>
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
