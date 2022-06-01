import React from 'react'

const Addnamefield = (props) => {
  const addnamefield = props.fun
  const dashboard = props.dashboard
  return (
    <div>
      <div className="namefield">
        <div className="row">
          <div className="col-md-9">
            <input type="text" placeholder="Enter Your Name" className="w-100 mt-2 p-2"/>
          </div>
          <div className="col-md-3">
          {dashboard === 'select'
              ? <button onClick={() => addnamefield()} className='btn btn-success round-btn mt-2'>+</button>
              : <i className="fa fa-trash-o mt-2" onClick={()=>alert('trash')} 
              style={{fontSize:"36px",color:"red"}}></i>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addnamefield
