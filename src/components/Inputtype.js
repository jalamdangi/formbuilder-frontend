import React from 'react'
import { Select } from 'antd'
const { Option } = Select

const onChange = (value) => {
  console.log(`selected ${value}`)
  alert(value)
}

const Inputtype = () => {
  return (
    <div>
      <Select
        placeholder="Choose answer type"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
      >
        <Option value="jack">Text</Option>
        <Option value="lucy">Radio</Option>
        <Option value="tom">Checkbox</Option>
      </Select>
    </div>
  )
}

export default Inputtype
