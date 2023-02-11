import React, {useReducer, createContext} from 'react'
import { Route, Routes } from 'react-router-dom'

import Root from './Content/index'
import CreateProduct from './Dashboard/createProduct'
import ReadProducts from './Dashboard/products/ReadProducts'
import Update from './Dashboard/products/update'
const initialState = {
  products: [],
  orders: [],
  reviews: [],
  token: {}
}

const adminInitialState = {
  ...initialState,
  users: []
}



const App = () => {
  return (
    <Routes className=' text-gray-600'>
      <Route path='/' element={<Root />} />
      <Route path='/dashboard' element={<CreateProduct />} />
      <Route path='/dashboard/:id' element={<Update />} />
      <Route path='/dashboard/read' element={<ReadProducts />} />
    </Routes>
  )
}

export default App