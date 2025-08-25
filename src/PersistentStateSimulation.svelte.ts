import { defaultStorageObject } from './default-storage-object';

export let persistentState = $state(structuredClone(defaultStorageObject));

export const loadPersistentState = () => {
    console.log(`loaded in PersistentStorageSimulation.svelte.ts`);

    return $state.snapshot(persistentState);
};

export const savePersistentState = (stateToSave: any) => {
    Object.assign(persistentState, stateToSave);
    console.log(`saved in PersistentStorageSimulation.svelte.ts`);
};
