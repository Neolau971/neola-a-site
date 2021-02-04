import { Divider, List } from "antd"
import React from "react"

import model from '../../pictures/model.jpg'
import model2 from '../../pictures/model2.png'
import FooterComposent from "../../components/footer.composent";
import './service.css'

const data0 = [
  "Costume",
  "Chemise",
  "Corsage",
  "Jupe",
  "Pantalon",
  "Robe",
  "Short",
  "..."
]

const data1 = [
  "Tout type de matière"
]

const data2 = [
  "création à partir de 35 euros",
  "les 3 pièces à partir de 280 euros"
]

const data3 = [
  "création à partir de 100 euros",
  "280 euros l'ensemble de 3 vêtements"
]

const data4 = [
  "tarifs varié en fonction de la commande"
]


const styles0 = {
  margin: '20px',
  fontSize: '1.3rem',
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'flex-start'
}

function CouturePersonaliseContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Couture sur mesure et personnalisée</div></Divider>
      <div className="mainStyle">
        <img src={model} alt="model" style={{ marginTop: '5rem' }} />
        <div className="textMargin">
          <div style={styles0}>{"Les prestations proposées"}</div>
          <List
            header={<div>{"Type de vêtement"}</div>}
            bordered
            dataSource={data0}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
          <div style={{ margin: '2rem' }} />
          <List
            header={<div>{"Type de matière"}</div>}
            bordered
            dataSource={data1}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
        </div>
      </div>
      <Divider />
      <div className="mainStyle">
        <div>
          <div style={styles0}>{'Le prix des prestations'}</div>
          <List
            header={<div>{"Pour les créations"}</div>}
            bordered
            dataSource={data2}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
          <div style={{ margin: '2rem' }} />
          <List
            header={<div>{"Pour les vêtements de haute gamme"}</div>}
            bordered
            dataSource={data3}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
          <div style={{ margin: '2rem' }} />
          <List
            header={<div>{"Pour les tenues de galas"}</div>}
            bordered
            dataSource={data4}
            renderItem={item => { return <List.Item>{item}</List.Item> }}
          />
        </div>
        <img className="textMargin2" src={model2} alt="model2" />
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(CouturePersonaliseContent)