import Homepage from "./Component/Homepage";
import Pagination from "./Component/Pagination";
import { useEffect,  useState } from 'react'
import { useDispatch } from 'react-redux'
import { getStaffs } from '../src/Redux/actions'
import '../src/Component/homepage.css'



function App() {

  

  let allUsers= localStorage.getItem('mydata')
  allUsers=JSON.parse(allUsers)

  const [user ,setUser] = useState([]);
  const [current, setCurrent]= useState(1);
  const [puserPerPage, setpuserPerPage]= useState(2) 
 
  const dispatch = useDispatch()
 

  useEffect(() => {
    dispatch(getStaffs())
  }, [])

  useEffect(()=>{
    setUser(allUsers)
   },[])
  // const [val, setVal] = useState({
    
  //   nouser:""
  // })
 
  // useEffect(()=>{
  //   setpuserPerPage(val.nouser)
  // },[])



console.log('This are the users',user.length);

const paginate=(pageNumber)=>{ setCurrent(pageNumber)}

const onInputChange = e => {
  setpuserPerPage(e.target.value)
  
}

const indexoflastuser= current * puserPerPage;
const indexofFirstuser= indexoflastuser-puserPerPage;
const currentusers=user.slice(indexofFirstuser, indexoflastuser)

  return (
    <div className="App">
      <Homepage users={currentusers}/>
      
      <div className="here">   
       <div>Filter By  </div> 
       <div className="here1"> <select 
    onChange={onInputChange} 
    name="nouser" 
    class="form-control" 
     id="" >
       
        <option value="2">2</option>
        <option value="3">3 </option>
        <option value="5">5</option>
        <option value="19">19</option>
        </select>
        </div>
        </div>

      <Pagination puserPerPage= {puserPerPage} totalusers={user.length} paginate={paginate} />
    </div>
  );
}

export default App;
