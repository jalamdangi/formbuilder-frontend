import React, { useState,useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import { DatePicker, Button } from 'antd'
import { Row, Col } from 'antd'
import { Input } from 'antd'
import 'antd/dist/antd.css'
import {
  HomeOutlined,
  SettingFilled,
  FileTextOutlined,
  PlusOutlined,
} from '@ant-design/icons'

const Home = () => {
  const userid = JSON.parse(localStorage.getItem('user'))._id;
  const [data, setData] = useState([])
  const [updatedata, setUpdatedata] = useState([])
  useEffect(() => {
    fetchFormByUserid();
  }, [])
  const fetchFormByUserid = async () => {
    let result = await fetch(`http://localhost:5000/fetchformbyuserid/${userid}`)
    result = await result.json()
    setData(result)
    // console.log(data)
  }
  
  const navigate = useNavigate()
  const id = uuid()
  const generatedForm = () => {
    // alert(`The generated id is ${id}`)
  }
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  const deleteForm = async (formid) => {
    // alert(typeof(formid));
    let result = await fetch(`http://localhost:5000/deleteformbyformid/${formid}`, {
      method: 'delete',
    })
    result = await result.json()
    if (result) {
      fetchFormByUserid()
    }
  }

  return (
    <div>
      <Row>
        <Col span={22}>
          <h4 className="text-center p-2">Welcome To User Dashboard</h4>
        </Col>
        <Col span={2}>
          <Button onClick={handleLogout} id="logout-btn">
            Logout
          </Button>
        </Col>
      </Row>
      <div className="container-fluid">
        <Row>
          <Col span={6}>
            <FileTextOutlined style={{ fontSize: '36px', color: '#08c' }} />{' '}
            <span id="file-text">Forms</span>
          </Col>
          <Col span={12}>
            <Input placeholder="Search here" id="search" />
          </Col>
          <Col span={6} id="user-pic" className="text-right">
            <img
              src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
              className="mb-3"
            />
          </Col>
        </Row>
        <Row className="row-2">
          <Col span={22} offset={2}>
            <h5 className="ml-3 pt-3">Start a new form</h5>
          </Col>
        </Row>
        <Row className="row-2">
          <Col span={6} offset={2} id="newform-col">
            <NavLink to={`createform/${id}`} onClick={() => generatedForm()}>
              <PlusOutlined id="plusbtn" />
            </NavLink>
          </Col>
          <Col span={6}></Col>
        </Row>
        <Row className="row-3">
          <Col span={2}></Col>
          <Col span={20}>
            <h5 className="mt-3 p-2">Recent Forms</h5>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row>
        {data.map((form,index)=>{
          return(
              <Col span={3} offset={2} key={index} className='mb-4'>
                <NavLink to={`/fetchformbyformid/${form.formid}`}>
                  <img
                  src="https://png.pngtree.com/png-vector/20190413/ourlarge/pngtree-vector-doc-icon-png-image_944072.jpg"
                  style={{ width: '100%', height: 'auto' }}
                  />
                </NavLink>
                <div className="dropdown">
                  <button className="btn btn-info dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More Options
                  </button>
                  <div className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                    <NavLink to={`/formlink/${form.formid}`} className="dropdown-item">Form Link</NavLink>
                    <Button onClick={()=>deleteForm(form.formid)} className='dropdown-item text-left ml-2 display-4' style={{border:'none',fontSize:'16px'}}>Delete Form</Button>
                    <NavLink to={`/updateform/${form.formid}`} className="dropdown-item">Edit Form</NavLink>
                    <NavLink to={`/formresponses/${form.formid}`} className="dropdown-item" href="#">View Response</NavLink>
                  </div>
                </div>
              </Col>
              
          )
        })}
          <Col span={2}></Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
