import './App.css';
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors, FaHandRock, FaHandPaper, FaHandScissors,  } from "react-icons/fa";
import { useState, useEffect } from 'react'

function App() {
  
  const [timer, setTimer] = useState(3)
  const [runTimer, setRunTimer] = useState(false)
  const [playerHand, setPlayerHand] = useState(0)
  const [robotHand, setRobotHand] = useState(0)
  const [score, setScore] = useState({
    player: 0,
    robot: 0
  })
  const [results, setResults] = useState({
    message: '',
    winner: ''
  })

  useEffect(() => {
    if(timer && runTimer > 0){
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    } else if(timer && runTimer < 1){
      setRunTimer(false)
      play()
    }
  }, [timer, runTimer])

  const objects = [
    {name: 'Rock', icon: <FaRegHandRock size={60}/>},
    {name: 'Paper', icon: <FaRegHandPaper size={60}/>},
    {name: 'Scissors', icon: <FaRegHandScissors size={60}/>},
  ]

  const start = () => {
    setRunTimer(true)
    setTimer(3)
    generateRobotHand()
  }

  const generateRobotHand = (randomNumber) => {
    randomNumber = Math.floor(Math.random() * 3)
    setRobotHand(randomNumber)
    console.log('Robot Hand:', randomNumber)
  }

  const selectOption = (index) => {
    if(index == 0){
      if(playerHand == 0){
        return (
          <FaHandRock />
        )
      } else {
        return (
          <FaRegHandRock />
        )
      }
    }
   if(index == 1){
    if(playerHand == 1){
      return (
        <FaHandPaper />
      )
    } else {
      return (
        <FaRegHandPaper />
      )
    }
   }
   if(index == 2){
    if(playerHand == 2){
      return (
        <FaHandScissors />
      )
    } else {
      return (
        <FaRegHandScissors />
      )
    }
   }
  }

  const playerShake = () => {
    if(runTimer == true){
      if(timer >= 1){
        return (
          <div className="container1"><div className="playerShake">{objects[0].icon}</div></div>
        )
      } else if(timer < 1){
        return (
          <div className="container1">{playerObject()}</div> 
        )
      }
    } else {
      return (
        <div className="container1"></div>
      )
    }
  }

  const robotShake = () => {
    if(runTimer == true){
      if(timer >= 1){
        return (
          <div className="container3"><div className="robotShake">{objects[0].icon}</div></div>
        )
      } else if(timer < 1){
        return (
          <div className="container3">{robotObject()}</div> 
        )
      }
    } else {
      return (
        <div className="container3"></div>
      )
    }
  }

  const playerObject = () => {
    if(playerHand == 0){
      return (
        <>
        <FaRegHandRock size={60} />
          <p>{objects[0].name}</p>
        </>
      )
    } else if(playerHand == 1){
      return (
        <>
          <FaRegHandPaper size={60} />
          <p>{objects[1].name}</p>
        </>
      )
    } else if(playerHand == 2){
      return (
        <>
          <FaRegHandScissors size={60} />
          <p>{objects[2].name}</p>
        </>
      )
    }
  }

  const robotObject = () => {
    if(robotHand == 0){
      return (
        <>
        <FaRegHandRock size={60} />
          <p>{objects[0].name}</p>
        </>
      )
    } else if(robotHand == 1){
      return (
        <>
          <FaRegHandPaper size={60} />
          <p>{objects[1].name}</p>
        </>
      )
    } else if(robotHand == 2){
      return (
        <>
          <FaRegHandScissors size={60} />
          <p>{objects[2].name}</p>
        </>
      )
    }
  }

  const play = () => {
    // console.log('Player Hand:', playerHand, 'Robot Hand:', robotHand)
    if(timer < 1 && playerHand == robotHand){
      setResults({ message: 'We have a draw!', winner: 'No one!'})
    } else if(timer < 1 && playerHand == 0 && robotHand == 1){
      setResults({ message: 'Paper beats Rock!', winner: 'Robot'})
      setScore({ ...score, robot: score.robot + 1})
      console.log(`Winner: Robot Message: Paper beats Rock!`)
    } else if(timer < 1 && playerHand == 0 && robotHand == 2){
      setResults({ message: 'Rock beats Scissors!', winner: 'Player'})
      setScore({ ...score, player: score.player + 1})
      console.log(`Winner: Robot Message: Rock beats Scissors!`)
    } else if(timer < 1 && playerHand == 1 && robotHand == 0){
      setResults({ message: 'Paper beats Rock!', winner: 'Player'})
      setScore({ ...score, player: score.player + 1})
      console.log(`Winner: Player Message: Paper beats Rock!`)
    } else if(timer < 1 && playerHand == 1 && robotHand == 2){
      setResults({ message: 'Scissors beats Paper!', winner: 'Robot'})
      setScore({ ...score, robot: score.robot + 1})
      console.log(`Winner: Robot Message: Scissors beats Paper!`)
    } else if(timer < 1 && playerHand == 2 && robotHand == 0){
      setResults({ message: 'Rock beats Scissors!', winner: 'Robot'})
      setScore({ ...score, robot: score.robot + 1})
      console.log(`Winner: Robot Message: Rock beats Scissors!`)
    } else if(timer < 1 && playerHand == 2 && robotHand == 1){
      setResults({ message: 'Scissors beats Paper!', winner: 'Player'})
      setScore({ ...score, player: score.player + 1})
      console.log(`Winner: Player Message: Scissors beats Paper!`)
    }
  }

  console.log('Player Hand:', playerHand)

  return (
    <div className="main-page">
      <div className="title-container">
      <div className="title">Rock Paper Scissors!</div>
      </div>
      <div className="scores">
        <div className="player-score">Player: {score.player}</div>
        <div></div>
        <div className="robot-score">Robot: {score.robot}</div>
      </div>
      <div className="large-container">
        {playerShake()}
          {
          runTimer == true && timer > 0 ? 
          <div className="container2">{timer}</div> 
          : 
          <>
            {
            results?.winner && runTimer && timer < 1 ? 
            <div className="results">
              <p>{results.message}</p>
              <p>{results.winner}</p>
              </div> 
            :
            <div className="invisible-container"></div>
            }          
          </>
          }
          {robotShake()}
        </div>
        <div className="button-container">
        <button onClick={() => setPlayerHand(0)}>{selectOption(0)}</button>
        <button onClick={() => setPlayerHand(1)}>{selectOption(1)}</button>
        <button onClick={() => setPlayerHand(2)}>{selectOption(2)}</button>
        </div>
        <button onClick={start} className="start">Start</button>
    </div>
  );
}

export default App;
