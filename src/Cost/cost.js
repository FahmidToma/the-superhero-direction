import react from "react";
import './cost.css';

const Cost= (props) =>{
    const {totalCart}=props;
    
    let total=0;
    let person='';
    for(const cost of totalCart){
        person = person+cost.name+' ';
        total = total+cost.salary;
    }
    
    return (
        <div>
            <h3>Players Added: {props.totalCart.length} </h3>
            <h3>Total Cost: $ {total}</h3>
            <p>{person}</p>
        </div>
    );
};

export default Cost;