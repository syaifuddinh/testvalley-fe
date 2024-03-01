export default function SearchInput({ placeholder, className = "" }) {
	return (
		<div className={`search-input flex items-center relative ${className}`}>	
			<img
				src="https://www.testvalley.kr/common/search.svg"
				loading="lazy"
				className="absolute left-3 top-2 w-[20px] h-[20px]"
			/>
			<input
				type="text"
				placeholder={placeholder}
				className="border border-gray1 min-w-[335px] px-[40px] py-[12px] rounded-[4px] focus:border-primary focus:outline-none text-sm -tracking-[0.5px] text-black h-[41.31px]"
			/>
		</div>	
	)
}