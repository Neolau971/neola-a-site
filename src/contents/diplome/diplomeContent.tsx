import React from "react"
import { Divider } from "antd"

import diplome from '../../pictures/diplome.jpg'

const text0 = "Le travail de qualité fourni par l'entreprise s'explique par les diplômes et certifications suivants :"
const text1 = "- Un brevet d'études professionnelles délivré par l'académie de Toulouse :"
const text2 = "dans les métiers de la mode et des industries connexes"
const text3 = "- Une Maîtrise :"
const text4 = "en micro-textile"
const text5 = "- Un certificat d'aptitude professionnelle délivré par l'académie de Toulouse"
const text6 = "en couture flou"
const text7 = "- Des formations :"
const text8 = "en couture prêt à porter"
const text9 = "en couture ameublement et artisanale"
const text10 = "dans l'évènementiel axé sur la mode"

const styles = {
  margin: '20px',
  fontSize: 'medium',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const styles2 = {
  margin: '20px',
  marginBottom: '50px',
  fontSize: 'medium',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const styles3 = {
  margin: '20px',
  marginLeft: '4rem',
  fontSize: 'medium',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

function DiplomeContent() {
  return (
    <div className="AppText">
      <Divider plain><h2 className="AppText">Diplômes et Certifications</h2></Divider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ width: '519px', marginRight: '100px' }}>
          <div style={{ display: "flex", justifyContent: 'flex-start' }}>
            <img src={diplome} alt="diplome" />
          </div>
        </div>
        <p>
          <div style={styles2}>{text0}</div>
          <div style={styles}>{text1}</div>
          <div style={styles3}>{text2}</div>
          <div style={styles}>{text3}</div>
          <div style={styles3}>{text4}</div>
          <div style={styles}>{text5}</div>
          <div style={styles3}>{text6}</div>
          <div style={styles}>{text7}</div>
          <div style={styles3}>{text8}</div>
          <div style={styles3}>{text9}</div>
          <div style={styles3}>{text10}</div>
        </p>
      </div>
    </div>
  )
}

export default React.memo(DiplomeContent)