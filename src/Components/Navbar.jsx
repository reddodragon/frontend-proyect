
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { UserContext } from '../Context/UseProvider';

const Navbar = () => {
  const { logout } = useContext(UserContext);
  return (


        <>
          <NavLink to="/">Fumaweb    </NavLink>
          <NavLink to="/Cards">Cards   </NavLink>
          <NavLink to="/deckscards">deckscards   </NavLink>

          <button onClick={logout}> Logout</button>
        </>
  )

}

export default Navbar