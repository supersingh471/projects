import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios";

export const Signup = () => {
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [username, setuserName] = useState("");
	const [password, setPassword] = useState("");

return (
	<div className="bg-slate-300 h-screen flex justify-center">
		<div className="flex flex-col justify-center">
			<div className="bg-white w-80 rounded-lg h-max px-4 p-2 text-center">
				<Heading label={"Sign up"}/>
				<SubHeading label={"Enter your information to create an account"}/>
				<InputBox onChange={(e) => {
					setfirstName(e.target.value);
				}} placeholder={"Vikash"} label={"First Name"}/>
				<InputBox onChange={(e) => {
					setlastName(e.target.value);
				}} placeholder={"Singh"} label={"Last Name"}/>
				<InputBox onChange={(e) => {
					setuserName(e.target.value);
				}} placeholder={"singh@gmail.com"} label={"Email"}/>
				<InputBox onChange={(e) => {
					setPassword(e.target.value);
				}} placeholder={"123456"} label={"Password"}/>
				<div>
					<Button onClick={() => {
						const response = axios.post("http://localhost:3000/api/v1/user/signup", {
							firstName,
							lastName,
							username,
							password
						});
						localStorage.setItem("token", response.data.token);
					}} label={"Sign up"}/>
				</div>
				<BottomWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}/>
			</div>
		</div>
	</div>
)
}