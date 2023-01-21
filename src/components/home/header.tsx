import MainHeading from "./mainHeading"

export default function Header() {
	return (
		<header
			className="min-h-[90vh]
			bg-[url('../../public/hero.jpg')]
			bg-cover
			relative"
		>
			<div
				className="absolute top-0 right-0 left-0 bottom-0
			bg-black bg-opacity-70
			flex items-center justify-center"
			>
				<MainHeading />
			</div>
		</header>
	)
}
