import React, { useState } from 'react'

const Formheader = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  return (
    <div>
      <div className="container">
        <h2 className="p-2">Design Your Form</h2>
        <div className="row mb-3 bg-light">
          <div className="col-md-12 m-2">
            <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Form Title" id="formtitle"/>
          </div>
          <div className="col-md-12 m-2">
              <input onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Form Description" id="formdescription" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formheader


