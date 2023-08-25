import { FC } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom'
import { IResponseWalletLoader } from '../types/types'

const WalletTable: FC = () => {
  const {wallets} = useLoaderData() as IResponseWalletLoader
  console.log(wallets)
  return (
    <>
      <div className='bg-slate-800 px-4 py-3 mt-4 rounded-md'>
        <table className='w-full'>
          <thead>
            <tr>
              <td className='font-bold'> № </td>
              <td className='font-bold'>Title</td>
              <td className='font-bold'>Amount($)</td>
              <td className='font-bold'>Category</td>
              <td className='text-right'>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anton</td>
              <td>2000</td>
              <td>Dat</td>
              <td>
                <button className='btn hover:btn-red ml-auto'>
                  <FaTrash/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    </>
  )
}

export default WalletTable
