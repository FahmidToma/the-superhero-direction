import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './member.css';

const Member = (props) =>{

    const {name,Role,Age,Country,salary,image} =props.player;
    const addIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return(
        <div className='members'>
            <img src={image} />
            <h3>{name}</h3>
            <p><strong>Role:</strong> {Role}</p>
            <p><strong>Age:</strong> {Age}</p>
            <p><strong>Country:</strong> {Country}</p>
            <p><strong>Salary:</strong> $ {salary}</p>
            <button  
            onClick={()=>props.handleAddToCart(props.player)}
            className='btn-primary'>
               {addIcon} Add To Cart</button>
        </div>
        
    );
};

export default Member;