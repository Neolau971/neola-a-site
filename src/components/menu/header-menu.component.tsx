import { Menu } from "antd"
import SubMenu from "antd/lib/menu/SubMenu"
import {
  InfoCircleOutlined,
  PhoneOutlined,
  HomeOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import { Header } from "antd/lib/layout/layout"
import { ScissorOutlined, SkinOutlined } from '@ant-design/icons';
import React from "react"

type HeaderMenuProps = {
  handleContent: (key: string) => void
}

const HeaderMenuComponent: React.FC<HeaderMenuProps> = ({ handleContent }) => {

  const serviceTitle = <div><ShoppingOutlined style={{ fontSize: '17px' }} />Services proposés</div>

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
        defaultSelectedKeys={['Home']}
        onClick={handleClick}
      >
        <Menu.Item key="Home"><HomeOutlined style={{ fontSize: '15px' }} />Accueil</Menu.Item>
        <Menu.Item key="Apropos"><InfoCircleOutlined style={{ fontSize: '15px' }} />À propos</Menu.Item>
        <Menu.Item key="Contacts"><PhoneOutlined style={{ fontSize: '15px' }} />Contacts</Menu.Item>
        <Menu.Item key="Diplome"><FileDoneOutlined style={{ fontSize: '17px' }} />Diplômes</Menu.Item>
        <Menu.Item key="Historic"><FolderOpenOutlined style={{ fontSize: '17px' }} />Historique de l'entreprise</Menu.Item>
        <SubMenu title={serviceTitle}>
          <Menu.Item key="couturePerso">Couture sur mesure et personnalisée</Menu.Item>
          <Menu.Item key="transfo">Transformation de vêtement</Menu.Item>
          <Menu.Item key="retouches">Retouches diverses</Menu.Item>
          <Menu.Item key="coutureArtisa">Couture d'ameublement et artisanale</Menu.Item>
          <Menu.Item key="cours">Cours privés</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  )
}

export default React.memo(HeaderMenuComponent)