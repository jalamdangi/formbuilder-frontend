import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import Inputtype from './Inputtype'

const Createform = () => { 
    const formid = uuid()
    const userid = JSON.parse(localStorage.getItem('user'))._id;
    const navigate = useNavigate()
    
  // const field = {question:' ',type:' '}
  const [data, setData] = useState([{question:' ',type:' '}])
  const [formtitle, setFormtitle] = useState('Enter form title')
  const addanotherfield = () => {
    setData([...data, {question:' ',type:' '}])
  }
  const onChange = (e, index) => {
      const updateData = [...data];
      updateData[index]['question'] = e.target.value;
      updateData[index]['type'] = e.target.type;
      // console.log(updateData);

    setData(updateData);
  }
  const removeinputField = (index)=>{
    // alert(index);
    const filteredData = [...data];
    filteredData.splice(index, 1);
    setData(filteredData)
  }
  const generateForm = async ()=>{
    let result = await fetch('http://localhost:5000/addform', {
        method: 'post',
        body: JSON.stringify({formtitle:formtitle,formfields:data,formid:formid,userid:userid}),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      result = await result.json()
      console.log(result)
      if (result) {
        alert('form generate')
      }
    navigate(`/formlink/${formid}`)

  }
  
  return (
    <div className='container'>
    <div className="row mt-3 mb-3">
      <h3 className="p-0 m-0">Design Your Form</h3>
    </div>
        <div className="row mb-3 bg-light">
          <div className="col-md-12 m-2">
            <input  onChange={(e)=>setFormtitle(e.target.value)} type="text" placeholder="Form Title" id="formtitle" className='bg-light'/>
          </div>
        </div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="row bg-light p-2">
                <div className="col-md-8">
                  <input
                    onChange={(e) => onChange(e, index)}
                    type="text"
                    placeholder="Write Your Question"
                    id="form-add-question-field"
                    name="name"
                    // value={users.name}
                  />
                  {/* <input
                    type="text"
                    placeholder="Choose answer type"
                    id="form-add-answer-field"
                  /> */}
                </div>
                <div className="col-md-2">
                  <Inputtype></Inputtype>
                </div>
                <div className="col-md-1 remove-input-coloumn">
                  <i className="fa fa-trash-o" onClick={(index)=>removeinputField(index)} style={{fontSize:"35px",color:"red"}}></i>
                </div>
              </div>
           </div>
        )
      })}
      <button onClick={() => addanotherfield()} className="btn btn-success plus">
        +
      </button>
      <div className="row bg-light mt-4 p-3">

      <button className='btn btn-primary w-100' onClick={()=>generateForm()}>Generate Form</button>
      </div>
    </div>
  )
 
}

export default Createform
