// 4. "Assembler" component that contains all other component pieces for layout
// Components from ANTD: Layout, Header, Footer
// https://ant.design/components/overview/
// 

import './App.css'
import { Layout } from "antd"
import React from "react"
import Alerts from "./Alerts"
import Header from "./Header"
//import Login from "./Login"
//import UpToDateButton from "./UpToDateButton"

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <Alerts />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>The footer.</Footer>
  </Layout>
);
