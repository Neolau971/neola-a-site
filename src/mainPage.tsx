import { Divider } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import HeaderMenuComponent from "./components/menu/header-menu.component";
import SideMenuComponent from "./components/menu/side-menu.component";
import ContactContent from "./contents/contacts/contactsContent";
import DiplomeContent from "./contents/diplome/diplomeContent";
import HistoricContent from "./contents/historic/historicContent";
import HomeContent from "./contents/home/homeContent";
import ServiceContent from "./contents/service/serviceContent";
import './mainPage.css'
function MainPage() {

  const [isHome, setIsHome] = useState(true)
  const [isContacts, setIsContacts] = useState(false)
  const [isDiplome, setIsDiplome] = useState(false)
  const [isHistoric, setIsHistoric] = useState(false)
  const [isService, setIsService] = useState(false)

  const handleContent = (key: string) => {
    switch (key) {
      case 'Home':
        setIsHome(true)
        setIsContacts(false)
        setIsDiplome(false)
        setIsHistoric(false)
        setIsService(false)
        break
      case 'Contacts':
        setIsHome(false)
        setIsContacts(true)
        setIsDiplome(false)
        setIsHistoric(false)
        setIsService(false)
        break
      case 'Diplome':
        setIsHome(false)
        setIsContacts(false)
        setIsDiplome(true)
        setIsHistoric(false)
        setIsService(false)
        break
      case 'Historic':
        setIsHome(false)
        setIsContacts(false)
        setIsDiplome(false)
        setIsHistoric(true)
        setIsService(false)
        break
      case 'Service':
        setIsHome(false)
        setIsContacts(false)
        setIsDiplome(false)
        setIsHistoric(false)
        setIsService(true)
        break
      default:
        setIsHome(true)
        setIsContacts(false)
        setIsDiplome(false)
        setIsHistoric(false)
        setIsService(false)
    }
  }

  return (
    <Layout>
      <HeaderMenuComponent handleContent={handleContent} />
      <Layout>
        <SideMenuComponent handleContent={handleContent} />
        <Layout style={{ padding: '0 24px 24px' }}>
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
            {isService && <ServiceContent />}
          </Content>
          <Divider plain>Copyright Alietta Creation - Tous droits réservés</Divider>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default React.memo(MainPage)