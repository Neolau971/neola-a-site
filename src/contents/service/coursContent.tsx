import { Divider } from "antd"
import React from "react"

function CoursContent() {
  return (
    <div className="AppText">
      <Divider plain><h2 className="AppText">Cours privés</h2></Divider>
      <p>
        Les cours proposés par l'entreprise :
        <br />
        - Cours de couture d'habillement :
        <br />
        * Découverte et maitrise des mensurations<br />
        * Initiation et perfectionnement du patronage<br />
        * Technique d'assemblage et finition<br />
        <br />
        - Cours de retouches diverses :
        <br />
        * Petite retouche <br />
        * Retouche totale et aprofondie<br />
        <br />
        - Couture d'ameublement et artisanale
        <br />
      </p>
    </div>
  )
}

export default CoursContent