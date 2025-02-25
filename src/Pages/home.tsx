import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Home() {

  const [users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    loadUsers()
  },[])

  const loadUsers = async () => {
      const result = await axios.get("http://localhost:8090/users")
      console.log(result.data)
      setUsers(result.data)
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8090/user/${id}`);
    loadUsers();
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
                    <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary mx-2" 
                    to={`/edituser/${user.id}`}
                    >Edit</Link>
                    <button className="btn btn-danger mx-2" onClick={()=> deleteUser(user.id)}>Delete</button>
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
