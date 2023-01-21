import Image, { type ImageLoader } from "next/image"
import { type Service } from "./interface"

export default function ServiceItem(props: {
	className?: string
	service: Service
}) {
	const {
		className = "",
		service: { image, title, description },
	} = props
	return (
		<article
			className={`
				border rounded-lg overflow-hidden
				${className}`}
		>
			<figure className="w-full h-64 mb-4">
				<Image
					className="w-full h-full object-cover"
					src={"/" + image}
					alt={title}
					width="1000"
					height="1000"
				/>
			</figure>
			<section className="text-center px-2 pb-5">
				<h3 className="font-bold text-2xl mb-2">{title}</h3>
				<p className="text-base">{description}</p>
			</section>
		</article>
	)
}
