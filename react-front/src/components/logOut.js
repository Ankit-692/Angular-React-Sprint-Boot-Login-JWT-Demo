import { useNavigate } from "react-router-dom"

function logOut(){
    localStorage.removeItem('token')

    const navigate = useNavigate()

    navigate('/login')
}