

function ButtonShit(){
    const [clicks, setClicks]= React.useState(0);
    const [autoClickingInterval,setAutoClickInterval] = React.useState(0)
    const [isAutoClicking,changeAutoClicking] = React.useState(false);
    
    const ClickBtnRef = React.useRef(null);

    function clickShit(){
        setClicks(clicks+1)
    }

    function reset(){
        setClicks(0)
    }

    function autoClick(){
        if(isAutoClicking){
            clearInterval(autoClickingInterval);
            changeAutoClicking(false);
            return;
        }

        changeAutoClicking(true)
        const ClicksBtnElem = ClickBtnRef.current
        if(ClicksBtnElem){            
            setAutoClickInterval(setInterval(()=>{
                ClicksBtnElem.click()
            },1000))
        }

    }

    return (
        <div>
            
            <button
            onClick={clickShit}
            ref= {ClickBtnRef}>
            Clicked {clicks} {clicks == 1 ? 'time':'times'}
            </button>
            
            <button
            onClick={reset}>reset</button>
        
            <button
            onClick={autoClick}>
                {isAutoClicking? 'Stop AutoClicking':'AutoClick'}
            </button>
        
        </div>
    )
}




function App(){

    return (
    <>

        <ButtonShit />
    </>
    );
}


const container = document.querySelector('.js-container');
const rootContainer = ReactDOM.createRoot(container);

rootContainer.render(<App />)

