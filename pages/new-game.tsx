import React, { useState } from 'react';
import { initializeApollo } from '../lib/apollo';
import { ViewerDocument } from '../lib/viewer.graphql';

const NewGame = () => {
    const [ numTeams, setNumTeams ] = useState<number>(2);

    const createGame = async () => {

    };

    return <div className="new-game-page">
        <form className="new-game-form">
            <h2>New Game</h2>

            <div className="new-game-settings">
                <section className="team-count-section">
                    <label>How many teams?</label>
                    <div className="team-count">
                        <button type="button" color="accent" className="button left-arrow"
                                disabled={numTeams === 2}
                                onClick={() => setNumTeams(numTeams - 1 > 2 ? numTeams - 1 : 2)} />

                        <input id="num-teams" readOnly={true} value={ numTeams } />

                        <button type="button" color="accent" className="button right-arrow"
                                disabled={numTeams === 4}
                                onClick={() => setNumTeams(numTeams + 1 < 4 ? numTeams + 1 : 4)} />
                    </div>
                </section>
                <section className="create-button-section">
                    <button type="button" color="accent" className="button" onClick={createGame}>Create Game</button>
                </section>
            </div>
        </form>
    </div>;
};

export const getStaticProps = async () => {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: ViewerDocument,
    })

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    }
};

export default NewGame;
