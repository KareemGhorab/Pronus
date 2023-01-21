import Title from "../ui/title/title"
import Form from "./form"

export default function Contact(props: { className?: string }) {
	const { className = "" } = props

	return (
		<section className={`${className}`}>
			<Title className="mb-10" title="Contact Us" />
			<h4 className="text-center text-2xl
			text-red-700 font-bold mb-6">Get Your Price Offer Now</h4>
			<Form />
		</section>
	)
}
