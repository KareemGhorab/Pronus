export default function Paragraph(props: { className?: string }) {
	const { className = "" } = props
	return (
		<p
			className={`indent-5 px-3 md:px-10 max-w-7xl font-semibold mx-auto text-lg 
        ${className}`}
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. In incidunt totam
			voluptate similique iure, beatae minus soluta consectetur non, illo
			doloribus magni nesciunt fugiat pariatur veniam qui! Doloremque maxime
			similique beatae cum libero amet nemo. Blanditiis, est. Quidem aliquid ea
			sequi amet nihil, unde nobis sint esse reiciendis nesciunt dolorum
			delectus quasi! Odit tenetur quod delectus facilis quia omnis minus veniam
			aliquid magnam eos hic, recusandae doloribus fuga? At illo illum commodi
			consectetur, sit facilis deserunt aperiam expedita? Harum illum neque,
			alias, expedita ratione sint assumenda eum commodi, atque repellat laborum
			corporis inventore quia nisi tempore accusantium omnis cum amet.
		</p>
	)
}
