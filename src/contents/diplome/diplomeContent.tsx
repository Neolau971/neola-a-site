import React from "react"
import { Divider, List } from "antd"
import {
  SendOutlined
} from '@ant-design/icons';

import diplome from '../../pictures/diplome.jpg'
import FooterComposent from "../../components/footer.composent"
import "./diplome.css"

const data0 = [
  "dans les métiers de la mode",
  "dans les industries connexes de la mode"
]

const data1 = [
  "en micro-textile"
]

const data2 = [
  "en couture flou"
]

const data3 = [
  "en couture prêt à porter",
  "en couture ameublement et artisanale",
  "dans l'évènementiel axé sur la mode"
]

const style = {
  display: 'flex',
  justifyContent: 'flex-start'
}

const style1 = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '0.95rem'
}

function DiplomeContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Diplômes et certifications</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <div className="mainWidth">
          <div style={{ display: "flex", justifyContent: 'flex-start' }}>
            <img src={diplome} alt="diplome" />
          </div>
        </div>
        <div>
          <List
            header={<div style={style1}><SendOutlined style={{ marginRight: '1rem' }} /> {" Un brevet d'études professionnelles délivré par l'académie de Toulouse"}</div>}
            bordered
            dataSource={data0}
            renderItem={item => { return <List.Item style={style}>{item}</List.Item> }}
          />
          <div style={{ margin: '0.5rem' }} />
          <List
            header={<div style={style1}><SendOutlined style={{ marginRight: '1rem' }} />{"Une maîtrise"}</div>}
            bordered
            dataSource={data1}
            renderItem={item => { return <List.Item style={style}>{item}</List.Item> }}
          />
          <div style={{ margin: '0.5rem' }} />
          <List
            header={<div style={style1}><SendOutlined style={{ marginRight: '1rem' }} />{"Un certificat d'aptitude professionnelle délivré par l'académie de Toulouse"}</div>}
            bordered
            dataSource={data2}
            renderItem={item => { return <List.Item style={style}>{item}</List.Item> }}
          />
          <div style={{ margin: '0.5rem' }} />
          <List
            header={<div style={style1}><SendOutlined style={{ marginRight: '1rem' }} />{"Des formations"}</div>}
            bordered
            dataSource={data3}
            renderItem={item => { return <List.Item style={style}>{item}</List.Item> }}
          />
        </div>
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(DiplomeContent)