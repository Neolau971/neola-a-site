import { Divider } from "antd"
import React from "react"

const text0 = "Les prestations proposés :"
const text1 = "- Type de vêtement :"
const text2 = "costume"
const text3 = "chemise"
const text4 = "corsages"
const text5 = "jupes"
const text6 = "pantalon"
const text7 = "robe"
const text8 = "short"
const text9 = "..."
const text10 = "- Type de matière :"
const text11 = "tout type de matière"

const text12 = "Les prix des prestations :"
const text13 = "- Pour les préstations du type A :"
const text14 = "35 euros le vêtement"
const text15 = "280 euros l'ensemble de 5 vêtements"
const text16 = "- Pour les préstations du type B :"
const text17 = "35 euros le vêtement"
const text18 = "280 euros l'ensemble de 5 vêtements"

const styles = {
  margin: '20px',
  fontSize: 'medium',
  display: 'flex',
  justifyContent: 'flex-start'
}

const styles0 = {
  margin: '20px',
  fontSize: '1.3rem',
  marginBottom: '3rem',
  display: 'flex',
  justifyContent: 'flex-start'
}

const styles1 = {
  margin: '20px',
  fontSize: 'medium',
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: '3rem'
}

function CouturePersonaliseContent() {
  return (
    <div className="AppText">
      <Divider plain><h2 className="AppText">Couture sur mesure et personnalisée</h2></Divider>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: '4rem' }}>
        <p>
          <div style={styles0}>{text0}</div>
          <div style={styles}>{text1}</div>
          <div style={styles1}>{text2}</div>
          <div style={styles1}>{text3}</div>
          <div style={styles1}>{text4}</div>
          <div style={styles1}>{text5}</div>
          <div style={styles1}>{text6}</div>
          <div style={styles1}>{text7}</div>
          <div style={styles1}>{text8}</div>
          <div style={styles1}>{text9}</div>
          <div style={styles}>{text10}</div>
          <div style={styles1}>{text11}</div>
        </p>
        <p>
          <div style={styles0}>{text12}</div>
          <div style={styles}>{text13}</div>
          <div style={styles1}>{text14}</div>
          <div style={styles1}>{text15}</div>
          <div style={styles}>{text16}</div>
          <div style={styles1}>{text17}</div>
          <div style={styles1}>{text18}</div>
        </p>
      </div>
    </div>
  )
}

export default React.memo(CouturePersonaliseContent)