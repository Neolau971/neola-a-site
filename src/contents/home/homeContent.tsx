import { Carousel } from "antd"
import React from "react"
import defile from '../../pictures/defile_TLS.jpg'
import robe_rouge from '../../pictures/robe_rouge.jpg'
import tenue_casino from '../../pictures/tenue_casino.jpg'

const HomeContent: React.FC = () => {

  return (
    <Carousel autoplay>
      <div>
        <img src={defile} alt="slide 1" />
      </div>
      <div>
        <img src={robe_rouge} alt="slide 1" />
      </div>
      <div>
        <img src={tenue_casino} alt="slide 1" />
      </div>
    </Carousel>
  )
}

export default React.memo(HomeContent)