import React from "react"

export default function Title(props: {className?: string, title: string}) {
    const {className = "", title} = props
	return <h2 className={`font-bold text-4xl text-center ${className}`}>
        {title.toUpperCase()}
    </h2>
}
