import logo from "@/public/logo.png"
import Image from "next/image"
import NavList from "./navList"

export default function Nav(props: { className?: string, isWhite: boolean }) {
	const { className = "", isWhite } = props

	return (
		<nav
			className={`
            z-20
            ${isWhite? "nav--white" : "nav--transparent"}
            w-full py-7 px-9
            fixed
            flex items-center
            ${className}`}
		>
			<figure className="w-28">
				<Image className="w-full" src={logo} alt="Pronus Logo" />
			</figure>
			<div className="flex-grow">
				<NavList isWhite={isWhite} className="mx-auto w-fit" />
			</div>
		</nav>
	)
}
