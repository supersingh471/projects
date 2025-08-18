import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"


export const Dashboard = () => {
	return <div>
		<Appbar/>
		<Balance/>
		<Users/>
	</div>
}