<script lang="ts">
    import {
        loadPersistentState,
        persistentState,
        savePersistentState,
    } from './PersistentStateSimulation.svelte';
    import { StateManager } from './state-manager.svelte';
    const mutateDirectly = () => {
        persistentState.first!.list.push(new Date().toLocaleString('en-GB'));
        console.log('mutated directly');
    };
    const mutateManager = () => {
        stateManager.state.first!.list.push(new Date().toLocaleString('en-GB'));
        console.log('mutated manager');
    };
    let stateManager = new StateManager(
        loadPersistentState,
        savePersistentState
    );
</script>

<div class="container">
    <pre>
persistentState: {JSON.stringify(persistentState, null, 4)}
    </pre>

    <pre>
stateManager.state: {JSON.stringify(stateManager.state, null, 4)}
    </pre>

    <div class="buttons">
        <button onclick={() => stateManager.load()}>Load via manager</button>
        <button onclick={() => stateManager.save()}>Save via manager</button>
        <button onclick={mutateDirectly}>Mutate Directly</button>
        <button onclick={mutateManager}>Mutate Manager</button>
    </div>
</div>

<style>
    pre {
        background-color: #f5f5f5;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        font-family: monospace;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    button {
        background-color: #4caf50;
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        margin: 0.25rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background-color 0.2s ease;
    }

    button:hover {
        background-color: #45a049;
    }

    button:active {
        background-color: #3e8e41;
    }

    div.container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 800px;
        margin: 2rem auto;
        padding: 1rem;
        font-family: Arial, sans-serif;
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
</style>
