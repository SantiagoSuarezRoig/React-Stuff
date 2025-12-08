



function PriceProduct({name,price,discountPrice,imagSrc}){
    return(
        <div>
            <img src={imagSrc} width="150"></img>
            <p>{name}</p>
            {discountPrice?
            (<>  
                <del><p>Price: ${price}</p></del>
                <p>Discount Price: ${discountPrice}</p>
            </>) 
            : (<p>Price: ${price}</p>)}

            <button>Add to Cart</button>    
        </div>
    )
}


function App(){
    return (
    <>
        <PriceProduct 
            name="Cotton socks"
            discountPrice="5.45"
            price="10.90"
            imagSrc='images/cotton-socks.png' />
        <PriceProduct 
            name="Tennis Ball"
            price="6.00"
            imagSrc='images/tennis-balls.png' />
        <PriceProduct 
            name="Plain T-shirt"
            discountPrice="5.45"
            price="7.99"
            imagSrc='images/plain-t-shirt.png' />
    </>
    );
}


const container = document.querySelector('.js-container');
const rootContainer = ReactDOM.createRoot(container);

rootContainer.render(<App />)

