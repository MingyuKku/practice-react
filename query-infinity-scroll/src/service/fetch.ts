export const fetchItems = async (id: number) => {
    
    const res = await fetch(`https://randomuser.me/api/?results=${id}`)
    // const res = await fetch(`https://test-persona-api.hiing.co/v1.10/rooms/1,2,${id},15`)
    const data = await res.json();

    if (data) return data;
    else return null;
}