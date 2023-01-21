import { useState } from "react"
import NavItem from "./navItem"
import { type Li } from "./interface"

const list: Li[] = [
	{ title: "SERVICES", href: "services" },
	{ title: "ABOUT US", href: "about" },
	{ title: "CONTACT US", href: "contact" },
]

export default function NavList(props: {
	className?: string
	isWhite: boolean
}) {
	const { className = "", isWhite } = props

	return (
		<ul className={`flex gap-8 font-semibold ${className}`}>
			{list.map((li) => (
				<NavItem
					className={isWhite ? "nav__item--white" : "nav__item--transparent"}
					key={li.title}
					li={li}
				/>
			))}
		</ul>
	)
}
