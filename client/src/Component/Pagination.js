import React from 'react'
import './homepage.css'
export const Pagination = ({puserPerPage,totalusers, paginate}) => {

    const pageNumber=[];
    // const [nouser, setnoUser] = useState({
    //     current: "",
    // });


    for( let i =1 ; i <= Math.ceil(totalusers/puserPerPage); i++){
        pageNumber.push(i)
    }

    // const onInputChange = e => {
    //     setTask(prev => ({ ...prev, [e.target.name]: e.target.value }))
    // }

    return (
        <div>
        
      

            <nav>
                <ul id="uls" className='pagination'>
                {pageNumber.map(number=>(
                    <li key ={number} className='page-item'>
                        <a  onClick={()=>{ paginate(number)}} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
