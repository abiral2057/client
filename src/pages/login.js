function Login(){
    return(
        <div className="App">
<form>
    <div className="box"> Login
        <input type="email" name="email" className="email" defaultValue="Email"/>
        <input type="password" name="password" className="email" defaultValue="Password"/>
        <div className="btn">
            Login
        </div>

    </div>
    </form>
        </div>
    )
}
export default Login;