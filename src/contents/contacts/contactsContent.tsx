import { Divider } from "antd"
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined
} from '@ant-design/icons';
import React from "react"

const text1 = "Adresse : 105, rue de Gaspard, Fouché"
const text2 = "91780 Sainte-Anne Guadeloupe"
const text3 = "Tel : 0690 59 41 34 - 0690 19 41 30"
const text4 = "Mail : alietta.creation@gmail.com"
const text5 = 'Facebook : '

const styles = {
  margin: '20px',
  fontSize: 'medium'
}

function ContactContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Contacts</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>
          <HomeOutlined />
          <div style={styles}>{text1}</div>
          <div style={styles}>{text2}</div>
          <PhoneOutlined />
          <div style={styles}>{text3}</div>
          <MailOutlined />
          <div style={styles}>{text4}</div>
          <FacebookOutlined />
          <div
            style={styles}>{text5}
            <a style={{ marginLeft: '5px' }} href="https://www.facebook.com/aliette.neola">
              cliquez ici
            </a>
          </div>
        </p>
      </div>
    </div>
  )
}

export default React.memo(ContactContent)