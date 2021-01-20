import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import DashboardRight from '../../components/DashboardRight';
import { userActions } from '../../actions';

function RegisterHomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
        <div className="dashboard-main">
            <UserCard user={user} />

            <div className="info-right">
                <h1 className="text title">User Dashboard</h1>

                <div className="user-name">
                    <h3 className="text">Hi {user.ArtistFirstName}! <span className="text-fields">You're logged in to Aplaudo!</span></h3>
                </div>

                <DashboardRight user={user} />

                <div className="admin-info">
                    <h3 className="text-fields">All active artists:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items &&
                        <ul>
                            {users.items.map((user, index) =>
                                <li key={user.id}>
                                    {user.ArtistFirstName + ' ' + user.ArtistLastName}
                                    {
                                        user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                : <span> - <a href="#" onClick={() => handleDeleteUser(user.id)} className="text-primary">Delete</a></span>
                                    }
                                </li>
                            )}
                        </ul>
                    }
                    <p>
                        <Link to="/signin">Logout</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterHomePage;