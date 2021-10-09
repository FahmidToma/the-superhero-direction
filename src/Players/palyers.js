import React, { useEffect, useState } from 'react';
import Cost from '../Cost/cost';
import Member from '../Member/member';
import './players.css';

const TotalNumber = () =>{
    const [players,setPlayers] = useState([]);
    const [totalCart,setTotalCart]= useState([]);

    useEffect(() => {
        fetch('./players.JSON')
        .then(res => res.json())
        .then(data => setPlayers(data));
    },[])
    const handleAddToCart= (player) =>{
        const newCart=[...totalCart,player];
        setTotalCart(newCart);
    }
    return (
        <div className="container">
            <div className="player-container">
                {
                    players.map(player => <Member
                        key={player.name} 
                        handleAddToCart={handleAddToCart}
                        player={player}></Member>)
                    
                }
                
            </div>
            <div className="total-container">
                <Cost totalCart={totalCart}></Cost>
            </div>
        </div>

    );
};

export default TotalNumber;