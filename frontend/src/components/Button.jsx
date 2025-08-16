export function Button({label, onClick}) {
	return (
		<div className="">
			<button onClick={onClick} className="bg-black text-white rounded-sm w-full py-2">{label}</button>
		</div>
	)
}