import { Menu } from "antd"
import {
  InfoCircleOutlined,
  FileDoneOutlined,
  FolderOpenOutlined
} from '@ant-design/icons';
import Sider from "antd/lib/layout/Sider"
import SubMenu from "antd/lib/menu/SubMenu"
import React from "react"

type SideMenuProps = {
  handleContent: (key: string) => void
}

const SideMenuComponent: React.FC<SideMenuProps> = ({ handleContent }) => {

  const handleClick = (e: any) => {
    handleContent(e.key)
  }

  return (
    <Sider width={300} className="site-layout-background">
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        onClick={handleClick}
      >
        <Menu.Item key="Apropos"><InfoCircleOutlined />À propos</Menu.Item>
        <Menu.Item key="Diplome"><FileDoneOutlined />Diplômes</Menu.Item>
        <Menu.Item key="Historic"><FolderOpenOutlined />Historique de l'entreprise</Menu.Item>
        <SubMenu title="Services proposés">
          <Menu.Item key="couturePerso">Couture sur mesure et personnalisée</Menu.Item>
          <Menu.Item key="transfo">Transformation de vêtement</Menu.Item>
          <Menu.Item key="retouches">Retouches diverses</Menu.Item>
          <Menu.Item key="coutureArtisa">Couture d'ameublement et artisanale</Menu.Item>
          <Menu.Item key="cours">Cours privés</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default React.memo(SideMenuComponent)