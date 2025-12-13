


function Reset({setClicks}){

    function resetCount(){
        setClicks(0)
    }
    return(
        <button
        onClick={resetCount}>Reset</button>
    )
}
 

function ButtonRender({clicks,setClicks}){
    function onClicks(){
        setClicks(clicks +1)
    }

    return(clicks == 1 ? 
        <button
        onClick= {onClicks}>
            Clicked {clicks} time
        </button> :
        <button
        onClick= {onClicks}>
            Clicked {clicks} times
        </button>
    );
}



function InputShit(){
    const [inputValue,setInputValue] = React.useState('')
    const example = 'Santiago'

    function saveInput(event){
        setInputValue(event.target.value)
    }

    function putExample(){
        setInputValue(example)
    }

    function reset(){
        setInputValue('')
    }

    return (
        <div>
            <input 
            onChange={saveInput}
            type="text"
            placeholder="Di algo puto"
            value= {inputValue}
            />
            <p>Hola {inputValue}</p>
            
            <button
            onClick={reset}>Reset</button>
            
            <button
            onClick={putExample}>Example</button>
        
        </div>
    )
}




function App(){
    const [clicks,setClicks] = React.useState(0)
    return (
    <>
        <ButtonRender 
        clicks={clicks}
        setClicks={setClicks}/>

        <Reset
        setClicks={setClicks}/>

        <InputShit />
    </>
    );
}


const container = document.querySelector('.js-container');
const rootContainer = ReactDOM.createRoot(container);

rootContainer.render(<App />)

