import { FC } from 'react'
import WalletForm from '../components/WalletForm'
import { instance } from '../api/axios.api'
import { ICategory } from '../types/types'
import { toast } from 'react-toastify'
import WalletTable from '../components/WalletTable'

export const walletLoader = async () => {
  const categories = await instance.get<ICategory[]>('/categories')
  const wallets = await instance.get('/wallets')

  const data = {
    categories: categories.data,
    wallets: wallets.data
  }
  return data
}

export const walletAction = async ({ request }: any) => {
  switch(request.method) {
    case 'POST': {
      const formData = await request.formData()
      const newWallet = {
        title: formData.get('title'),
        amount: +formData.get('amount'),
        category: formData.get('category'),
        type: formData.get('type')
      }

      await instance.post('/wallets', newWallet)
      toast.success('Transcation added')
      return null
    }
    case 'DELETE': {

    }
  }
}

const Wallets: FC = () => { 
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-4 items-start">
        {/* ADD FORM */}
        <div className="grid col-span-2"><WalletForm /></div>

        {/* STATISTIC BLOCK */}

        <div className="rounded-md bg-slate-800 p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className='uppercase text-md front-bold text-center'>Total Income</p>
              <p className='bg-green-600 p-1 rounded-sm text-center mt-2'>1000$</p>
            </div>
            <div>
              <p className='uppercase text-md front-bold text-center'>Total Expence</p>
              <p className='bg-red-500 p-1 rounded-sm text-center mt-2'>1000$</p>
            </div>
          </div>

          <>Chart</>

        </div>
      </div>  

      {/* RESUTL TABLE */}

      <h1 className='my-5'><WalletTable/></h1>

    </>
  )
}

export default Wallets