import { Divider, List } from "antd"
import React from "react"
import {
  SkinOutlined
} from '@ant-design/icons';

const data0 = [
  "Découverte et maitrise des mensurations",
  "Technique d'assemblage et finition",
  "Petite retouche",
  "Retouche totale",
  "Retouche aprofondie",
  "Couture d'ameublement",
  "Couture artisanale"
]


const text11 = "Les prix des prestations :"
const text12 = "- Pour les préstations du type A :"
const text13 = "35 euros le cours"
const text14 = "280 euros le mois"
const text15 = "- Pour les préstations du type B :"
const text16 = "35 euros le cours"
const text17 = "280 euros le mois"

const styles = {
  margin: '20px',
  fontSize: 'medium',
  display: 'flex',
  justifyContent: 'flex-start'
}

const styles0 = {
  fontSize: '1.3rem',
  marginBottom: '2rem'
}

const styles1 = {
  margin: '20px',
  fontSize: 'medium',
  display: 'flex',
  justifyContent: 'flex-start',
  marginLeft: '3rem'
}

function CoursContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Cours privés</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', marginTop: '4rem' }}>
        <div>
          <div style={styles0}>{'Les cours proposés'}</div>
          <List
            header={<div><SkinOutlined style={{ fontSize: '1.5rem' }} /></div>}
            bordered
            dataSource={data0}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
        </div>
        <p>
          <div style={styles0}>{text11}</div>
          <div style={styles}>{text12}</div>
          <div style={styles1}>{text13}</div>
          <div style={styles1}>{text14}</div>
          <div style={styles}>{text15}</div>
          <div style={styles1}>{text16}</div>
          <div style={styles1}>{text17}</div>
        </p>
      </div>
    </div>
  )
}

export default React.memo(CoursContent)