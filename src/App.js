import './App.css';
import Card from './components/Card/Card'
import Board from './components/Board/Board'

function App() {
  const shapeList = [
    {id: 1, order: 1, type: 'circle'},
    {id: 2, order: 2, type: 'triangle'},
    {id: 3, order: 4, type: 'square'},
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <Board>
          {shapeList.map(card =>
            <Card
              key={card.id}
              id={card.id}
              text={card.type}
            />
          )}
        </Board>

        <Board />
      </div>
    </div>
  );
}

export default App;
