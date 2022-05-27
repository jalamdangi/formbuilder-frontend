import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div className="container bg-light">
                <h4>Welcome To Dynamic Form Builder</h4>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            <NavLink to="/login"><button type="submit" className="btn btn-success my-4 w-100">Login</button></NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup