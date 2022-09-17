import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UseProvider';

const Register = () => {

    const navegate = useNavigate()

    const { registerUser } = useContext(UserContext);

    const [email, setEmail] = useState('fede@fede.com');
    const [password, setPassword] = useState('123123');
    const [name, setName] = useState('federepiola');

    const  handleSubmit = async(e) => {
        e.preventDefault(e);
        console.log(email, password, name)
        try {
            await registerUser(email, name, password)
            console.log('registrando usuario')
            navegate('/Login')
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter a email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter a username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  </>
  )
}

export default Register