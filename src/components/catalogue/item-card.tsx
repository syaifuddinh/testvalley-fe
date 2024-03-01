export default function ItemCard({
	title,
	src,
	discount,
	price,
	rating
}) {
	return (
		<div>
			<div className="relative mb-3">
				<img
					src={src}
					loading="lazy"
					className="h-[174px] w-auto"
				/>

				<div className="absolute bg-primary2 font-medium text-sm flex rounded-[2px] p-1 bottom-0 left-0">
					<img src="https://www.testvalley.kr/common/return-new.svg" loading="lazy" />
					<div className="text-white">
						리턴 가능
					</div>
				</div>
			</div>
			<div className="text-[15px] mt-1 leading-[21px] text-black text-ellipsis">
				{ title }
			</div>

			<div className="flex font-semibold text-[18px] mt-2">
				<div className="text-orange1">
					{ discount }
				</div>
				<div>
					{ price }
				</div>
			</div>

			<div className="flex">
				<img
					src="https://www.testvalley.kr/star/star-darkgray.svg"
					loading="lazy"
				/>
				<div className="text-black text-xs font-medium">
					{ rating }
				</div>
			</div>
		</div>
	)
}