import React from 'react'
import Select from 'react-select'
// import InputRange from 'react-input-range'


const ClothesFilter = ({ color, category, gender, sizes, filterChange}) => {
  return (
    <>
    <div className=" filter column is-one-quarter">
    <Select 
    options={category}
    placeholder={'Categories'}
    onChange={filterChange}
    name="category"
    />
    </div>
    <div className=" filter column is-one-quarter">
    <Select 
    options={color}
    placeholder={'Colors'}
    onChange={filterChange}
    />
    </div>
    <div className=" filter column is-one-quarter">
    <Select 
    options={gender}
    placeholder={'Genders'}
    onChange={filterChange}
    />
    </div>
    <div className=" filter column is-one-quarter">
    <Select 
    options={sizes}
    placeholder={'Size'}
    onChange={filterChange}
    />
    </div>
    </>
  )
}

export default ClothesFilter