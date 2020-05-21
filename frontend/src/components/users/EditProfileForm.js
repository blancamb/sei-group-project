import React from 'react'

const EditProfileForm = ({ onChange, onSubmit, username, postcode, password, passwordConfirmation, errors }) => {
  
  return (
    <div className="edit-profile-form">
      <section className="section">
        <div className="container">
          <div className="columns">
            <form
            // className="column is-half is-offset-one-quarter box"
            onSubmit={onSubmit}
            >
            <h1 className="title">Edit Your Profile </h1>

            <div className="field" >
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${errors.username ? 'is-danger' : ''}`}
                  type="text"
                  placeholder="Update Username here"
                  name="username"
                  value={username}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="field" >
              <label className="label">Postcode</label>
              <div className="control">
                <input
                  className={`input ${errors.postcode ? 'is-danger' : ''}`}
                  type="text"
                  placeholder="Update Postcode here"
                  name="postcode"
                  value={postcode}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="field" >
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${errors.password ? 'is-danger' : ''}`}
                  type="text"
                  placeholder="Update Password here"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="field" >
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className={`input ${errors.passwordConfirmation ? 'is-danger' : ''}`}
                  type="text"
                  placeholder="Update Password here"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="field">
              <button type="submit"
                className="button is-fullwidth is-primary">
                Update Profile
          </button>
            </div>
          </form>
        </div>
        </div>
      </section>
    </div>
  )
}

export default EditProfileForm