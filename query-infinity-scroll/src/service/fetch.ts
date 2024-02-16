export const fetchItems = async (pageParam: number) => {
    const res = await fetch('https://randomuser.me/api/?results=20')
    const data = await res.json();

    if (data) return data;
    else return null;
}