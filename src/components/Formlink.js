import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Formlink = () => {
  const { id } = useParams()
  const formid = id
  return (
    <div>
        <div id="link-box">
        <h4>Hurray Share Your Form</h4>
        <i className="fa fa-share-alt" style={{fontSize:'36px'}}></i>
          <NavLink to={`/fetchformbyformid/${formid}`}>
            {`http://localhost:3000/fetchformbyformid/${formid}`}
          </NavLink>
        </div>
    </div>
  )
}

export default Formlink 
