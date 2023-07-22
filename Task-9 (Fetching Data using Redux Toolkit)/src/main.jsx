
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostView from './Posts/PostView.jsx';
import store from './Store/Store.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:
      [{
        path: '/',
        element: <PostView></PostView>
      }]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
)
