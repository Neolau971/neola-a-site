import { Divider } from "antd"
import React from "react"

const text1 = "Le CEO et Créatrice De Mode"
const text2 = "après avoir étudié dans l'école de haute couture de Toulouse en 2004,"
const text3 = "à lancé Alietta création en 2011."
const text4 = "Cette entreprise qui évolue dans l'industrie de l'habillement"
const text5 = "à su évolué et trouvé ça place dans la société guadeloupéenne et compte de nombreux clients satisfait."

const styles = {
  margin: '20px',
  fontSize: 'medium'
}

function AProposContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>À propos</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>
          <div style={styles}>{text1}</div>
          <div style={styles}>{text2}</div>
          <div style={styles}>{text3}</div>
          <div style={styles}>{text4}</div>
          <div style={styles}>{text5}</div>
        </p>
      </div>
    </div>
  )
}

export default React.memo(AProposContent)