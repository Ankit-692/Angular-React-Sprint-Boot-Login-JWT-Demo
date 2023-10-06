import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate("/data")
        }
    })

    const [username, setuser] = useState("")
    const [password, setpass] = useState("")

    async function loginFuc(e){
        
        e.preventDefault();

        const credentials = {
            "username" : username,
            "password" : password
        }

        const requestOption = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(credentials)
        };

        await fetch('http://localhost:8080/auth/login', requestOption)
        .then(res => res.json())
        .then(result => {
            localStorage.setItem('token',result.accessToken)
        })
        .catch(error => console.log(error))

        await navigate("/data")
    }

    return(
        <>
            <form className="w-25 mx-auto mt-5" onSubmit={loginFuc}>
                <h1>Login</h1>
                <div className="form-group">
                    <label className="mt-3">USERNAME</label>
                    <input type="text" className="form-control" value={username} onChange = {e=>setuser(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label className="mt-5">PASSWORD</label>
                    <input type="password" className="form-control" value={password} onChange = {e=>setpass(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mt-3 mx-auto">LOGIN</button>
                </div>
            </form>
        </>
    )
}

export default Login;