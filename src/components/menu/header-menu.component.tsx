import { Menu } from "antd"
import { Header } from "antd/lib/layout/layout"
import React from "react"

type HeaderMenuProps = {
  handleContent: (key: string) => void
}

const HeaderMenuComponent: React.FC<HeaderMenuProps> = ({ handleContent }) => {

  const handleClick = (e: any) => {
    handleContent(e.key)
  }

  return (
    <Header className="header">
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