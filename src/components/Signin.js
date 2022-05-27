import React from 'react'

const Signin = () => {
    return (
        <div>
            <div className="container bg-light">
                <h4>Welcome To Dynamic Form Builder</h4>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <form>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-success my-4 w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin