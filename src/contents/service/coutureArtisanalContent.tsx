import { Divider } from "antd"
import React from "react"

const text0 = "Les couture d'ameublement proposés :"

const text2 = "rideaux et voilages"
const text3 = "couture d'intérieurs"
const text4 = "parure de drap"
const text5 = "stores"
const text6 = "coussin d'alliance"
const text7 = "plaides"
const text8 = "têtes de lit"
const text9 = "..."

const text12 = "Les prix des prestations :"
const text13 = "- Pour les préstations du type A :"
const text14 = "35 euros la pièce"
const text15 = "280 euros l'ensemble de pièces'"
const text16 = "- Pour les préstations du type B :"
const text17 = "35 euros la pièce"
const text18 = "280 euros l'ensemble de pièces"

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

function CoutureArtisanalContent() {
  return (
    <div className="AppText">
      <Divider plain><h2 className="AppText">Couture d'ameublement et artisanale</h2></Divider>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: '4rem' }}>
        <p>
          <div style={styles0}>{text0}</div>
          <div style={styles1}>{text2}</div>
          <div style={styles1}>{text3}</div>
          <div style={styles1}>{text4}</div>
          <div style={styles1}>{text5}</div>
          <div style={styles1}>{text6}</div>
          <div style={styles1}>{text7}</div>
          <div style={styles1}>{text8}</div>
          <div style={styles1}>{text9}</div>
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

export default React.memo(CoutureArtisanalContent)