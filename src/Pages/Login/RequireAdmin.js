import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../Shared/Spinner/Spinner';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth); 
    let location = useLocation();
    const [admin, adminLoading] = useAdmin(user);

    if(loading || adminLoading){
        return <Spinner />
    }

    if(!user || !admin){
        return <Navigate to="/login" state={{ from: location }} replace />; 
    }
    return children;
};

export default RequireAuth;