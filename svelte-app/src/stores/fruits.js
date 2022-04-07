import { writable, get} from 'svelte/store';

const _fruits = writable([
    {id:1, name:'Apple'},
    {id:2, name:'Banana'},
    {id:3, name:'Cherry'}
]);

export const fruits = {
    ..._fruits, 
    getList: () => {
        return get(_fruits).map((f) => f.name)
    },
    setFruit:(name) => {
        _fruits.update((fruits) => {
            fruits.push({
                id: fruits.length +1,
                name
            });
            return fruits;
        });
    },
}
