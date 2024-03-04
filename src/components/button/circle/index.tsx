export default function CircleButton({ children }: { children: any }) {
	return (
		<div className="circle-button w-[44px] h-[44px] bg-black2 rounded-[50%] flex items-center justify-center cursor-pointer">
			{ children }
		</div>
	)
}