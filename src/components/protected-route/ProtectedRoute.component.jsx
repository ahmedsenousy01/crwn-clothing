import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
	return props.currentUser ? <Navigate to="/" /> : props.children;
};

export default ProtectedRoute;
