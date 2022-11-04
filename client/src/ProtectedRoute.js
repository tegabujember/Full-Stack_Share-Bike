import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

// const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
//   return (
//     <>
//       <Routes>
//         <Route
//           {...rest}
//           render={(props) => {
//             if (auth) return <Component {...props} />;
//             if (!auth)
//               return <Navigate to="/" state={{ from: props.location }} />;
//           }}
//         />
//       </Routes>
//       <Outlet />
//     </>
//   );
// };
function ProtectedRoute({ auth }) {
  return auth ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
