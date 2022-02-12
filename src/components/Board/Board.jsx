import React from 'react'
import styles from './Board.module.scss'

const Board = props => {
  const dropHandler = evt => {
    evt.preventDefault()

    const CARD_ID = evt.dataTransfer.getData('card-id')
    const card = document.querySelector(`[data-card-id="${CARD_ID}"]`)
    card.style.display = 'block'

    evt.target.appendChild(card)
  }

  const dragOverHandler = evt => {
    evt.preventDefault()
  }

  return (
    <div
      className={styles.board}
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      >
      { props.children }
    </div>
  )
}

/*
*  <div
      className={styles.board}
      onDrag={dropHandler}
      onDragLeave={dragLeaveHandler}
    >
      {shapeList.map(card =>
        <Card
          key={card.id}
          text={card.type}
          order={card.order}
        />
      )}
    </div>
* */

export default Board
