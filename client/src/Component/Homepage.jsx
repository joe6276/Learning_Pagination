import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStaffs } from '../Redux/actions'

import './homepage.css'



const Homepage=()=>{
    const  {users} = useSelector((state) => state.staff)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getStaffs())
    }, [])

    console.log('users' ,users)

    return(
        <div>
        <h1 className='head1'> Learning  Pagination </h1>   
        
        <div>
            <table>
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email To: </th>
              <th scope="col">Phone </th>
            </tr>
          </thead>
          <tbody>

            {
                users.map( user=>(
                  <tr>
                    <td>{user.staff_id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.lastname_name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))
            }

          </tbody>
            </table>

        </div>
        </div>
    )

}
export default Homepage;

   
     

