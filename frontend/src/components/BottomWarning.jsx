import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}) {
	return <div className="flex justify-center p-1">
		<div className="text-md">
			{label}
		</div>
		<Link className="underline pl-1" to={to}>
		{buttonText}
		</Link>
	</div>
}