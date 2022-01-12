import React from 'react'
//import { useState, useEffect } from 'react'

export const Homepage = ({users}) => {
  return (

    <div>
      <h1 className='head1'> Learning  Pagination </h1>

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
          {users.map((user) => (

            <tr>
              <td>{user.staff_id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>

          )
          )
          }


        </tbody>

      </table>
    </div>
  )
}

export default Homepage;