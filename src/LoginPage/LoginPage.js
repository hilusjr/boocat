import '../LoginPage/LoginPage.css'

function LoginPage() {
	return (
		<div className="login-card">
			<h1>login</h1>
			<span>e-mail</span>
			<input type="email" />
			<span>password</span>
			<input type="password"></input>
			<button className="bg-gradient">log in</button>
			<button className="bg-gradient">sign up</button>
		</div>
	)
}

export default LoginPage
