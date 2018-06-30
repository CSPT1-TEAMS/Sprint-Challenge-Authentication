import React from 'react'

const Form = ({ handleChange, handleSubmit, password, username }) => (
  <form onSubmit={handleSubmit}>
    <label>Username: </label>
    <input name="username" onChange={handleChange} value={username} />
    <br />
    <label>Password: </label>
    <input name="password" onChange={handleChange} value={password} />
    <br />
    <button type="submit">Submit</button>
  </form>
)

export default Form