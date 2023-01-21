export default function MainHeading(props: { className?: string }) {
	const { className = "" } = props
	return (
		<div
			className={`
        text-white text-center
        ${className}`}
		>
			<h1
				className="text-red-600
				text-8xl
                md:text-9xl font-bold
                mb-4"
			>
				Pronus
			</h1>
			<p className="text-xl">We Simplify The Export Service</p>
		</div>
	)
}
