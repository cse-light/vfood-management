import React from 'react'
import "./styles.css"
import Card from '../../Components/Card/Card'
import InnerCard from '../../Components/Card/InnerCard'
import Goldcard from '../../Components/Card/GoldCard'
import Back from '../../Components/BackButton/Back'

const Description = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <img src='Assets/pizza2.png' alt='' className='demo' />
      <Back />
      <Card height={32}  >
        <Goldcard text1={"Tomato pizza"} text2={"9$"} />
        </Card>
        <Card height={129}>
          <h2 className='goldt'>Description:-</h2>
          <h4></h4>
        </Card>
    </div>
  )
}

export default Description
