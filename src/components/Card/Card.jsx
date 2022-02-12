import React from 'react'
import styles from './Card.module.scss'

const Card = props => {
  const dragStartHandler = evt => {
    const { target } = evt
    evt.dataTransfer.setData('card-id', target.id)

    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  const dragOverHandler = evt => {
    evt.stopPropagation()
  }

  const dragEndHandler = evt => {
    console.log('end', evt.target)
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
      {/*{ props.children }*/}
      { props.text }
    </div>
  )
}
export default Card

