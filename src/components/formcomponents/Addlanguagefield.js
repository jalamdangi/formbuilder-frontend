import React from 'react'

const Addlanguagefield = (props) => {
    const addlanguagefield = props.fun
    const dashboard = props.dashboard
  return (
    <div>
      <div className="languagefield">
        <div className="row">
          <div className="col-md-9">
            <input type="text" placeholder="Select Your Language" className="w-100 mt-2 p-2"/>
          </div>
          <div className="col-md-3">
          {dashboard === 'select'
             ? <button onClick={() => addlanguagefield()} className='btn btn-success round-btn mt-2'>+</button>
             : <i className="fa fa-trash-o mt-2" onClick={()=>alert('trash')} 
             style={{fontSize:"36px",color:"red"}}></i>
         }          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addlanguagefield
