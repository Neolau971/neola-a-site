import { Divider, Row, Col } from "antd"
import React from "react"
import profile from '../../pictures/profile.jpg'

const text0 = "Ayant déjà de l'expérience dans le domaine de la mode de par son passé"
const text1 = "de mannequin et après avoir étudié dans l'école de haute couture de Toulouse"
const text2 = "en 2004, le PDG et Créatrice De Mode a lancé Alietta Création en 2011."
const text3 = "Cette entreprise qui évolue dans l'industrie de l'habillement a su évoluer"
const text4 = "et trouver sa place dans la société guadeloupéenne et compte de nombreux"
const text5 = "clients satisfaits."

const styles = {
  margin: '20px',
  fontSize: 'medium'
}

function AProposContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>À propos</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Row>
          <Col>
            <div style={{ marginRight: '100px' }}>
              <img src={profile} alt="profile" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <div style={styles}>{text0}</div>
              <div style={styles}>{text1}</div>
              <div style={styles}>{text2}</div>
              <div style={styles}>{text3}</div>
              <div style={styles}>{text4}</div>
              <div style={styles}>{text5}</div>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default React.memo(AProposContent)