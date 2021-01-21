import React from 'react';
import Link from 'next/link';

const Index = () => {
    return <div className="index-page">
        <div className="game-options">
            <div className="join-game game-option">
                <input className="room-code" maxLength={ 6 }/>
                <button color="accent" className="button">
                    Join
                </button>
            </div>

            <div className="or">OR</div>

            <Link href="/new-game">
                <button color="accent" className="button create-game-button game-option">
                    Create a Game
                </button>
            </Link>
        </div>
    </div>;
};

export default Index;
