import { Divider } from "antd"

import histo1 from '../../pictures/histo1.png'
import histo2 from '../../pictures/histo2.png'
import histo3 from '../../pictures/histo3.png'

const text0 = "Alietta céatiiOn à été créé en 2011, à Sainte-Anne en Guadeloupe"
const text1 = "avec pour but, promouvoir et développer le monde de la mode."
const text2 = "L'objectif de la fondatrice était simple : rendre accessible la"
const text3 = "couture haut de gamme au plus grand nombre de guadeloupéens."
const text4 = "Ainsi c'est avec un grand succès que cet objectif est réalisé"
const text5 = "depuis plus de 6 ans."

const styles = {
  margin: '20px',
  fontSize: 'medium'
}

function HistoricContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Histoire de l'entreprise</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '519px', marginRight: '100px' }}>
          <div style={{ display: "flex", justifyContent: 'flex-start' }}>
            <img src={histo1} alt="histo1" />
          </div>
          <div style={{ display: "flex", justifyContent: 'center' }}>
            <img src={histo2} alt="histo2" />
          </div>
          <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <img src={histo3} alt="histo3" />
          </div>
        </div>
        <p>
          <div style={styles}>{text0}</div>
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

export default HistoricContent