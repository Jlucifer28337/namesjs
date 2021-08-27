import { useState } from 'react';
import './App.css';
import { LeftList } from './LeftList';
import { generateName } from './NamesHelper';
import { RightList } from './RightList';

const App = () => {
  const [names, setNames] = useState(generateName())
  const [rightSelectedNames, setRightSelectedNames] = useState([])
  const [leftSelectedNames, setLeftSelectedNames] = useState([])
  const [transferNames, setTransferNames] = useState([])

  const handleClick = () => {
    setTransferNames(leftSelectedNames)
    setLeftSelectedNames([])
  }

  const removeRightItems = () => {
    setTransferNames(transferNames.filter(item => !rightSelectedNames.includes(item)))
    setRightSelectedNames([])
  }

  const clearLeft = () => {
    setNames([])
  }

  const clearRight = () => {
    setTransferNames([])
  }

  return (
    <>
    <div className="App" style={{display: 'flex'}}>
      <LeftList 
        names={names} 
        selectedNames={leftSelectedNames} 
        setSelectedNames={setLeftSelectedNames}
      />
      <RightList
        names={transferNames}
        selectedNames={rightSelectedNames} 
        setSelectedNames={setRightSelectedNames}
      />
    </div>
    <button style={{width: 100, margin: '10px auto', marginRight: 10}} onClick={handleClick}>click</button>
    <button style={{width: 100, margin: '10px auto'}} onClick={removeRightItems}>remove right items</button>
    <button onClick={clearLeft}>clear Left List</button>
    <button onClick={clearRight}>clear Right List</button>
    </>
  )
}

export default App;
