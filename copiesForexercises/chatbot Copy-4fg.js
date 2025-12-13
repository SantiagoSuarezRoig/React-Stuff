


function LoginForm() {
    const [isPassword,changeIsPassword] = React.useState(true)
    const [timeNow,changeTimeNow] = React.useState(dayjs().format('HH:mm:ss'))

    function showPassword(){
        changeIsPassword(!isPassword)
    }


    React.useEffect(()=>{
        setInterval(()=>{
            changeTimeNow(dayjs().format('HH:mm:ss'))
            console.log('This shit')
        },1000)
    },[])


    return (
        <>
            <p>Current Time: {timeNow}</p>
            <div>
                <input placeholder="Email" />
            </div>
            <div>
                <input placeholder="Password" type={isPassword? 'password':'text'} />
                <button onClick={showPassword}>{isPassword? 'Show':'Hide'}</button>
            </div>
            <button>Login</button>
            <button>Sign up</button>
        </>
    );
}

function App() {
return (
    <>
    <p>Hello, welcome to my website</p>
    <LoginForm />

    </>
);
}

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);