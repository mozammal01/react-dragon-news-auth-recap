import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if(loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (user) {
    return children;
  }


  return (
  <Navigate state={location.pathname} to="/login" >

  </Navigate>
  );
};

PrivateRoutes.propTypes = {
  children: PropTypes.node
};

export default PrivateRoutes;