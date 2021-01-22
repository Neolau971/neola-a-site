import { Divider } from "antd"
import React from "react"

const text0 = "Les cours proposés :"
const text1 = "- Cours de couture d'habillement :"
const text2 = "Découverte et maitrise des mensurations"
const text3 = "Technique d'assemblage et finition"
const text4 = "- Cours de retouches diverses :"
const text5 = "Petite retouche"
const text6 = "Retouche totale"
const text7 = "Retouche aprofondie"
const text8 = "- Cours de spécifique :"
const text9 = "Couture d'ameublement"
const text10 = "Couture artisanale"

const text11 = "Les prix des prestations :"
const text12 = "- Pour les préstations du type A :"
const text13 = "35 euros le cours"
const text14 = "280 euros le mois"
const text15 = "- Pour les préstations du type B :"
const text16 = "35 euros le cours"
const text17 = "280 euros le mois"

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

function CoursContent() {
  return (
    <div className="AppText">
      <Divider plain><h2 className="AppText">Cours privés</h2></Divider>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: '4rem' }}>
        <p>
          <div style={styles0}>{text0}</div>
          <div style={styles}>{text1}</div>
          <div style={styles1}>{text2}</div>
          <div style={styles1}>{text3}</div>
          <div style={styles}>{text4}</div>
          <div style={styles1}>{text5}</div>
          <div style={styles1}>{text6}</div>
          <div style={styles1}>{text7}</div>
          <div style={styles}>{text8}</div>
          <div style={styles1}>{text9}</div>
          <div style={styles1}>{text10}</div>
        </p>
        <p>
          <div style={styles0}>{text11}</div>
          <div style={styles}>{text12}</div>
          <div style={styles1}>{text13}</div>
          <div style={styles1}>{text14}</div>
          <div style={styles}>{text15}</div>
          <div style={styles1}>{text16}</div>
          <div style={styles1}>{text17}</div>
        </p>
      </div>
    </div>
  )
}

export default React.memo(CoursContent)