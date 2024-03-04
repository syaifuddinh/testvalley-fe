import ItemCard from "./item-card";

type ItemType = {
	id: string|number,
	src: string,
	title: string,
	discount: string|number,
	price: string|number,
	rating: number|string
}

export default function Catalogue({
	title,
	subtitle,
	items,
	className = "" 
}: {
	title: string,
	subtitle: string,
	items: ItemType[],
	className?: string
}) {
	return (
		<div className={`px-[12%] flex flex-col md:flex-row gap-5 md:gap-0 ${className}`}>
			<div className="min-w-[240px] pr-[40px]">
				<div className="text-[24px] text-black leading-[32px] font-semibold">
					{ title }
				</div>
				<div className="mt-2 font-medium text-xs text-gray3">
					{ subtitle }
				</div>
			</div>

			<div className="grid grid-cols-2 md:flex gap-5 md:gap-2  md:*:min-w-[25%] md:*:max-w-[25%] overflow-hidden flex-wrap md:flex-nowrap">
				{ items.map(item => (
					<ItemCard
						key={item.id}
						src={item.src}
						title={item.title}
						discount={item.discount}
						price={item.price}
						rating={item.rating}
					/>
				)) }				
			</div>
		</div>
	)
}