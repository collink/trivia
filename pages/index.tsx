import React from 'react';
import Link from 'next/link';

import Button from '../components/button';

const Index = () => {
    return <div className="index-page">
        <div className="game-options">
            <div className="join-game game-option">
                <input className="room-code" maxLength={ 6 }/>
                <Button>
                    Join
                </Button>
            </div>

            <div className="or">OR</div>

            <Link href="/new-game">
                <Button className="create-game-button game-option">
                    Create a Game
                </Button>
            </Link>
        </div>
    </div>;
};

export default Index;
