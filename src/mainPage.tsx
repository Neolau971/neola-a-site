import { Divider } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import HandlerContentComposent from "./components/menu/handler-content.composent";
import HeaderMenuComponent from "./components/menu/header-menu.component";
import SideMenuComponent from "./components/menu/side-menu.component";
import './mainPage.css'



function MainPage() {

  const [isHome, setIsHome] = useState(true)
  const [isContacts, setIsContacts] = useState(false)
  const [isDiplome, setIsDiplome] = useState(false)
  const [isHistoric, setIsHistoric] = useState(false)
  const [isTransfo, setIsTransfo] = useState(false)
  const [isCours, setIsCours] = useState(false)
  const [isCoutureArti, setIsCoutureArti] = useState(false)
  const [isCouturePesro, setIsCouturePesro] = useState(false)
  const [isRetouches, setIsRetouches] = useState(false)

  const handleContent = (key: string) => {
    setIsHome(false)
    setIsContacts(false)
    setIsDiplome(false)
    setIsHistoric(false)
    setIsTransfo(false)
    setIsCours(false)
    setIsCoutureArti(false)
    setIsCouturePesro(false)
    setIsRetouches(false)

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
      case 'transfo':
        setIsTransfo(true)
        break
      case 'couturePerso':
        setIsCouturePesro(true)
        break
      case 'retouches':
        setIsRetouches(true)
        break
      case 'coutureArtisa':
        setIsCoutureArti(true)
        break
      case 'cours':
        setIsCours(true)
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
              {<HandlerContentComposent
                isHome={isHome}
                isContacts={isContacts}
                isDiplome={isDiplome}
                isHistoric={isHistoric}
                isTransfo={isTransfo}
                isCours={isCours}
                isCoutureArti={isCoutureArti}
                isCouturePesro={isCouturePesro}
                isRetouches={isRetouches}
              />}
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