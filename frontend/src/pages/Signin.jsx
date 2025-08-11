import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottonWarning } from "../components/BottomWarning";

export const Signin = () => {
	return <div className="bg-slate-300 flex justify-center h-screen">
		<div className="flex flex-col justify-center">
			<div className="bg-white rounded-lg w-80 h-max px-3 p-2 text-center">
				<Heading label={"Sign In"}/>
				<SubHeading label={"Enter your credentials to access your account"}/>
				<InputBox label={"Email"} placeholder={"singh@example.com"}/>
				<InputBox label={"Password"}/>
				<div>
					<Button label={"Sign In"}/>
				</div>
				<BottonWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
			</div>
		</div>
	</div>
}