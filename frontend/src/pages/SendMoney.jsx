import axios from "axios";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const SendMoney = () => {
	const [searchParam] = useSearchParams();
	const id = searchParam.get("id");
	const name = searchParam.get("name");
	const [amount, setAmount] = useState(0);

	return <div className="flex justify-center items-center h-screen bg-slate-900">
		<div className="flex flex-col rounded-xl shadow-xl shadow-glow bg-white w-120 h-100">
			<div className="flex justify-center items-center ">
				<Heading label={"Send Money"}/>
			</div>
			<div className="flex flex-col px-10 py-30">
				<div className="flex">
			<div className="flex justify-center items-center w-14 h-14 bg-green-500 text-white text-2xl rounded-4xl">
				{name[0].toUpperCase()}
			</div>
			<div className="m-3 font-semibold text-2xl">{name}</div>
			</div>
			<div className="">
				<InputBox onChange={(e) => {
					setAmount(e.target.value);
				}} label={"Amount (in Rs)"} placeholder="Enter amount"/>
			</div>
				<button onClick={() => {
					axios.post("http://localhost:3000/api/v1/account/transfer", {
						to: id,
						amount
					}, {
						headers: {
							Authorization: "Bearer " + localStorage.getItem("token")
						}
					})
				}
				} className="flex justify-center items-center curser-pointer -4 bg-green-500 font-semibold text-white h-10 rounded-md">Initiate Transfer</button>
			</div>
		</div>
	</div>
}