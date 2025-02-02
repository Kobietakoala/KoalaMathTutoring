import DishDataInterface from "../interface/DishDataInterface";

/** @todo fix any to interface */
function Card({menu}) {

	return (
		<div className="rounded-lg  border-red-500 flex flex-col items-center space-y-4 py-4 px-6 bg-orange-50 shadow-orange-500 shadow-md hover:scale-110 transition-all">
            <img src={menu.pizza} alt="" className="w-48"/>
            <h2>{menu.name}</h2>
            <p>{menu.desc}</p>
            <button className="bg-red-500 w-full px-3 py-2 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all">Order Now</button>
        </div>
	);
}
export default Card;