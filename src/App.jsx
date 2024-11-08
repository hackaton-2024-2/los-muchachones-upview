import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './utils/'

import { Login, Calendar, Chats, Learning, Reports, PageNotFound, Home, Files, Profile, Goals } from './pages';
import { ProtectedRoute, UnprotectedRoute, SidePanel } from './components/'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const addSidePanelToComponent = (component) => <SidePanel>{component}</SidePanel>


  return <div className='w-[100vw] h-[100vh] bg-darkGray overflow-scroll'>
    <BrowserRouter>
      <Routes>
        <Route element={<UnprotectedRoute isLoggedIn={isLoggedIn} />}>
          <Route exact path={routes.login.path} element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route exact path={routes.calendar.path} element={addSidePanelToComponent(<Calendar />)}></Route>
          <Route exact path={routes.chats.path} element={addSidePanelToComponent(<Chats />)}></Route>
          <Route exact path={routes.learning.path} element={addSidePanelToComponent(<Learning />)}></Route>
          <Route exact path={routes.reports.path} element={addSidePanelToComponent(<Reports />)}></Route>
          <Route exact path={routes.home.path} element={addSidePanelToComponent(<Home />)}></Route>
          <Route exact path={routes.files.path} element={addSidePanelToComponent(<Files />)}></Route>
          <Route exact path={routes.profile.path} element={addSidePanelToComponent(<Profile />)}></Route>
          <Route exact path={routes.goals.path} element={addSidePanelToComponent(<Goals />)}></Route>
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;
