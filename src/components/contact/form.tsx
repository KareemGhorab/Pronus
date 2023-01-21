import React from "react"
import { useForm, type SubmitHandler } from "react-hook-form"

type FormValues = {
	name: string
	email: string
	service: string
	message: string
}

const options = [
	{
		label: "Import/Export",
		value: "importExport",
	},
	{
		label: "Delivery",
		value: "delivery",
	},
	{
		label: "Marketing",
		value: "marketing",
	},
	{
		label: "Web Development",
		value: "webDevelopment",
	},
]

export default function App() {
	const { register, handleSubmit } = useForm<FormValues>()
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data)
	}

	return (
		<form
			className="
		rounded-xl border
		flex flex-col
		p-10 mx-10"
			onSubmit={handleSubmit(onSubmit)}
		>
			<input placeholder="Name" {...register("name")} />
			<input className="my-4" placeholder="Email" {...register("email")} />

			<label className="flex flex-col gap-2 mb-4">
				Type of Service
				<select>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</label>

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
