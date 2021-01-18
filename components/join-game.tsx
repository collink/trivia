import React from 'react';

import Button from './button';

const JoinGame = () => {
  return <div className="JoinGame">
    <input className="JoinGame-roomCode" size={8} maxLength={8} />
    <Button>
      Join
    </Button>
  </div>;
};

export default JoinGame;
