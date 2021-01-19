import { Divider, Row, Col } from "antd"
import React from "react"
import profile from '../../pictures/profile.jpg'

const text1 = "Le CEO et Créatrice De Mode après avoir étudié dans l'école de haute"
const text2 = "couture de Toulouse en 2004, à lancé Alietta création en 2011."
const text3 = "Cette entreprise qui évolue dans l'industrie de l'habillement"
const text4 = "à su évolué et trouvé ça place dans la société guadeloupéenne et compte"
const text5 = "de nombreux clients satisfait."

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