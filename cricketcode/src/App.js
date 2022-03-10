import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Registration from './component/Registration';
import UserDashboard from './component/User/UserDashboard';
import PrivateRoute from './PrivateRoute';
import AdminDashboard from './component/Admin/AdminDashboard';
import EnrolledCourses from './component/User/EnrolledCourses';
import AcademyCourses from './component/User/AcademyCourses';
import AddAcademy from './component/Admin/AddAcademy';

function App() {
  return (
    <div className="App" >
      
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Registration />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/user-dashboard" element={<UserDashboard />}></Route>
            <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
            <Route path="/user-enrolledcourse" element={<EnrolledCourses />}></Route>
            <Route path="/user-courses/:input"   element={<AcademyCourses />}></Route>
            <Route path="/edit-academy/:instituteId" element={<AddAcademy />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
