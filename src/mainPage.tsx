import { Divider } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { useMemo, useState } from "react";
import HandlerContentComposent from "./components/menu/handler-content.composent";
import HeaderMenuComponent from "./components/menu/header-menu.component";
import './mainPage.css'



function MainPage() {

  const [isHome, setIsHome] = useState<boolean>(true)
  const [isContacts, setIsContacts] = useState<boolean>(false)
  const [isDiplome, setIsDiplome] = useState<boolean>(false)
  const [isHistoric, setIsHistoric] = useState<boolean>(false)
  const [isTransfo, setIsTransfo] = useState<boolean>(false)
  const [isCours, setIsCours] = useState<boolean>(false)
  const [isCoutureArti, setIsCoutureArti] = useState<boolean>(false)
  const [isCouturePesro, setIsCouturePesro] = useState<boolean>(false)
  const [isRetouches, setIsRetouches] = useState<boolean>(false)
  const [isAPropos, setIsAPropos] = useState<boolean>(false)

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
    setIsAPropos(false)

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
      case 'Apropos':
        setIsAPropos(true)
        break
      default:
        setIsHome(true)
    }
  }

  const boolTemp = useMemo(() => {
    if (isHistoric || isHome) {
      return false
    }
    return true
  }, [isHistoric, isHome])

  return (
    <div style={{ overflow: 'auto' }}>
      <Layout>
        <HeaderMenuComponent handleContent={handleContent} />
        <Layout>
          <Layout className='content'>
            <div className='defaultHeight'>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
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
                  isAPropos={isAPropos}
                />}
              </Content>
            </div>
            {boolTemp && <>
              <Divider plain>
                <div className='AppText'>Copyright Alietta Creation - Tous droits réservés</div>
              </Divider>
              <div style={{
                display: 'inline-block',
                background: '#001529',
                width: '100%',
                height: '6rem'
              }} />
            </>}
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default React.memo(MainPage)