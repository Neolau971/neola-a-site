import { Menu } from "antd"
import Sider from "antd/lib/layout/Sider"
import React from "react"

type SideMenuProps = {
  handleContent: (key: string) => void
}

const SideMenuComponent: React.FC<SideMenuProps> = ({ handleContent }) => {

  const handleClick = (e: any) => {
    handleContent(e.key)
  }

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        onClick={handleClick}
      >
        <Menu.Item key="Diplome">Diplômes</Menu.Item>
        <Menu.Item key="Historic">Historique de l'entreprise</Menu.Item>
        <Menu.Item key="Service">Service proposés</Menu.Item>
      </Menu>
    </Sider>
  )
}

export default React.memo(SideMenuComponent)