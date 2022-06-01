import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd'

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
    <div style={{ display: 'flex', alignItems: 'center', height: '70vh' }}>
      <div className="container bg-light p-4">
        <h4>User Login Page</h4>
        <Row>
          <Col span={16} offset={2}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                onChange={(e) => setEmail(e.target.value)}
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Your Email"
                onChange={(e) => setPassword(e.target.value)}
                name="email"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" onClick={handleLogin} htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Signin
