import React from 'react';
import Button from "./Button";
import Counter from "./Counter";
import Products from './Products';
class Koszyk extends React.Component{
    state ={
        counter: 0,
        products: 10
    }
    handleCart =(type)=>{
        if(type ==="subtract"){ 
            this.setState({
                counter: this.state.counter -1,
            })
        }      
        else if(type==="add")
        if(this.state.products>this.state.counter){
            this.setState({
                counter: this.state.counter +1,
            })
        }
    }

    handleBuy =()=>{
            this.setState({
                counter: 0,
                products: this.state.products - this.state.counter,
            })
    }

    render(){
        const {counter, products} = this.state;
        return(
            <div className="container">
                <h2>Koszyk</h2>
                    
                <Button 
                    handleCart={this.handleCart} 
                    type={"subtract"} 
                    value={"-"} 
                    counter={counter}
                    products={products}
                />
                <Counter counter={counter}/>
                {this.state.products>this.state.counter&&
                    <Button handleCart={this.handleCart} type={"add"} value={"+"}/>
                }
                <br/>
                {this.state.counter ?
                    <button disabled={this.state.products<1?true:false} 
                        onClick={this.handleBuy} type="submit" className="btn btn-success">
                        Kup produkt
                    </button>
                :null}
                    <Products products={this.state.products}/>

                
            </div>
        )
    }
}
export default Koszyk;