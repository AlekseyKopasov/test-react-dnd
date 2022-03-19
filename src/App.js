import './App.css';
import Card from './components/Card/Card'
import Board from './components/Board/Board'

import circle from './svg/circle.svg'
import block from './svg/block.svg'
import square from './svg/square.svg'
import ellipse from './svg/ellipse.svg'
import triangle from './svg/triangle.svg'

function App() {
  const shapeList = [
    {id: 1, icon: circle},
    {id: 2, icon: block},
    {id: 3, icon: square},
    {id: 4, icon: ellipse},
    {id: 5, icon: triangle},
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <Board>
          {shapeList.map(card =>
            <Card
              key={card.id}
              id={card.id}
              icon={card.icon}
            />
          )}
        </Board>

        <Board />
      </div>
    </div>
  );
}

export default App;
