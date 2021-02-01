import { Divider, Row, Col, Card } from "antd"
import React from "react"
import FooterComposent from "../../components/footer.composent"
import profile from '../../pictures/profile.jpg'
import './aProposContent.css'

const text0 = "Ayant déjà de l'expérience dans le domaine de la mode,"
const text1 = "de par son passé de mannequin et après avoir étudié dans l'école de haute couture de Toulouse en 2004,"
const text2 = "le PDG et Créatrice De Mode a lancé Alietta Création en 2011."
const text3 = "Cette entreprise qui évolue dans l'industrie de l'habillement a su évoluer et trouver sa place dans la société guadeloupéenne"
const text4 = "et compte de nombreux clients satisfaits."

const styles = {
  margin: '20px',
  fontSize: 'medium'
}

function AProposContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>À propos</div></Divider>
      <div className="mainStyleApropos">
        <Row>
          <Col>
            <div style={{ marginRight: '100px' }}>
              <img src={profile} alt="profile" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <p>
                <div style={styles}>{text0}</div>
                <div style={styles}>{text1}</div>
                <div style={styles}>{text2}</div>
                <div style={styles}>{text3}</div>
                <div style={styles}>{text4}</div>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(AProposContent)