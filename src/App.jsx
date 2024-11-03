import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './utils/'

import { Login, Calendar, Chats, Learning, Reports, PageNotFound, Home } from './pages';
import { ProtectedRoute, UnprotectedRoute, SidePanel } from './components/'

function App() {
  const addSidePanelToComponent = (component) => <SidePanel>{component}</SidePanel>


  return <BrowserRouter>
    <Routes>
      <Route element={<UnprotectedRoute />}>
        <Route exact path={routes.login.path} element={<Login />}></Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route exact path={routes.calendar.path} element={addSidePanelToComponent(<Calendar />)}></Route>
        <Route exact path={routes.chats.path} element={addSidePanelToComponent(<Chats />)}></Route>
        <Route exact path={routes.learning.path} element={addSidePanelToComponent(<Learning />)}></Route>
        <Route exact path={routes.reports.path} element={addSidePanelToComponent(<Reports />)}></Route>
        <Route exact path={routes.home.path} element={addSidePanelToComponent(<Home />)}></Route>
      </Route>

      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}

export default App;