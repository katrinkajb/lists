export const getQueens = async () => {
    const res = await fetch('http://www.nokeynoshade.party/api/queens/all');
    const results = await res.json();

    return results.map((queen) => ({
        id: queen.id,
        name: queen.name,
        image_url: queen.image_url,
        quote: queen.quote,
    }));
};
