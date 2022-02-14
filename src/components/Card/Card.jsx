import React from 'react'
import styles from './Card.module.scss'
import Shape from '../Shape/Shape'

const Card = props => {
  const dragStartHandler = evt => {
    const { target } = evt
    evt.dataTransfer.setData('card-id', target.id)
  }

  const dragOverHandler = evt => {
    evt.stopPropagation()
  }

  const dragEndHandler = evt => {
    evt.preventDefault()
  }

  return (
    <div
      className={styles.card}
      data-card-id={props.id}
      id={props.id}
      draggable={true}
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={dragOverHandler}
    >
      <Shape icon={props.icon}/>
    </div>
  )
}
export default Card

