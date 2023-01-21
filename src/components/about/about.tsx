import React from "react"
import Title from "../ui/title/title"
import Paragraph from "./paragraph"

export default function About(props: { className?: string }) {
	const { className = "" } = props
	return (
		<section className={`${className}`}>
			<Title title="About Us" className="mb-10" />
			<main>
				<Paragraph />
			</main>
		</section>
	)
}
