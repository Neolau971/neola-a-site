import { Menu } from "antd"
import { Header } from "antd/lib/layout/layout"
import { ScissorOutlined, SkinOutlined } from '@ant-design/icons';
import React from "react"

type HeaderMenuProps = {
  handleContent: (key: string) => void
}

const HeaderMenuComponent: React.FC<HeaderMenuProps> = ({ handleContent }) => {

  const handleClick = (e: any) => {
    handleContent(e.key)
  }

  return (
    <Header style={{ padding: '0px' }}>
      <div style={{
        float: 'left',
        width: '200px',
        height: '31px',
        backgroundColor: 'white',
        margin: '20px',
        marginRight: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ScissorOutlined />
        <span style={{ fontWeight: 'bold', margin: '10px', fontSize: 'larger', color: 'rebeccapurple' }}>Alietta CreatiiOn</span>
        <SkinOutlined />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['Home']}
        onClick={handleClick}
      >
        <Menu.Item key="Home">Acceuil</Menu.Item>
        <Menu.Item key="Contacts">Contacts</Menu.Item>
      </Menu>
    </Header>
  )
}

export default React.memo(HeaderMenuComponent)