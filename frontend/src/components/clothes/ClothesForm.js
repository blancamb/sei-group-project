import React from 'react'
import Select from 'react-select'


const colorOptions = [
  { value: 'black', label: 'Black'},
  { value: 'white', label: 'White'},
  { value: 'red', label: 'Red'},
  { value: 'yellow', label: 'Yellow'},
  { value: 'green', label: 'Green'},
  { value: 'blue', label: 'Blue'},
  { value: 'orange', label: 'Orange'},
  { value: 'purple', label: 'Purple'},
  { value: 'brown', label: 'Brown'},
  { value: 'silver', label: 'Silver'},
  { value: 'gold', label: 'Gold'}
]
const ClothesForm = ({handleChange, handleSubmit, handleMultiChange, clothesForm}) => {
const { title, category, genderCategory, size, rentalPrice, image } = clothesForm

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >

            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Give your item a title!"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* This input should be changed to a multi select to select categories fit into */}
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="What category is this item..."
                  name="category"
                  value={category}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">This item is for...</label>
              <div className="control">
                <label className="radio">
                <input
                    type="radio"
                    name="genderCategory"
                    value="Women"
                    onChange={handleChange}
                    checked={genderCategory === 'Women'}
                  />
                    Women
                </label>
                <label className="radio">
                <input
                    type="radio"
                    name="genderCategory"
                    value="Men"
                    onChange={handleChange}
                    checked={genderCategory === 'Men'}
                  />
                    Men
                </label>
              </div>
            </div>

            <div className="field">
              <label className="label">Size</label>
              <div className="control">
                <div className="select">
                  <select 
                  name="size"
                  value={size}
                  onChange={handleChange}>
                    <option disabled value=""></option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Colour</label>
              <div className="control">
                <Select
                  options={colorOptions}
                  placeholder="Please select a colour / colours.."
                  name="color"
                  isMulti
                  onChange={handleMultiChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Rental Price</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="How much will this rent for (per week)?"
                  name="rentalPrice"
                  value={rentalPrice}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* //! need to add the option to upload photos here too  */}
            <div className="field">
              <label className="label">Upload Images</label>
              <div className="control">
              <input
              className="input"
              type="text"
              placeholder="Add image link here"
              name="image"
              value={image}
              onChange={handleChange}
              />
              </div>
            </div>

            <div className="field">
              <button type="submit" className="button is-fullwidth is-primary">Add Item</button>
              </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default ClothesForm