import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Formresponses = () => {
  const {id} = useParams();
  const formid = id;
  const [data, setData] = useState([])

  useEffect(() => {
    fetchformbyformid();
    },[])

  const fetchformbyformid = async ()=>{
    let result = await fetch(`http://localhost:5000/fetchformresponsebyformid/${formid}`)
    result = await result.json()
    setData(result)
  }
  // console.log(data)

  return (
    <div className="container bg-light cptl-txt">
    <h3 className='text-center pt-4 mt-1'>Total Responses On Form</h3>
     {data.map((item, index) => (
        <div key={index}>
          <h5>Form : {item.formtitle}</h5><hr/>
          <h5 className='text-primary'>Response by {item.responseby}</h5><hr/>
          {item.content.map((c, i) => (
            <div key={i}>
              <h6>Question : {item.questions[i].question}</h6>
              <h6>Answer : {c.answer}</h6>
              <hr />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Formresponses
