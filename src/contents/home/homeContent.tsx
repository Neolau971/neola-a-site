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

const text0 = 'Alietta CreatiiOn est une entreprise fortement influencée par la culture guadeloupéenne depuis sa création.'
const text1 = 'De la tenue traditionnelle à la tenue tendance toutes les coupes et créations,'
const text2 = "originales comme communes sont réalisables dans cet établisement où histoire, culture et actualité s'entremêlent."

const text4 = 'La créatice ayant une bonne expérience dans le monde de la mode, de par son passé de mannequin guadeloupéen reconnu.'
const text5 = "Elle saura vous illuminer soit par la création d'une tenue personnalisée vous mettant parfaitement en valeur,"
const text6 = "soit en vous proposant une de ses nombreuses créations selon votre style."

const text8 = 'Ayant de bonnes compétences en stylisme, mode et couture, de par ses nombreux défilés de mode'
const text9 = 'réalisés dans de nombreuses villes de France telles que Toulouse, Lyon, Sainte-Anne...'
const text10 = 'avec de nombreux collaborateurs reconnus dans le domaine.'
const text11 = "Elle saura, grace à des cours personnalisés, vous permettre d'acquérir des compétences indispensables"
const text12 = "et recherchées dans le domaine de la mode et de la couture."

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
