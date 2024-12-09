
export const Containers = ({playerShake, runTimer, timer, results, robotShake}) => {
    return (
        <div className="large-container">
        {playerShake()}
          {
          runTimer == true && timer > 0 ? 
          <div className="container2">{timer}</div> 
          : 
          <>
            {
            results?.winner && timer < 1 ? 
            <div className="results">
              <p>{results.winner}</p>
              <p>{results.message}</p>
              </div> 
            :
            <div className="invisible-container"></div>
            }          
          </>
          }
          {robotShake()}
        </div>
    )
}