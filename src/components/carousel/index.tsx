import CircleButton from "@/components/button/circle"
import Bullet from "@/components/bullet"

type ImageType = {
	id: string|number,
	src: string
}

export default function Carousel({ images, className }: { images:ImageType[], className?: string }) {
	return (
		<div className="carousel max-w-[960px] mx-auto">
			<div className="carousel_control w-full h-[210px] md:h-[320px] relative flex items-center justify-center px-4 z-10">
				<div className="flex gap-1 absolute bottom-3 z-10">
					<Bullet isActive={true} />
					<Bullet />
					<Bullet />
					<Bullet />
					<Bullet />
				</div>

				<div className="w-full flex justify-between relative z-10">
					<CircleButton>
						<img src="/icons/white/arrow-back.svg" loading="lazy" />
					</CircleButton>				

					<CircleButton>
						<img src="/icons/white/arrow-forward.svg" loading="lazy" />
					</CircleButton>				
				</div>

				<div className="carousel_images absolute w-full h-[210px] md:h-[320px] *:absolute">	
					{ images.map(image => (
						<div key={image.id}>	
							<img
								src={image.src}
								loading="lazy"
								className="h-[210px] md:h-[320px] w-auto"
							/>
						</div>	
					)) }
				</div>
			</div>
		</div>
	)
}