// Header Component + Menu
//https://ant.design/components/menu/

import React from "react";
import { Layout, Space, Menu } from "antd";
import { FireOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default () => (
  <Header theme="light">
    <Menu theme="light" mode="horizontal" >
      <Space>
        <Menu.Item key="reload"><FireOutlined style={{ fontSize: '32px', color: 'black' }}/></Menu.Item>
        <Menu.Item key="logout" style={{ color: 'black' }}>Log Out</Menu.Item>
      </Space>,
    </Menu>
  </Header>
);

