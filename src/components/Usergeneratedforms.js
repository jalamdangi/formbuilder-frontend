import React, {useState} from 'react'

const Usergeneratedforms = () => {
  
  const data = [
    {
      formid: 123456,
      formtitle: 'admission form',
      formdescription: 'student admission form',
    },
    {
      id: 1,
      question: 'what is the capital of punjab',
      type: 'text',
    },
    {
      id: 2,
      question: 'what is the capital of bhopal',
      type: 'text',
    },
    {
      id: 3,
      question: 'what is th capital of delhi',
      type: 'text',
    },
    {
      id: 3,
      question: 'what is th capital of karnatak',
      type: 'file',
    },
    {
      id: 4,
      question: 'what is you fav number',
      type: 'number',
    },
  ]
  return (
    <div>
      <h2 className="text-center p-2">Your Generated Forms</h2>
      {data.map((item, index) => {
        return (
          <>
            <h2>{item.formtitle} {item.formid}</h2>
            <h3>{item.formdescription}</h3>
            <h5>{item.question}</h5>
            <p><h6> <input type={item.type} name="" id="" /></h6></p>
           
          </>
        )
      })}
    </div>
  )
}

export default Usergeneratedforms
