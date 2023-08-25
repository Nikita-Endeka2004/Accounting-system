import { FC } from 'react'
import  img  from '../assets/png-clipart-fate-grand-order-fate-stay-night-http-404-server-404-error-purple-violet-PhotoRoom.png-PhotoRoom.png'
import { Link } from 'react-router-dom'

const ErrorsPage: FC = () => {
  return (
    <div className='min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10'>
      <img src={img} alt="img" />
      <Link to='/' className='bg-sky-700 rounded-md px-8 py-3 hover:bg-sky-600'>Back</Link>
    </div>
  )
}

export default ErrorsPage