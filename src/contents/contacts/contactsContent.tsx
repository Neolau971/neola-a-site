import { Divider } from "antd"
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined
} from '@ant-design/icons';
import React from "react"

import fleurL from '../../pictures/fleurL.png'
import fleurR from '../../pictures/fleurR.png'
import FooterComposent from "../../components/footer.composent";


const text1 = "Adresse : 105, rue de Gaspard, Fouché"
const text2 = "91780 Sainte-Anne Guadeloupe"
const text3 = "Tel : 0690 59 41 34 - 0690 19 41 30"
const text4 = "Mail : alietta.creation@gmail.com"
const text5 = 'Facebook : '

const styles = {
  margin: '20px',
  fontSize: 'medium'
}

const iconStyle = {
  fontSize: '20px'
}

function ContactContent() {
  return (
    <div className="AppText">
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Contacts</div></Divider>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <img src={fleurL} alt="fleurL 1" />
        <p>
          <HomeOutlined style={iconStyle} />
          <div style={styles}>{text1}</div>
          <div style={styles}>{text2}</div>
          <PhoneOutlined style={iconStyle} />
          <div style={styles}>{text3}</div>
          <MailOutlined style={iconStyle} />
          <div style={styles}>{text4}</div>
          <FacebookOutlined style={iconStyle} />
          <div
            style={styles}>{text5}
            <a style={{ marginLeft: '5px' }} href="https://www.facebook.com/aliette.neola">
              cliquez ici
            </a>
          </div>
        </p>
        <img src={fleurR} alt="fleurR 1" />
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(ContactContent)