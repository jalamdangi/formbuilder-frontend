import { Content } from 'antd/lib/layout/layout';
import React,{useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom';

const Fetchformbyformid = () => {
  const responseby = JSON.parse(localStorage.getItem('user')).name;
  
  const {id} = useParams();
  const [input,setInput]=useState([])
  const [data,setData] = useState({})
  const [question, setQuestion] =useState()
  // const [inputdata, setinputData] = useState([{answer:' ',type:' '},{answer:' ',type:' '},{answer:' ',type:' '}])
  const formid = id;
  useEffect(() => {
    fetchsingleform();
    },[])

    
  var ansarray =  []
  var questionarray = []
  useEffect(() => {
    const inputLength= input.length;
    for (var i=0; i<input.length; i++) {
        ansarray.push({answer:' ',type:' '})
      }

    for (var i=0; i<input.length; i++) {
        questionarray.push({question:' ',type:' '})
      }
      // console.log(questionarray);
      // console.log(answerarray);
      
    })
      
    const collectAnswers = (e, index)=>{
      ansarray[index]['answer'] = e.target.value
      // questionarray[index]['question'] = e.target.value
    }

    const sendAnswers = async () =>{
      // console.log(questionarray);
        let result = await fetch('http://localhost:5000/addresponse', {
        method: 'post',
        body: JSON.stringify({formid:formid, formtitle:formtitle, content:ansarray, questions:input, responseby:responseby }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      result = await result.json()
      console.log(result)
      if (result) {
        alert('Your record successfully submitted')
      }
    // navigate(`/formlink/${formid}`)

    }
    
  const fetchsingleform = async ()=>{
    let result = await fetch(`http://localhost:5000/fetchformbyformid/${formid}`)
    result = await result.json()
    setData(result)
    setInput(result.formfields)
  }
  const {_id, userid, frmid, formtitle, formfields} = data
  
  return (
    <div className='container text-capitalize'>
    <div className="row mt-3 mb-2">
      <div className="col-md-6"><h4 className="p-0 m-0">Your Generated Form</h4></div>
      <div className="col-md-6 text-right"><NavLink to={`/formresponses/${formid}`}>View Responses</NavLink></div>
    </div>
    <div className="row mb-3 bg-light">
      <div className="col-md-12 m-2">
        <h5 className='text-capitalize pt-2'>{formtitle}</h5>
      </div>
    </div>
        {input.map((item, index)=>{
          return(
            <div key={index}>
            <div className="row bg-light p-2">
                <div className="col-md-12">
                  <label className='form-label'>{item.question}</label>
                  <input
                    name='answer'
                    type="text"
                    placeholder="Enter your answer"
                    id="form-add-answer-field"
                    onChange={(e)=>collectAnswers(e, index)}
                  />
                </div>
              </div>
           </div>
          )
        })}
        <div className="row">
          <button onClick={()=>sendAnswers()} className='btn btn-info w-100 mt-4 p-3'>Submit</button>
        </div>
   </div>
  )
}

export default Fetchformbyformid