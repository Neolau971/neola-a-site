import React from "react"
import { Divider, Card } from "antd"

import mAtelier from '../../pictures/mAtelier.jpg'
import mDefile1 from '../../pictures/mDefile1.png'
import mPhoto from '../../pictures/mPhoto.jpg'
import FooterComposent from "../../components/footer.composent"

const text0 = "Alietta céatiiOn à été créé en 2011, à Sainte-Anne en Guadeloupe"
const text1 = "avec pour but, promouvoir et développer le monde de la mode."
const text2 = "L'objectif de la fondatrice était simple : rendre accessible la"
const text3 = "couture haut de gamme au plus grand nombre de guadeloupéens."
const text4 = "Ainsi c'est avec un grand succès que cet objectif est réalisé"
const text5 = "depuis plus de 6 ans."

const styles = {
  margin: '1rem',
  fontSize: '1.2em'
}

const style = {
  display: "flex",
  justifyContent: 'center',
  marginRight: '10rem',
  marginLeft: '10rem',
  marginBottom: '5rem',
  marginTop: '5rem'
}

const style2 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '15rem',
}

const style3 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '15rem'
}


function HistoricContent() {
  return (
    <div>
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Histoire de l'entreprise</div></Divider>
      <div style={{ marginTop: '4rem' }}>
        <div style={style}>
          <img src={mPhoto} alt="mPhoto" />
          <div style={style2}>
            <Card size="small">
              <p>
                <div style={styles}>{text0}</div>
                <div style={styles}>{text1}</div>
                <div style={styles}>{text2}</div>
                <div style={styles}>{text3}</div>
                <div style={styles}>{text4}</div>
                <div style={styles}>{text5}</div>
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, lightskyblue, royalblue)',
        width: '78%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <div style={style3}>
            <Card size="small">
              <p>
                <div style={styles}>{text0}</div>
                <div style={styles}>{text1}</div>
                <div style={styles}>{text2}</div>
                <div style={styles}>{text3}</div>
                <div style={styles}>{text4}</div>
                <div style={styles}>{text5}</div>
              </p>
            </Card>
          </div>
          <img src={mDefile1} alt="mDefile1 " />
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, royalblue, midnightblue)',
        width: '78%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <img src={mAtelier} alt="mAtelier" />
          <div style={style2}>
            <Card size="small">
              <p>
                <div style={styles}>{text0}</div>
                <div style={styles}>{text1}</div>
                <div style={styles}>{text2}</div>
                <div style={styles}>{text3}</div>
                <div style={styles}>{text4}</div>
                <div style={styles}>{text5}</div>
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