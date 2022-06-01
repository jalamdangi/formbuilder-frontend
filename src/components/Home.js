import React from 'react'
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
  const navigate = useNavigate()
  const id = uuid()
  const generatedForm = () => {
    // alert(`The generated id is ${id}`)
  }
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
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
            <h6 className="ml-3 pt-3">Start a new form</h6>
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
            <h6 className="mt-3 p-2">Recent Forms</h6>
          </Col>
          <Col span={2}></Col>
        </Row>
        <Row justify="space-between">
          <Col span={3} offset={2}>
            <img
              src="https://png.pngtree.com/png-vector/20190413/ourlarge/pngtree-vector-doc-icon-png-image_944072.jpg"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={3}>
            <img
              src="https://png.pngtree.com/png-vector/20190413/ourlarge/pngtree-vector-doc-icon-png-image_944072.jpg"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={3}>
            <img
              src="https://png.pngtree.com/png-vector/20190413/ourlarge/pngtree-vector-doc-icon-png-image_944072.jpg"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={3}>
            <img
              src="https://png.pngtree.com/png-vector/20190413/ourlarge/pngtree-vector-doc-icon-png-image_944072.jpg"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={3}>
            <img
              src="https://png.pngtree.com/png-vector/20190413/ourlarge/pngtree-vector-doc-icon-png-image_944072.jpg"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
