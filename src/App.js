
import React, { useState } from 'react'
import Datafetch from './Datafetch'

const App = () => {
  const [data,setdata] = useState()
  const [input, setinput] = useState([])
  const fun1=(e)=>{
      setdata(e.target.value)
  }
  const fun2=()=>{
      setinput([...input,data])
      setdata('')
  }
  const fun3=(index)=>{
    console.log(index);
   let newarr= input.filter((ele,id)=>{
    return id!==index
   })
   setinput(newarr)
  }
  return (
    <div>
      <input onChange={fun1} type='text' value={data} placeholder='Enter your text'/>
      <button onClick={fun2}>add</button>
      {
      input.map((res,index)=>{


       return(
        <>
         <li>{res}</li>
         <button onClick={()=>{fun3(index)}}>Delete</button>
         </>
       )
      })

      }
        <Datafetch/>

    </div>
  )
}

export default App




// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import SignUp from './SignUp'
// import Login from './Login'

// const App = () => {
//   // return (
//     <div>
//       {/* <SignUp/> */}
//       <Routes>
//         <Route path='/SignUp' element={<SignUp/>} />
//         <Route path='/Login' element={<Login/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App







// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
