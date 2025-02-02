import pizza from '../assets/pizza.webp'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.png'
import time from '../assets/time.png'
import star from '../assets/star.png'
import starOutline from '../assets/star-outline.png'
import tomatocut from '../assets/tomatocut.png'

function Hero() {
	let title: string = "ipsum dolor sit amet consectetur adipisicing elit.";
	let subtitle: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias facere, reiciendis ut quisquam odit vero earum quibusdam optio sit veniam est aliquam voluptatibus! Veniam minus quam neque iusto asperiores!";

	return (
		<div className="bg-orange-50 h-[600px]">
			<div className="flex items-center justify-center p-5 max-w-7xl mx-auto relative"> {/** @todo p-5, mx-auto, relative, w-1/2 space-y-6 px-10 relative? */}
				<div className="w-1/2 space-y-6 px-10 relative">
					<div className='flex gap-2'>
						<img src={playstore} alt="" className='w-28 h-10' />
						<img src={appstore} alt="" className='w-28 h-10' />
					</div>
					<h1 className='font-bold text-6xl tracking-normal'><span className='text-red-500'>Lorem </span>{title}</h1>
					<p className='text-sm text-gray-600 my-3'>{subtitle}</p>
					<div className='flex gap-3'>
						<button className='bg-red-500 z-10 px-3 py-2 rounded-lg text-white hover:bg-red-600 hover:scale-110 transition-all'>Order Now</button>
						<button className='bg-white px-3 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-white hover:scale-110 transition-all'>Contact Now</button>
					</div>
				</div>
				<div className="lg:w-1/2 w-[275px] relative">
					<img src={pizza} alt="pizza.webp" className='mx-auto spin' />
					<div className='bg-red-50 gap-1 text-lg flex border-red-200 border items-center absolute  bottom-16 right-14 px-4 py-2 rounded-full'>
						<img src={time} alt="" className='w-12 h-12' />
						<p className='leading-4 text-sm font-semibold'>Super fast</p>
					</div>
					<div className='bg-red-50 leading-none flex flex-col gap-1 text-lg px-4 py-2 border-red-200 border  absolute top-10 right-36 rounded-full items-center'>
						<p className='leading-4 text-sm font-semibold '>Good Rating</p>
						<div className='flex '>
							<img src={star} width={15} height={15} alt='star' />
							<img src={star} width={15} height={15} alt='star' />
							<img src={star} width={15} height={15} alt='star' />
							<img src={star} width={15} height={15} alt='star' />
							<img src={starOutline} width={15} height={15} alt='star' />
						</div>
					</div>
					<div className='flex flex-col bg-red-50 border-red-200 border  px-6 py-2 absolute top-32 left-44 lg:top-16 lg:left-24  rounded-full items-center'>
                        <h1 className=' text-red-500 lg:text-2xl text-xl font-bold'>100+ </h1>
                        <p className=' text-sm font-semibold'>Restaurants </p>
                    </div>
					<img src={tomatocut} alt="tomato" className='absolute w-32 bottom-20 left-4'/>
				</div>
			</div>
		</div>
	);
}
export default Hero;