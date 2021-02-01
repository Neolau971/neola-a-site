import React from "react"
import { Divider, Card } from "antd"

import mAtelier from '../../pictures/mAtelier.jpg'
import mDefile1 from '../../pictures/mDefile1.png'
import mPhoto from '../../pictures/mPhoto.jpg'
import FooterComposent from "../../components/footer.composent"
import './historicContent.css'

const text0 = "Alietta CréatiiOn a été créé en 2011, à Sainte-Anne en Guadeloupe"
const text1 = "avec pour but de promouvoir et développer le monde de la mode."
const text2 = "L'objectif de la fondatrice était simple : rendre accessible la"
const text3 = "couture haut de gamme au plus grand nombre de guadeloupéens."
const text4 = "Ainsi c'est avec un grand succès que cet objectif est réalisé"
const text5 = "depuis plus de 6 ans."

const styles = {
  margin: '1rem',
  fontSize: '1.2em'
}

const style2 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '8rem',
}

const style3 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '8rem'
}


function HistoricContent() {
  return (
    <div>
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Historique de l'entreprise</div></Divider>
      <div style={{ marginTop: '4rem' }}>
        <div className="mainStyleHisto">
          <img src={mPhoto} alt="mPhoto" />
          <div style={style2}>
            <Card size="small">
              <p>
                <div style={styles}>{text0} {text1}</div>
                <div style={styles}>{text2} {text3}</div>
                <div style={styles}>{text4} {text5}</div>
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="bandoStyleHisto" />
      <div>
        <div className="mainStyleHisto">
          <div style={style3}>
            <Card size="small">
              <p>
                <div style={styles}>{text0} {text1}</div>
                <div style={styles}>{text2} {text3}</div>
                <div style={styles}>{text4} {text5}</div>
              </p>
            </Card>
          </div>
          <img src={mDefile1} alt="mDefile1 " />
        </div>
      </div>
      <div className="bandoStyleHisto" />
      <div>
        <div className="mainStyleHisto">
          <img src={mAtelier} alt="mAtelier" />
          <div style={style2}>
            <Card size="small">
              <p>
                <div style={styles}>{text0} {text1}</div>
                <div style={styles}>{text2} {text3}</div>
                <div style={styles}>{text4} {text5}</div>
              </p>
            </Card>
          </div>
        </div>
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(HistoricContent)