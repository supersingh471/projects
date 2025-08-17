import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
export const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/api/v1/user/bulk")
		.then(response => {
			setUsers(response.data.user)
		})
	}, []);

	return <div className="h-screen ml-8 ">
		<div className="flex justify-end w-14 font-bold">
			User
		</div>
		<div className="flex pl-2 h-10 w-200 shadow rounded-lg ml-3">
			<input type="search" placeholder="Search users..." className="w-full px-2 border rounded border-slate-200"/>
		</div>
		<div>
			{users.map(user => <User user={user}/>)}
		</div>
	</div>
}

function User({user}) {
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
			<Button label={"Send Money"}/>
		</div>
	</div>
}