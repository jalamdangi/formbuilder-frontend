import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd'
import image2 from '../images/image2.svg';

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log(email, password)
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await result.json()
    console.log(result)
    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/home')
    } else {
      alert('please enter correct details')
    }
  }
  return (
    <div className="container-fuild pt-5">
      <div className="row">
        <div className="col-md-6 border">
          <img src={image2} alt="" style={{width:'100%',height:'auto'}} />
        </div>
        <div className="col-md-6 border w-100">
        <h4 className='text-center p-4'>User Login Page</h4>
        <Row>
          <Col span={24}>
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                label="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="email"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" className='w-100' onClick={handleLogin} htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        </div>
      </div>
    </div>
       
  )
}

export default Signin
