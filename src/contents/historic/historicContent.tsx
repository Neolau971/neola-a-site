import React from "react"
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

const style = {
  display: "flex",
  justifyContent: 'center',
  margin: '10rem'
}

const style1 = {
  display: "flex",
  justifyContent: 'center',
  marginBottom: '10rem'
}

const style2 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '2rem',
  marginRight: '2rem'
}


function HistoricContent() {
  return (
    <div>
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Histoire de l'entreprise</div></Divider>
      <div style={{ marginTop: '4rem' }}>
        <div style={style1}>
          <img src={histo1} alt="home 1" />
          <div style={style2}>
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
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, lightskyblue, royalblue)',
        width: '78%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <div style={style2}>
            <p>
              <div style={styles}>{text0}</div>
              <div style={styles}>{text1}</div>
              <div style={styles}>{text2}</div>
              <div style={styles}>{text3}</div>
              <div style={styles}>{text4}</div>
              <div style={styles}>{text5}</div>
            </p>
          </div>
          <img src={histo2} alt="carou2 " />
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, royalblue, midnightblue)',
        width: '78%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <img src={histo3} alt="defile_TLS 1" />
          <div style={style2}>
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
      </div>
      <Divider plain>
        <div className='AppText'>Copyright Alietta Creation - Tous droits réservés</div>
      </Divider>
      <div style={{
        display: 'inline-block',
        background: '#001529',
        width: '100%',
        height: '6rem'
      }} />
    </div>
  )
}

export default React.memo(HistoricContent)