import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ListedBooks from './pages/ListedBooks'
import PagesToRead from './pages/PagesToRead'
import MainLayout from './layouts/MainLayout'
import BookDetails from './components/BookDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`./bookReview.json/${params.bookId}`),
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,

      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
