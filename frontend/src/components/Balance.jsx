export const Balance = ({value}) => {
	return <div className="flex shadow h-full ">
		<div>
			Your balance
		</div>
		<div>
			{value}
		</div>
	</div>
}