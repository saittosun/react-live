import React from 'react'
import ConcertForm from './ConcertForm';
import UserCard from '../../components/UserCard';
function ConcertContainer() {
    return (
        <div className="abel-container">
            <UserCard />
            <ConcertForm />
        </div>
    )
}

export default ConcertContainer
