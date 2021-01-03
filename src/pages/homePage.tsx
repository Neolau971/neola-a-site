import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import ContentComponent from "../components/content/content.component";
import HeaderMenuComponent from "../components/header-menu.component";
import SideMenuComponent from "../components/side-menu.component";


function HomePage() {
  return (
    <Layout>
      <HeaderMenuComponent />
      <Layout>
        <SideMenuComponent />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <ContentComponent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default React.memo(HomePage)