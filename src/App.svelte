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

<pre>
persistentState: {JSON.stringify(persistentState, null, 4)}
</pre>

<pre>
stateManager.state: {JSON.stringify(stateManager.state, null, 4)}
</pre>

<button onclick={mutateDirectly}> mutateDirectly </button>
<button onclick={mutateManager}> mutateManager </button>
<button onclick={() => stateManager.save()}> save via manager </button>
<button onclick={() => stateManager.load()}> load via manager </button>
