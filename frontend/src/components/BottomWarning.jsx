import { Link } from "react-router-dom"

export function BottonWarning({label, buttonText, to}) {
	return <div className="flex justify-center p-1">
		<div className="text-md">
			{label}
		</div>
		<Link className="underline pl-1" to={to}>
		{buttonText}
		</Link>
	</div>
}