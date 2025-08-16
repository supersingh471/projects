import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";


export const SendMoney = () => {
	return <div className="flex justify-center items-center h-screen bg-slate-900">
		<div className="flex flex-col rounded-xl shadow-xl shadow-glow bg-white w-120 h-100">
			<div className="flex justify-center items-center ">
				<Heading label={"Send Money"}/>
			</div>
			<div className="flex flex-col px-10 py-30">
				<div className="flex">
			<div className="flex justify-center items-center w-14 h-14 bg-green-500 text-white text-2xl rounded-4xl">
				A
			</div>
			<div className="m-3 font-semibold text-2xl">Friend's Name</div>
			</div>
			<div className="">
				<InputBox label={"Amount (in Rs)"} placeholder="Enter amount"/>
			</div>
			<div className="flex justify-center items-center mt-4 bg-green-500 font-semibold text-white h-10 rounded-md">
				<button>Initiate Transfer</button>
			</div>
			</div>
		</div>
	</div>
}