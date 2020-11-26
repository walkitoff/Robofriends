import React from 'react';
import Card from './Card';

//when you do a loop, you have to give it a unique key={} preferably dont use index use id or something that never changes
const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((_user, i) => {
                    return (
                        <Card 
                            key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    );
                })
            }
        </div> 
    );
}

export default CardList;