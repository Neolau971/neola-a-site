import { Divider } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import HeaderMenuComponent from "./components/menu/header-menu.component";
import SideMenuComponent from "./components/menu/side-menu.component";
import ContactContent from "./contents/contacts/contactsContent";
import DiplomeContent from "./contents/diplome/diplomeContent";
import HistoricContent from "./contents/historic/historicContent";
import HomeContent from "./contents/home/homeContent";
import './mainPage.css'



function MainPage() {

  const [isHome, setIsHome] = useState(true)
  const [isContacts, setIsContacts] = useState(false)
  const [isDiplome, setIsDiplome] = useState(false)
  const [isHistoric, setIsHistoric] = useState(false)

  const handleContent = (key: string) => {
    setIsHome(false)
    setIsContacts(false)
    setIsDiplome(false)
    setIsHistoric(false)

    switch (key) {
      case 'Home':
        setIsHome(true)
        break
      case 'Contacts':
        setIsContacts(true)
        break
      case 'Diplome':
        setIsDiplome(true)
        break
      case 'Historic':
        setIsHistoric(true)
        break
      default:
        setIsHome(true)
    }
  }

  return (
    <Layout>
      <HeaderMenuComponent handleContent={handleContent} />
      <Layout>
        <SideMenuComponent handleContent={handleContent} />
        <Layout className='content'>
          <div className='defaultHeight'>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {isHome && <HomeContent />}
              {isContacts && <ContactContent />}
              {isDiplome && <DiplomeContent />}
              {isHistoric && <HistoricContent />}
            </Content>
          </div>
          <Divider plain>
            <div className='AppText'>Copyright Alietta Creation - Tous droits réservés</div>
          </Divider>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default React.memo(MainPage)