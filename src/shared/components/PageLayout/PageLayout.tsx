
import React, {FC} from 'react';
import {Layout} from "antd";
import Header from "../Header";
import './PageLayout.scss';


const PageLayout: FC<any> = ({ children }) => {
  return (
    <>
      <Layout className="layout">
        <Header/>
        <Layout>
          <Layout.Content className="layout-content" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-content">{children}</div>
          </Layout.Content>
        </Layout>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Сердце ©2020 Created by NOVA
        </Layout.Footer>
      </Layout>
    </>
  )
}

export default PageLayout
  