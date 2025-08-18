import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import axios from "axios";
export const Users = () => {
	const [users, setUsers] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
		.then(response => {
			setUsers(response.data.user)
		})
	}, [filter]);

	return <div className="h-screen ml-8 ">
		<div className="flex justify-end w-14 font-bold">
			User
		</div>
		<div className="flex pl-2 h-10 w-200 shadow rounded-lg ml-3">
			<input onChange={(e) => {
				setFilter(e.target.value)
			}} type="search" placeholder="Search users..." className="w-full px-2 border rounded border-slate-200"/>
		</div>
		<div>
			{users.map(user => <User user={user}/>)}
		</div>
	</div>
}

function User({user}) {
	const navigate = useNavigate();
	return <div className="flex justify-between mt-8">
		<div className="flex w-full">
			<div className="flex justify-center items-center bg-slate-300 rounded-4xl w-15 h-15">
				<div className="font-bold text-2xl text-indigo-500">
					{user.firstName[0]}
				</div>
			</div>
			<div className="flex ml-4 text-xl items-center">
				<div className="">
					{user.firstName} {user.lastName}
				</div>
			</div>
		</div>
		<div className="w-40 mr-4 mt-3">
			<Button onClick={(e) => {
				navigate("/send?id=" + user._id + "&name=" + user.firstName);
			}} label={"Send Money"}/>
		</div>
	</div>
}