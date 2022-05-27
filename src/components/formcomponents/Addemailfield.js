import React from 'react'

const Addemailfield = () => {
    return (
        <div>
            <div className="emailfield">
                <div className="row">
                    <div className="col-md-9">
                        <input type="text" placeholder='Enter Your Email' className='w-100 mt-2 p-2' />
                    </div>
                    <div className="col-md-3">
                        <button onClick={() => addemailfield()} className='btn btn-danger round-btn mt-2'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addemailfield