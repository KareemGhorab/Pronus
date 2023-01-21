import { Link } from "react-scroll"
import { type Li } from "./interface"

export default function NavItem(props: { className?: string; li: Li }) {
	const {
		className = "",
		li: { title, href },
	} = props

	return (
		<li>
			<Link
				to={href}
				smooth={true}
				className={`
				cursor-pointer
				rounded-full
				py-1 px-2
				hover:bg-red-600
				hover:text-white
				${className}`}
			>
				{title}
			</Link>
		</li>
	)
}
