import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottonWarning } from "../components/BottomWarning"


export const Signup = () => {
return (
	<div className="bg-slate-300 h-screen flex justify-center">
		<div className="flex flex-col justify-center">
			<div className="bg-white w-80 rounded-lg h-max px-4 p-2 text-center">
				<Heading label={"Sign up"}/>
				<SubHeading label={"Enter your information to create an account"}/>
				<InputBox placeholder={"Vikash"} label={"First Name"}/>
				<InputBox placeholder={"Singh"} label={"Last Name"}/>
				<InputBox placeholder={"singh@gmail.com"} label={"Email"}/>
				<InputBox placeholder={"123456"} label={"Password"}/>
				<div>
					<Button label={"Sign up"}/>
				</div>
				<BottonWarning label={"Already have an account?"} buttonText={"Signin"} to={"/signin"}/>
			</div>
		</div>
	</div>
)
}