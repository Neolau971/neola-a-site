import React from "react"
import { Divider, Card } from 'antd';
import home from '../../pictures/home.jpg'
import carou2 from '../../pictures/carou2.png'
import defile_TLS from '../../pictures/defile_TLS.jpg'
import FooterComposent from "../../components/footer.composent";

const style = {
  display: "flex",
  justifyContent: 'center',
  marginRight: '10rem',
  marginLeft: '10rem',
  marginBottom: '5rem',
  marginTop: '5rem'
}

const style2 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '5rem',
}

const style3 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '5rem'
}

const style4 = {
  margin: '1rem',
  fontSize: '1.2em'
}

const text0 = 'Alietta Creatiion est une entreprise fortement influencé par la culture guadeloupéenne depuis sa création.'
const text1 = 'De la tenu traditionnelle à la tenu tendance toute les coupes et création,'
const text2 = "original comme commun sont réalisable dans cette établisement ou histoire, culture et actualité s'entremêle."

const text4 = 'La créatice ayant une bonne expérience dans le monde de la mode, de par son passé de mannequin guadeloupéen reconnu.'
const text5 = "Elle saura vous illuminer soit par la création d'une tenu personnalisé vous mettant parfaitement en valeur,"
const text6 = "soit en vous proposent une de ses nombreuses création selon votre style."

const text8 = 'Ayant de bonne compétences en stylisme, mode et couture, de par ses nombreux défilé de mode'
const text9 = 'réalisé dans de nombreuses ville de France telle que Toulouse, Lyon, Sainte-anne...'
const text10 = 'avec de nombreux collaborateur reconnu dans le domaine.'
const text11 = "Elle saura grace à des cours personnalisé vous permèttre d'aquérire des compétences indispensable"
const text12 = "et recherché dans le domain de la mode et couture."

const HomeContent: React.FC = () => {

  return (
    <div>
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Acceuil</div></Divider>
      <div style={{ marginTop: '4rem' }}>
        <div style={style}>
          <img src={home} alt="home 1" />
          <div style={style2}>
            <Card size="small">
              <p>
                <div style={style4}>{text0}</div>
                <div style={style4}>{text1} {text2}</div>
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, lightskyblue, royalblue)',
        width: '83%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <div style={style3}>
            <Card size="small">
              <p>
                <div style={style4}>{text4}</div>
                <div style={style4}>{text5} {text6}</div>
              </p>
            </Card>
          </div>
          <img src={carou2} alt="carou2 " />
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, royalblue, midnightblue)',
        width: '83%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <img src={defile_TLS} alt="defile_TLS 1" />
          <div style={style2}>
            <Card size="small">
              <p>
                <div style={style4}>{text8} {text9}</div>
                <div style={style4}>{text10}</div>
                <div style={style4}>{text11} {text12}</div>
              </p>
            </Card>
          </div>
        </div>
      </div>
      <FooterComposent />
    </div>
  )
}

export default React.memo(HomeContent)
