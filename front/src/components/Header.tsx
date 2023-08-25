import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {FaBtc, FaSignOutAlt} from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/user/userSlice'
import { removeTokenFromLocalstorage } from '../helpers/localstorage.helper'
import { toast } from 'react-toastify'

const Header: FC = () => {
  const isAuth = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHendler = () => {
    dispatch(logout())
    removeTokenFromLocalstorage('token')
    toast.success('You logged out')
    navigate('/')
  }

  return (
    <header className='flex items-center p-4 bg-slate-800 shadow-sm backdrop-blur-sm'>
      <Link to="/">
        <FaBtc size={20}></FaBtc>
      </Link>
      {/*MENU*/}
      {
        isAuth && (
          <nav className='ml-auto mr-10'>
            <ul className="flex items-center gap-5">
              <li>
                <NavLink to='/' className={({isActive}) => isActive ? 'text-white' : 'text-white/50'}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/categories' className={({isActive}) => isActive ? 'text-white' : 'text-white/50'}>Categories</NavLink>
              </li>
              <li>
                <NavLink to='/wallets' className={({isActive}) => isActive ? 'text-white' : 'text-white/50'}>Wallets</NavLink>
              </li>
            </ul>
          </nav>
        )
      }
      {/*ACTIONS*/}
      {
        isAuth ? (
          <button className='btn btn-red' onClick={logoutHendler}>
            <span>Log Out</span>
            <FaSignOutAlt/>
          </button>
        ) : (
          <Link to='auth' className='py-2 text-white/50 hover:text-white ml-auto'>
            Log In / Sign In
          </Link>
        )
      }
    </header>
  )
}

export default Header