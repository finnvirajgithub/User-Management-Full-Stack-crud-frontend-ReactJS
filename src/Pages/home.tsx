import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers()
  },[])

  const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/users")
      console.log(result.data)
      setUsers(result.data)
  }

  

  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table border shadow">
        <thead>
            <tr>
                <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>#</th>
                <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Name</th>
                <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Username</th>
                <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Email</th>
                <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
              users.map((user, index)=>(
                <tr>
                  <th scope="row" key={index} style={{textAlign:"center", verticalAlign:"middle"}}>{index+1}</th>
                  <td style={{textAlign:"center", verticalAlign:"middle"}}>{user.name}</td>
                  <td style={{textAlign:"center", verticalAlign:"middle"}}>{user.username}</td>
                  <td style={{textAlign:"center", verticalAlign:"middle"}}>{user.email}</td>
                  <td style={{textAlign:"center", verticalAlign:"middle"}}>
                    <button className="btn btn-primary mx-2">View</button>
                    <button className="btn btn-outline-primary mx-2">Edit</button>
                    <button className="btn btn-danger mx-2">Delete</button>
                  </td>
                </tr>
              ))
            }
            
        </tbody>
       </table>
      </div>
    </div>
  )
}
