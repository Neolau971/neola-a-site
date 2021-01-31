import { Divider, List } from "antd"
import React from "react"
import {
  ScissorOutlined
} from '@ant-design/icons';

import model from '../../pictures/lampe.png'
import model2 from '../../pictures/coussin.png'
import FooterComposent from "../../components/footer.composent";

const data0 = [
  "rideaux et voilages",
  "couture d'intérieurs",
  "parure de drap",
  "stores",
  "coussin d'alliance",
  "plaides",
  "têtes de lit",
  "..."
]

const data1 = [
  "35 euros la pièce",
  "280 euros l'ensemble de pièces"
]

const data2 = [
  "35 euros la pièce",
  "280 euros l'ensemble de pièces"
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
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Coutures d'ameublement et artisanale</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '5rem' }}>
        <img src={model} alt="model" style={{ marginTop: '4rem' }} />
        <div style={{ marginLeft: '15rem' }}>
          <div style={styles0}>{"Les couture d'ameublement proposés"}</div>
          <List
            header={<div><ScissorOutlined style={{ fontSize: '1.5rem' }} /></div>}
            bordered
            dataSource={data0}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
        </div>
      </div>
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', margin: '5rem' }}>
        <div>
          <div style={styles0}>{'Les prix des prestations'}</div>
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
        <img style={{ marginLeft: '15rem' }} src={model2} alt="model2" />
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(CoutureArtisanalContent)