import API from "../config/api";
import { sortFromOldest } from "./helper";

export const fetchAllTodo = async () => {
    try {
        const res = await API.get('/todos');
        const todos = await Promise.all(res.data.map(async (val) => {
            const resItem = await API.get(`/todos/${val.id}/items`);
            const items = sortFromOldest(resItem.data);
            console.log(items);
            return {
                id: val.id,
                desc: val.description,
                title: val.title,
                items,
            }
        }));
        return todos
    } catch (e) {
        console.log(e);
        return [];
    }
}

export const fetchTod = async (id) => {
    try {
        const resItem = await API.get(`/todos/${id}/items`);
        const items = sortFromOldest([...resItem.data]);
        return items;
    } catch (e) {
        console.log(e);
    }
}