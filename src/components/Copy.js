// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import Addemailfield from './formcomponents/Addemailfield'
// import Addnamefield from './formcomponents/Addnamefield'
// import Addmobilefield from './formcomponents/Addmobilefield'
// import Addgenderfield from './formcomponents/Addgenderfield'
// import Addlanguagefield from './formcomponents/Addlanguagefield'

// const Createform = () => {

//   const [one, setOne] = useState('')
//   const [two, setTwo] = useState('')
//   const [three, setThree] = useState('')
//   const [four, setFour] = useState('')
//   const [five, setFive] = useState('')


//   const addemailfield = () => {
//     alert('addemail invoked')
//     setOne(<Addemailfield dasboard={'selected'}></Addemailfield>)
//   }
//   const addnamefield = () => {
//     alert('addname invoked')
//     setTwo(<Addnamefield dasboard={'selected'}></Addnamefield>)
//   }
//   const addmobilefield = () => {
//     alert('adamobile invoked')
//     setThree(<Addmobilefield dasboard={'selected'}></Addmobilefield>)
//   }
//   const addgenderfield = () => {
//     alert('addgenderfieldinvoked')
//     setFour(<Addgenderfield dasboard={'selected'}></Addgenderfield>)
//   }
//   const addlanguagefield = () => {
//     alert('addlanguagefield invoked')
//     setFive(<Addgenderfield dasboard={'selected'}></Addgenderfield>)
//   }
//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-6">
//           <h4 className="p-4">Welcome To User Dashboard</h4>
//         </div>
//         <div className="col-md-6 text-right pt-3">
//           <NavLink to="usergeneratedforms" className="user-generated-form">
//             Your Generated Forms
//           </NavLink>
//         </div>
//       </div>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-7 border">
//             <h4>Generated Form</h4>
//             <div className="user-form">{one}</div>
//             <div className="user-form">{two}</div>
//             <div className="user-form">{three}</div>
//             <div className="user-form">{four}</div>
//             <div className="user-form">{five}</div>
//             <button className="btn btn-success w-75 mt-3">Generate Form</button>
//           </div>
//           <div className="col-md-5 border">
//             <h5 className="mt-1">Choose Form Elements</h5>
//             <Addemailfield
//               fun={addemailfield}
//               dashboard={'select'}
//             ></Addemailfield>
//             <Addnamefield
//               fun={addnamefield}
//               dashboard={'select'}
//             ></Addnamefield>
//             <Addmobilefield
//               fun={addmobilefield}
//               dashboard={'select'}
//             ></Addmobilefield>
//             <Addgenderfield
//               fun={addgenderfield}
//               dashboard={'select'}
//             ></Addgenderfield>
//             <Addlanguagefield
//               fun={addlanguagefield}
//               dashboard={'select'}
//             ></Addlanguagefield>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Createform

