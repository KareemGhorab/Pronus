import React from "react"
import { useForm, type SubmitHandler } from "react-hook-form"

enum Service {
	Import,
	Export,
	Delivery,
	Marketing,
	WebDevelopment,
}

type FormValues = {
	name: string
	email: string
	service: Service
	message: string
}

export default function App() {
	const { register, handleSubmit } = useForm<FormValues>()
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
	}

	return (
		<form
			className="
		rounded-xl border
		flex flex-col gap-5
		p-10 mx-10"
			onSubmit={handleSubmit(onSubmit)}
		>
			<input placeholder="Name" {...register("name")} />
			<input placeholder="Email" {...register("email")} />

			<select>
				<option>Type of Service</option>
			</select>

			<textarea placeholder="Message" rows={10} {...register("message")} />

			<input
				className="
			cursor-pointer 
			font-semibold
			bg-red-500 text-white
			rounded-full py-2
			hover:bg-red-700"
				type="submit"
			/>
		</form>
	)
}
