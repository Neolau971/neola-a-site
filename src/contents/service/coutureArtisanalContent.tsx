import { Divider, List } from "antd"
import React from "react"
import {
  ScissorOutlined
} from '@ant-design/icons';

import model from '../../pictures/lampe.png'
import model2 from '../../pictures/coussin.png'
import FooterComposent from "../../components/footer.composent";
import './service.css'
const data0 = [
  "Rideaux et voilages",
  "Couture d'intérieur",
  "Parure de drap",
  "Stores",
  "Coussin d'alliance",
  "Plaide",
  "Tête de lit",
  "..."
]

const data1 = [
  "35 euros la pièce",
  "280 euros l'ensemble de 5 pièces"
]

const data2 = [
  "35 euros la pièce",
  "280 euros l'ensemble de 50 pièces"
]

const styles0 = {
  margin: '20px',
  fontSize: '1.3rem',
  marginBottom: '3rem',
  display: 'flex',
  justifyContent: 'flex-start'
}

function CoutureArtisanalContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Couture d'ameublement et artisanale</div></Divider>
      <div className="mainStyle">
        <img src={model} alt="model" style={{ marginTop: '4rem' }} />
        <div className="textMargin">
          <div style={styles0}>{"Les coutures d'ameublement proposées"}</div>
          <List
            header={<div><ScissorOutlined style={{ fontSize: '1.5rem' }} /></div>}
            bordered
            dataSource={data0}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
        </div>
      </div>
      <Divider />
      <div className="mainStyle">
        <div>
          <div style={styles0}>{'Le prix des prestations'}</div>
          <List
            header={<div>{"Pour les préstations du type A"}</div>}
            bordered
            dataSource={data1}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
          <div style={{ margin: '2rem' }} />
          <List
            header={<div>{"Pour les préstations du type B"}</div>}
            bordered
            dataSource={data2}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
        </div>
        <img className="textMargin2" src={model2} alt="model2" />
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(CoutureArtisanalContent)