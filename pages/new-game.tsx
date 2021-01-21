import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { useCreateGameMutation } from '../lib/game.graphql';

const NewGame = () => {
    const router = useRouter();
    const [ numTeams, setNumTeams ] = useState<number>(2);
    const [ createGameMutation ] = useCreateGameMutation();


    const createGame = async () => {
        console.log(numTeams);

        const { data } = await createGameMutation({
            variables: {
                numTeams
            }
        });

        const { createGame: game } = data;

        await router.push(`/game/${game.id}`);
    };

    return <div className="new-game-page">
        <form className="new-game-form">
            <h2>New Game</h2>

            <div className="new-game-settings">
                <section className="team-count-section">
                    <label>How many teams?</label>
                    <div className="team-count">
                        <button type="button" color="accent" className="button left-arrow"
                                disabled={ numTeams === 2 }
                                onClick={ () => setNumTeams(numTeams - 1 > 2 ? numTeams - 1 : 2) }/>

                        <input id="num-teams" readOnly={ true } value={ numTeams }/>

                        <button type="button" color="accent" className="button right-arrow"
                                disabled={ numTeams === 4 }
                                onClick={ () => setNumTeams(numTeams + 1 < 4 ? numTeams + 1 : 4) }/>
                    </div>
                </section>
                <section className="create-button-section">
                    <button type="button" color="accent" className="button" onClick={ createGame }>Create Game</button>
                </section>
            </div>
        </form>
    </div>;
};

export default NewGame;
