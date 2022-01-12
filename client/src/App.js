import Homepage from "./Component/Homepage";
import Pagination from "./Component/Pagination";
import { useEffect,  useState } from 'react'
import { useDispatch } from 'react-redux'
import { getStaffs } from '../src/Redux/actions'




function App() {

  

  let allUsers= localStorage.getItem('mydata')
  allUsers=JSON.parse(allUsers)

  const [user ,setUser] = useState([]);
  const [current, setCurrent]= useState(1);
  const [puserPerPage]= useState(3) 
 
  const dispatch = useDispatch()
 
 useEffect(()=>{
  setUser(allUsers)
 })
  useEffect(() => {

    dispatch(getStaffs())
  
    
  }, [])

 



console.log('This are the users',user.length);

const paginate=(pageNumber)=>{ setCurrent(pageNumber)}
const indexoflastuser= current * puserPerPage;
const indexofFirstuser= indexoflastuser-puserPerPage;
const currentusers=user.slice(indexofFirstuser, indexoflastuser)

  return (
    <div className="App">
      <Homepage users={currentusers}/>
      <Pagination puserPerPage= {puserPerPage} totalusers={user.length} paginate={paginate} />
    </div>
  );
}

export default App;
