import React, { useState } from 'react'

const Datafetch = () => {
 const [data ,Setdata] = useState([])

  const fun1=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
      return res.json();
    }).then((s)=>{
      return Setdata(s)
    })
  }
  const fun2=((index)=>{
    let newrr = data.filter((ele,id)=>{
      return id!==index
    })
    Setdata(newrr)
  })
  return (
    <div>
      <h1>item list</h1>
      <button onClick={fun1}>search</button>
      {
        data.map((s,index)=>{
      return(
        <>
        <li>{s.title}</li>
        <button onClick={()=>{fun2(index)}}>delete</button>
        </>
      )

        })

        
      }
    </div>
  )
}

export default Datafetch




// import React, { useEffect ,useState} from 'react'

// const Datafetch = () => {
    
    
//         const [data1,SetData] = useState([])
//         const fun1=()=>{
      
//           fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
//             return res.json()
      
//           }).then((s)=>{
//             console.log(s,'rrr')
//             SetData(s)
//           })
//         }  
//         // useEffect(()=>{
//         //   fun1()
//         // },[])

//         const fun2=(index)=>{
//           console.log(index);
//           let newss = data1.filter((ele,id)=>{
//             return id!== index;
//           })
//           SetData(newss)
//         }
        
//   return (
//     <div>
//       <h3>Item list</h3>
//       <button onClick={fun1}>search</button>
//       {
//         data1.map((s,index)=>{
//         return (
//           <div>
//            <p><li>{s.title}</li>
//         <button onClick={()=>{fun2(index)}}>Delete</button></p>
//         </div>
//         )
//       })
//     }
    
//     </div>
//   )
// }

// export default Datafetch