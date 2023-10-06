import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Data(){

    const [users, setUser] = useState([])

    const navigate = useNavigate();
    
    useEffect(()=>{
        
        if(!localStorage.getItem('token')){
            navigate("/")
        }


        async function fetchData(){
            const requestOption = {
                headers : {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            }
                await fetch('http://localhost:8080/getAllUser',requestOption)
                .then(res => res.json())
                .then(data => {
                    setUser(data)
                    console.log(data)
                })
                .catch(error => console.log(error))
        }
        fetchData();
    },[navigate])

    

    return(
        <>
            <h1>Data Here Brother</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Roles</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(it=>(
                            <tr key={it.id}>
                                <td>{it.id}</td>
                                <td>{it.username}</td>
                                <td>{it.roles.map(r=>(
                                    <p key={r.id}>{r.name}</p>
                                ))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Data;