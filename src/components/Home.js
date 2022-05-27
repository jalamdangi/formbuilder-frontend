import React, { useState } from 'react'
import Addemailfield from './formcomponents/Addemailfield'

const Home = () => {
    const [one, setOne] = useState('')
    const [two, setTwo] = useState('')
    const [three, setThree] = useState('')
    const [four, setFour] = useState('')
    const [five, setFive] = useState('')
    const addemailfield = () => {
        alert('addemail invoked');
        setOne('Test1')
    }
    const addnamefield = () => {
        alert('addname invoked');
        setTwo('Test2')
    }
    const addmobilefield = () => {
        alert('addname invoked');
        setThree('Test3')
    }
    const addgenderfield = () => {
        alert('addname invoked');
        setFour('Test4')
    }
    const addlanguagefield = () => {
        alert('addname invoked');
        setFive('Test5')
    }
    return (
        <div>
            <h4 className='p-4 text-center'>Welcome To User Dashboard</h4>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 border">
                        <h4>Generated Form</h4>
                        <div className="user-form">
                            {one}
                        </div>
                        <div className="user-form">
                            {two}
                        </div>
                        <div className="user-form">
                            {three}
                        </div>
                        <div className="user-form">
                            {four}
                        </div>
                        <div className="user-form">
                            {five}
                        </div>
                    </div>
                    <div className="col-md-5 border">
                        <h5 className='mt-1'>Choose Form Elements</h5>
                        <Addemailfield></Addemailfield>
                        <div className="namefield">
                            <div className="row">
                                <div className="col-md-9">
                                    <input type="text" placeholder='Enter Your Name' className='w-100 mt-2 p-2' />
                                </div>
                                <div className="col-md-3">
                                    <button onClick={() => addnamefield()} className='btn btn-danger round-btn mt-2'>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="mobilefield">
                            <div className="row">
                                <div className="col-md-9">
                                    <input type="text" placeholder='Enter Your Mobile' className='w-100 mt-2 p-2' />
                                </div>
                                <div className="col-md-3">
                                    <button onClick={() => addmobilefield()} className='btn btn-danger round-btn mt-2'>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="genderfield">
                            <div className="row">
                                <div className="col-md-9">
                                    <input type="text" placeholder='Select Your Gender' className='w-100 mt-2 p-2' />
                                </div>
                                <div className="col-md-3">
                                    <button onClick={() => addgenderfield()} className='btn btn-danger round-btn mt-2'>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="languagefield">
                            <div className="row">
                                <div className="col-md-9">
                                    <input type="text" placeholder='Select Your Language' className='w-100 mt-2 p-2' />
                                </div>
                                <div className="col-md-3">
                                    <button onClick={() => addlanguagefield()} className='btn btn-danger round-btn mt-2'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home