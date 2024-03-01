import Image from "next/image"
import SearchInput from "@/components/input/search"

export default function Menubar({ className }) {
	return (
		<div className="mx-auto max-w-[960px] md:h-[72px] h-[55px] flex items-center justify-between border-b border-gray2">
			<div className="flex items-center">	
				<div className="h-[25.093px] md:ml-0 ml-5 mr-4">
					<Image
						src="https://www.testvalley.kr/logo/logo-new.svg"
						width={128.345}
						height={25.093}
					/>
				</div>

				<div className="md:flex hidden gap-[2px] md:items-center h-[19.06px]">	
					<img
						src="https://www.testvalley.kr/common/icon-category.svg"
						loading="lazy"
						className="w-[16px] h-[16px]"
					/>
					<div className="text-primary ml-1">
						카테고리
					</div>
				</div>

				<SearchInput
					placeholder="살까말까 고민된다면 검색해보세요!"
					className="ml-[90px] hidden md:block"
				/>
			</div>

			<div className="md:flex hidden items-center">	
				<img
					src="https://www.testvalley.kr/common/home-event.svg"
					loading="lazy"
				/>
				<img
					src="https://www.testvalley.kr/common/vertical-bar.svg"
					loading="lazy"
					className="ml-2"
				/>
				<div className="ml-3 -tracking-[0.5px] text-black text-sm font-medium">	
					로그인 / 회원가입
				</div>
			</div>	

			<div className="flex md:hidden gap-3 pr-3">
				<img
					src="https://www.testvalley.kr/common/bell_default.svg"
					loading="lazy"
				/>
				<img
					src="https://www.testvalley.kr/common/search_new.svg"
					loading="lazy"
				/>
			</div>
		</div>
	)
}