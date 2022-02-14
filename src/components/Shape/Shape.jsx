import React from 'react'
import style from './Shape.module.scss'

const Shape = props => {
  return (
    <object className={style.shape} data={props.icon} width="255" height="255"> </object>
  )
}

export default Shape
