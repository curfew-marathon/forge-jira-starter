import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';

function App() {
    const [context, setContext] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        invoke('getContext').then(setContext).catch(setError);
    }, []);

    if (error) return <div>Error loading context</div>;
    if (!context) return <div>Loading...</div>;

    return (
        <div>
            <h3>Project</h3>
            <p>{context.project.name} ({context.project.key}) — {context.project.type}</p>
            <h3>Logged in as</h3>
            <p>{context.user.displayName} — {context.user.email}</p>
        </div>
    );
}

export default App;
