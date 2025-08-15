export const Balance = ({value}) => {
	return <div className="flex items-center shadow-lg h-14 font-bold rounded-lg ml-5">
		<div className="px-8 pr-4">
			Your balance: 
		</div>
		<div className="">
			Rs.10000{value}
		</div>
	</div>
}