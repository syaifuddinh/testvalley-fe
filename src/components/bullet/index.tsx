export default function Bullet({ 
	isActive = false, 
	className = "" 
}) {
	return (
		<div className={`${isActive === false ? "bg-black opacity-20" : "bg-white"}  w-[8px] h-[8px] rounded-[50%] `}>
		</div>
	)
}