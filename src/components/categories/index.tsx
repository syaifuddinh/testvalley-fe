type CategoryType = {
	id: string|number,
	src: string,
	title: string
}

export default function Categories({ items, className }: { items: CategoryType[], className?: string }) {
	return (
		<div className={`max-w-[960px] mx-auto py-4 ${className} grid md:grid-rows-1 md:grid-flow-col grid-cols-5 gap-y-6`}>
			{ items.map(item => (
				<div
					key={item.id}
					className="flex flex-col items-center min-w-[62px] mx-[18px]"
				>
					<img
						src={item.src}
						loading="lazy"
						className="h-[62px] w-[62px]"
					/>

					<div className="mt-2 text-[13px] text-black -tracking-[0.3px]">
						{ item.title }
					</div>
				</div>
			)) }
		</div>
	)
}