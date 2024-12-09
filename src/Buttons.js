
export const Buttons = ({setPlayerHand, start, selectOption}) => {
    return (
        <>
        <div className="button-container">
        <button onClick={() => setPlayerHand(0)}>{selectOption(0)}</button>
        <button onClick={() => setPlayerHand(1)}>{selectOption(1)}</button>
        <button onClick={() => setPlayerHand(2)}>{selectOption(2)}</button>
        </div>
        <button onClick={start} className="start">Start</button>
        </>
    )
}