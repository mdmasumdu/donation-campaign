/* eslint-disable react/prop-types */

import Card from "./Card";


const Cards = ({filter}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2">

            {
                filter.map(card=><Card key={card.id} card={card}></Card>)
            }
            
        </div>
    );
};

export default Cards;