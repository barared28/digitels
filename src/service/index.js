import API from "../config/api";

export const fetchAllTodo = async () => {
    try {
        const res = await API.get('/todos');
        const todos = await Promise.all(res.data.map(async (val) => {
            const resItem = await API.get(`/todos/${val.id}/items`);
            return {
                id: val.id,
                desc: val.description,
                title: val.title,
                items: resItem.data,
            }
        }));
        return todos
    } catch (e) {
        console.log(e);
        return [];
    }
}