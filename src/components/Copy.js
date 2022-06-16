import React,{useState} from 'react'

const Copy = () => {
  const [data, setData] = useState({});
//create an onInputChange function for the inputs this way
const onInputChange = async e => {
  const {name, value} = e.target;
  //check to validate if entry is not a number
  if(isNaN(name)){
    data[name] = value;
    
    //somehow update data
    setData({...data})
  }
}
  return (
    <div>Copy</div>
  )
}

export default Copy