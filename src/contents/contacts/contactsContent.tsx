import { Divider } from "antd"
import React from "react"

function ContactContent() {
  return (
    <div className="AppText">
      <Divider plain><h2 className="AppText">Contacts</h2></Divider>
      <p>
        - Adresse : 105, rue de Gaspard, Fouché
                <br />91780 Sainte-Anne Guadeloupe
                <br></br>
              - Tel : 0690 59 41 34 - 0690 19 41 30
                <br></br>
                - Mail : alietta.creation@gmail.com
                <br></br>
                  - Facebook : <a href="https://www.facebook.com/aliette.neola"> cliquez ici</a>
        <br></br>
      </p>
    </div>
  )
}

export default ContactContent