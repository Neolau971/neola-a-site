import React from "react"
import { Divider } from 'antd';
import home from '../../pictures/home.jpg'
import carou2 from '../../pictures/carou2.png'
import defile_TLS from '../../pictures/defile_TLS.jpg'

const style = {
  display: "flex",
  justifyContent: 'center',
  margin: '10rem'
}

const style1 = {
  display: "flex",
  justifyContent: 'center',
  marginBottom: '10rem'
}

const style2 = {
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '2rem',
  marginRight: '2rem'
}

const text0 = 'Alietta Creatiion est une entreprise fortement influencé par la culture'
const text1 = 'guadeloupéenne depuis sa création, de la tenu traditionnelle à la tenu'
const text2 = 'tendance toute les coupes et création, original comme commun sont réalisable'
const text3 = "dans cette établisement ou histoire, culture et actualité s'entremêle."

const text4 = 'La créatice ayant une bonne expérience dans le monde de la mode, de par son'
const text5 = 'passé de mannequin guadeloupéen reconnu. Elle saura vous illuminer soit'
const text6 = "par la création d'une tenu personnalisé vous mettant parfaitement en valeur,"
const text7 = "soit en vous proposent une de ses nombreuses création selon votre style."

const text8 = 'Ayant de bonne compétences en stylisme, mode et couture, de par ses nombreux'
const text9 = 'défilé de mode réalisé dans de nombreuses ville de France telle que Toulouse,'
const text10 = 'Lyon, Sainte-anne... avec de nombreux collaborateur reconnu dans le domaine.'
const text11 = "Elle saura grace à des cours personnalisé vous permèttre d'aquérire des"
const text12 = "compétences indispensable et recherché dans le domain de la mode et couture."

const HomeContent: React.FC = () => {

  return (
    <div>
      <Divider plain><div className="AppText" style={{ fontSize: 'x-large' }}>Acceuil</div></Divider>
      <div style={{ marginTop: '4rem' }}>
        <div style={style1}>
          <img src={home} alt="home 1" />
          <div style={style2}>
            <p>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text0}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text1}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text2}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text3}</div>
            </p>
          </div>
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, lightskyblue, royalblue)',
        width: '78%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <div style={style2}>
            <p>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text4}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text5}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text6}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text7}</div>
            </p>
          </div>
          <img src={carou2} alt="carou2 " />
        </div>
      </div>
      <div style={{
        display: 'inline-block',
        background: 'linear-gradient(to right, royalblue, midnightblue)',
        width: '78%',
        height: '6rem'
      }} />
      <div>
        <div style={style}>
          <img src={defile_TLS} alt="defile_TLS 1" />
          <div style={style2}>
            <p>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text8}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text9}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text10}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text11}</div>
              <div style={{ margin: '1rem', fontSize: '1.2em' }}>{text12}</div>
            </p>
          </div>
        </div>
      </div>
      <Divider plain>
        <div className='AppText'>Copyright Alietta Creation - Tous droits réservés</div>
      </Divider>
      <div style={{
        display: 'inline-block',
        background: '#001529',
        width: '100%',
        height: '6rem'
      }} />
    </div>
  )
}

export default React.memo(HomeContent)