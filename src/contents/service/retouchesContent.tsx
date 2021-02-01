import { Divider, List } from "antd"
import React from "react"
import {
  SkinOutlined
} from '@ant-design/icons';

import model from '../../pictures/model.jpg'
import model2 from '../../pictures/model2.png'
import FooterComposent from "../../components/footer.composent";
import './service.css'

const data0 = [
  "Retouche sur manteau, veste ou blazer",
  "Retouche sur pantalon",
  "Retouche sur t-shirt ou chemise",
  "Retouche sur vêtement endommagé"
]

const data1 = [
  "35 euros le vêtement",
  "280 euros l'ensemble de 5 vêtements"
]

const data2 = [
  "35 euros le vêtement",
  "280 euros l'ensemble de 5 vêtements"
]

const styles0 = {
  margin: '20px',
  fontSize: '1.3rem',
  marginBottom: '3rem',
  display: 'flex',
  justifyContent: 'flex-start'
}

function RetouchesContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Retouches diverses</div></Divider>
      <div className="mainStyle">
        <img src={model} alt="model" />
        <div className="textMargin">
          <div style={styles0}>{"Les retouches proposées"}</div>
          <List
            header={<div><SkinOutlined style={{ fontSize: '1.5rem' }} /></div>}
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

export default React.memo(RetouchesContent)