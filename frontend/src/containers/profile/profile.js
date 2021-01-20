import React, { lazy, Suspense } from 'react';
// import UserCard from '../../components/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import UpdateProfile from '../register/UpdateProfile';

import './profile.scss';
const UserCard = lazy(() => import('../../components/UserCard'))

const Profile = () => {
  const user = useSelector(state => state?.users?.items[state?.users?.items?.length - 1]);
  return (
    <div className="profile-container">
      <Suspense fallback={null}>
        <div className="user-inner">
          <UserCard user={user} />
        </div>
        <div className="profile-inner">
          <UpdateProfile current={user} />
        </div>
      </Suspense>
    </div>
  );
}

export default Profile;