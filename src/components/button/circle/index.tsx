export default function CircleButton({ children }) {
	return (
		<div className="circle-button w-[44px] h-[44px] bg-black2 rounded-[50%] flex items-center justify-center cursor-pointer">
			{ children }
		</div>
	)
}