import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UseProvider';

const Login = () => {

    const { loginUser } = useContext(UserContext);

    const navegate = useNavigate()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async (e) => {
        e.preventDefault(e);

        try {
            await loginUser(email, password)
            console.log('ususario regisrado')
            navegate('/')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Ingrese email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Ingrese password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  </>)
}

export default Login