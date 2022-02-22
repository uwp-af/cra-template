
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from 'routes/Layout';

// Adding providers for react router dom to use throughout the app.
import { BrowserRouter } from "react-router-dom";
import Login from 'routes/Login';
import Dashboard from 'routes/Dashboard';
import Home from 'routes/Home';
import RequireAuth from 'routes/RequireAuth';

/**
 * We will use this as the base for our routes only and nothing else all layout
 * should be done with nested routes instead
 */
function App() {

  return (
    <div id='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              index // Equivalent to saying the page content for '/'
              element={<Home />}
            />
            <Route
              path='user' // place all routes that need user logged in under /user/
              element={
                <RequireAuth>
                  <Outlet />
                </RequireAuth>
              }
            >
              {/* Place your 'authenticated routes in here! They can be referenced by /user/<route> */}
              <Route index element={<Dashboard />} />
            </Route>
            <Route
              path='*' // Providing a 404 page for '/' and thus the whole site.
              element={
                <>
                  <h1>404 Not Found</h1>
                  <p>You'll have to journey elsewhere.</p>
                </>
              }
            />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
