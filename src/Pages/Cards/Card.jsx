/* eslint-disable react/prop-types */

const Card = ({card}) => {

    const {Title,Picture,Category,Color_for_category_bg,Color_for_card_bg,Text_color} =card;


    console.log(Color_for_card_bg)
    return (
        <div>
            <div className={`card  shadow-x ${Color_for_card_bg} flex flex-col `}>
  <figure className="h-60"><img src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className={`card-title ${Color_for_category_bg} ${Text_color}`}>{Category}</h2>
    <p className={`${Text_color}`}>{Title}</p>
  </div>
</div>
        </div>
    );
};

export default Card;