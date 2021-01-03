import { Carousel } from "antd"
import React from "react"
import './content.component.css'

const contentStyle = {
  height: '750px',
  color: '#fff',
  lineHeight: '160px',
  background: '#364d79',
};

const ContentComponent: React.FC = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  )
}

export default React.memo(ContentComponent)