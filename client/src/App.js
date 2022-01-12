import Homepage from "./Component/Homepage";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStaffs } from '../src/Redux/actions'



function App() {
  const  {users} = useSelector((state) => state.staff)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStaffs())
    
  }, [])
  console.log('users' ,users)

  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
