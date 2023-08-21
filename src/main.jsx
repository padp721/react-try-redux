import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ROUTES from './routes/routes'
import configureStore from './store'

function routeMapper(route) {
  if (route.path === "")
    return {
      Component: route.component,
      index: true,
    }
  else
    return {
      Component: route.component,
      path: route.path,
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={(configureStore())}>
      <BrowserRouter>
        <Routes>
          {ROUTES.map((route, idx) =>
            <Route key={idx} {...routeMapper(route)} >
              {route?.children.map((childRoute, idx) =>
                <Route key={idx} {...routeMapper(childRoute)} />
              )}
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
