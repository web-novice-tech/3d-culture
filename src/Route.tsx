import { useRoutes, Navigate } from 'react-router-dom';

import { HomeLayout } from './layouts/Home';
import { SideLessHomeLayout } from './layouts/SidelessHome';
import { SimpleLayout } from './layouts/Simple';
import { Detail } from './pages/Detail';
// import { ForgetPassForm } from "./pages/ForgetPassForm";
import { Home } from './pages/Home';
// import { Login } from "./pages/Login";
// import { Signout } from "./pages/Signout";
// import { Signup } from "./pages/Signup";
import { Upload } from './pages/Upload';
import { ModelUpdate } from './pages/ModelUpdate';
import { Channels } from './pages/Channels';
import { Profile } from './pages/Profile';
import { NotFound } from './pages/NotFound';

export const RootRouter = () =>
  useRoutes([
    {
      element: <HomeLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'upload', element: <Upload /> },
        { path: 'profile', element: <Profile /> },
        { path: 'channels', element: <Channels /> },
      ],
    },
    {
      element: <SideLessHomeLayout />,
      children: [
        { path: 'detail', element: <Navigate to='/' /> },
        { path: 'detail/:objId', element: <Detail /> },
        { path: 'detail/:objId/update', element: <ModelUpdate /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        // { path: 'login', element: <Login /> },
        // { path: 'signup', element: <Signup /> },
        // { path: 'signout', element: <Signout /> },
        // { path: 'forget', element: <ForgetPassForm /> },
        { path: '404', element: <NotFound /> },
      ],
    },
    { path: '*', element: <Navigate to='/404' /> },
  ]);
