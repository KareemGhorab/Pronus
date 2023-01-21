import { type NextPage } from "next"
import Head from "next/head"
import { Element } from "react-scroll"

import About from "src/components/about/about"
import Contact from "src/components/contact/contact"
import Footer from "src/components/footer/footer"
import Cargo from "src/components/home/cargo"

import Header from "src/components/home/header"
import Services from "src/components/services/services"
import Nav from "src/components/ui/nav/nav"
import useWindow from "src/hooks/useWindow"

const Home: NextPage = () => {
	const { windowScroll } = useWindow()

	return (
		<>
			<Head>
				<title>Pronus</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav isWhite={windowScroll > 100} />
			<Header />
			<Element className="mt-20" name="services">
				<Services />
			</Element>
			<Cargo />
			<Element className="mt-20" name="about">
				<About />
			</Element>
			<Element className="mt-20" name="contact">
				<Contact />
			</Element>
			{/* <Footer /> */}
		</>
	)
}

export default Home
