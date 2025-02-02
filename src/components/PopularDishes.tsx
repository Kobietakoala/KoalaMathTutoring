import pizza1 from '../assets/pizza1.png'
import pizza2 from '../assets/pizza2.png'
import pizza3 from '../assets/pizza3.png'
import DishDataInterface from '../interface/DishDataInterface.ts';
import Card from './Card.tsx';

const menu: DishDataInterface[] = [
    {
        id: 0,
        pizza: pizza1,
        name: "Peperoni pizza",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        rating: 4
    }, {
        id: 1,
        pizza: pizza2,
        name: "Sushi pizza",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        rating: 5
    }, {
        id: 2,
        pizza: pizza3,
        name: "Margarita pizza",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        rating: 4
    }
];

function PopularDishes() {
    let title: string = "Popular Dishes";
    let subtitle: string = "Check out our most popular and highly rated dishes";

    return (
        <div className='py-20 bg-gray-800'>
            <div className='text-center max-w-7xl mx-auto'>
                <h1 className='font-bold text-4xl text-red-400'>{title}</h1>
                <p className='text-xl text-white pt-2'>{subtitle}</p>
                <div className='grid grid-cols-3 pt-11 gap-7'>
                    {
                        menu.map((item) => {
                            return <Card key={item.id} menu={item} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default PopularDishes;