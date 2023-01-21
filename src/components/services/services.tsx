import Title from "../ui/title/title"
import { type Service } from "./interface"
import ServiceItem from "./serviceItem"

const list: Service[] = [
	{
		title: "Imports & Exports",
		image: "import-export.jpg",
		description:
			"If you need ANY goods transferred from or into Turkey, you can rely on us.",
	},
	{
		title: "Freight & Delivery",
		image: "delivery.jpg",
		description:
			"Whether it's land, sea or air shipping you need, we've got you.",
	},
	{
		title: "Marketing",
		image: "marketing.jpg",
		description:
			"If you want to take your brand to the next level, you can surely rely on us.",
	},
	{
		title: "Web Development",
		image: "web-dev.jpg",
		description:
			"Wanna boost your digital presence? leave it to us to develop your unique website.",
	},
]

export default function Services() {
	return (
		<section
			className="grid
            grid-cols-1 gap-10 p-10
            sm:grid-cols-2
            lg:grid-cols-4"
		>
			<Title className="col-span-full" title="Our Services" />
			{list.map((service) => (
				<ServiceItem key={service.title} service={service} />
			))}
		</section>
	)
}
