import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './utils/'

import { Login, Calendar, Chats, Learning, Reports, PageNotFound, Home } from './pages';
import { ProtectedRoute, UnprotectedRoute } from './components/'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route element={<UnprotectedRoute />}>
        <Route exact path={routes.login.path} element={<Login />}></Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route exact path={routes.calendar.path} element={<Calendar />}></Route>
        <Route exact path={routes.chats.path} element={<Chats />}></Route>
        <Route exact path={routes.learning.path} element={<Learning />}></Route>
        <Route exact path={routes.reports.path} element={<Reports />}></Route>
        <Route exact path={routes.home.path} element={<Home />}></Route>
      </Route>

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}

export default App;
