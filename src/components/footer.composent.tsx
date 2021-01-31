import React from "react"
import { Divider } from 'antd';

const FooterComposent: React.FC = () => {

  return (
    <>
      <Divider plain>
        <div className='AppText'>Copyright Alietta Creatiion - Tous droits réservés</div>
      </Divider>
      <div style={{
        display: 'inline-block',
        background: '#001529',
        width: '100%',
        height: '6rem'
      }} />
    </>
  )
}

export default React.memo(FooterComposent)
