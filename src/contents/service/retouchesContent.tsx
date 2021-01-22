import { Divider } from "antd"
import React from "react"

const text0 = "Les retouches proposés :"
const text1 = "- Type de retouche :"
const text2 = "retouche sur manteau, veste ou blazer"
const text3 = "retouche sur pantalon"
const text4 = "retouche sur t-shirt ou chemise"
const text5 = "retouche sur vêtement endommagé"

const text12 = "Les prix des prestations :"
const text13 = "- Pour les petites retouches :"
const text14 = "35 euros le vêtement"
const text15 = "280 euros l'ensemble de 5 vêtements"
const text16 = "- Pour les grosses retouches :"
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

function RetouchesContent() {
  return (
    <div className="AppText">
      <Divider plain><h2 className="AppText">Retouches diverses</h2></Divider>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: '4rem' }}>
        <p>
          <div style={styles0}>{text0}</div>
          <div style={styles}>{text1}</div>
          <div style={styles1}>{text2}</div>
          <div style={styles1}>{text3}</div>
          <div style={styles1}>{text4}</div>
          <div style={styles1}>{text5}</div>
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

export default React.memo(RetouchesContent)