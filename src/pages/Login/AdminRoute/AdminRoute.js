
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return 'Spinner'
    }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;