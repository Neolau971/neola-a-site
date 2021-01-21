import { Menu } from "antd"
import {
  InfoCircleOutlined,
  PhoneOutlined
} from '@ant-design/icons';
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
        height: '40px',
        backgroundColor: 'white',
        margin: '15px',
        marginRight: '85px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ScissorOutlined style={{ fontSize: '20px' }} />
        <span style={{ fontWeight: 'bold', margin: '10px', fontSize: '17px', color: 'rebeccapurple' }}>Alietta CreatiiOn</span>
        <SkinOutlined style={{ fontSize: '20px' }} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={handleClick}
      >
        <Menu.Item key="Apropos"><InfoCircleOutlined style={{ fontSize: '15px' }} />À propos</Menu.Item>
        <Menu.Item key="Contacts"><PhoneOutlined style={{ fontSize: '15px' }} />Contacts</Menu.Item>
      </Menu>
    </Header>
  )
}

export default React.memo(HeaderMenuComponent)