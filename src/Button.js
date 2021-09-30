const Button =(props)=>{
    return(
        <button className="btn btn-dark" onClick={()=>props.handleCart(props.type)} 
            disabled={props.counter<1?true:false}>
            <b>{props.value}</b>
        </button>
    )
}
export default Button;