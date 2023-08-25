import { FC } from "react"
import { Form } from "react-router-dom"

interface ICategoryModel {
  type: 'post' | 'patch'
  id?: number
  setVisibleModel: (visible: boolean) => void
}

const CategoryModel: FC<ICategoryModel> = ({type, id, setVisibleModel}) => {
  return (
    <div className="fixed left-0 bottom-0 right-0 top-0 w-full h-full bg-black/50 flex justify-center items-center">
      <Form 
       action="/categories"
       method={type}
       onSubmit={() => setVisibleModel(false)}
       className="grid gap-2 w-[300px] p-5 rounded-md bg-slate-900">
        <label htmlFor="title">
          <small>Category title</small>
          <input className="input w-full" type="text" name="title" placeholder="Title..." />
          <input type="hidden" name="id" value={id} />
        </label>

        <div className="flex items-center gap-2">
          <button className="btn btn-green" type="submit">
            { type === 'patch' ? 'Save' : 'Create'}
          </button>
          <button onClick={() => setVisibleModel(false)} className="btn btn-red">Close</button>
        </div>
      </Form>
    </div>
  )
}

export default CategoryModel