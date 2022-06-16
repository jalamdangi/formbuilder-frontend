import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import image1 from '../images/image1.svg';

  const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendData = async (e) => {
    e.preventDefault()
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    //  localStorage.setItem('user', JSON.stringify(result))
    // console.log(result)
    if (result) {
      navigate('/login')
    }
  }
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-md-6 border">
          <img src={image1} alt="" />
        </div>
        <div className="col-md-6 border w-100">
          <h4 className='text-center p-4'>User Registration Page</h4>
            <Form
              name="basic"
              // labelCol={{ span: 8 }}
              // wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                onChange={(e) => setName(e.target.value)}
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="Password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 3, span: 21 }}>
                <Button type="primary" onClick={sendData} className='w-100' htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
        </div>
      </div>
    </div>
  )
}

export default Signup
