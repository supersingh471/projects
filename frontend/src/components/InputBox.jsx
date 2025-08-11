export function InputBox({label, placeholder}) {
	return <div className="text-sm font-medium text-left py-2">
		<div>
			{label}
		</div>
		<input placeholder={placeholder} className="border rounded border-slate-200 w-full py-2 px-1"/>
	</div>
}