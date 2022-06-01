import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Form, Input, Button, Checkbox } from 'antd'

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
    // localStorage.setItem('user', JSON.stringify(result))
    // console.log(result)
    if (result) {
      navigate('/login')
    }
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '70vh' }}>
      <div className="container bg-light p-4">
      <h4 className='text-center'>User Registration Page</h4>
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

              <Form.Item
                name="remember"
                onChange={(e) => setPassword(e.target.value)}
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" onClick={sendData} htmlType="submit">
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

export default Signup
