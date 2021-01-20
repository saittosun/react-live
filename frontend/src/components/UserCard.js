import React, { lazy, Suspense } from 'react';
import './UserCard.scss';
import { Link } from 'react-router-dom';
const UserCardLogo = lazy(() => import('./UserCardLogo'));
const UserCardImage = lazy(() => import('./UserCardImage'))
const Loader = () => <p>Loading</p>

// import UserCardLogo from './UserCardLogo';
const UserCard = ({ user }) => {
    return (
        <div className="card-container">
            <Suspense fallback={Loader}>
                <UserCardLogo />
            </Suspense>

            <div className="navi">
                <Suspense fallback={Loader}>
                    <UserCardImage />
                </Suspense>

                <h6 className="user-h6">{user?.ArtistFirstName} {user?.ArtistLastName}</h6>
                <ul>
                    <li className="active"><Link to="/"><i className="fa fa-columns" aria-hidden="true"></i>User DashBoard</Link></li>
                    <li><Link to="/profile"><i className="fa fa-user-circle" aria-hidden="true" />Profile Info</Link></li>
                    <li><Link to="/"><i className="fa fa-cog" aria-hidden="true" />Settings</Link></li>
                    <li><Link to="/"><i className="fa fa-inbox" aria-hidden="true" />Usage</Link></li>
                    <li><Link to="/"><i className="fa fa-envelope" aria-hidden="true" />Contacts</Link></li>
                    <li><Link to="/"><i className="fa fa-question-circle" aria-hidden="true" />Help</Link></li>
                </ul>
                <p>Dark Mode On/Off </p>
            </div>
        </div>
    )
}

export default UserCard;
