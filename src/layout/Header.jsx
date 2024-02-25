import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to : '/', text: 'Login' },
  { to : '/register', text: 'Register' },
]

const userNav = [
  { to : '/', text: 'Home' },
  { to : '/res', text: 'จองคิว' },
  { to : '/', text: 'ยืนยันการจอง' },
  { to : '/', text: 'ประวัติ' },
  { to : '/', text: 'ข้อมูลส่วนตัว' },
]

export default function Header() {
  const {user, logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="w-full p-4 bg-white"> 
    <nav className="flex item-center justify-between max-w-6xl mx-auto">
      <a href="/" className="text-lg font-bold flex items-center">Yindee Dental Clinic</a>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
      </nav>
    </header>
  );
}
