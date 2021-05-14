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

export const getQueenById = async (id) => {
    const res = await fetch(`http://www.nokeynoshade.party/api/queens/${id}`);
    const result = await res.json();

    return {
        id: result.id,
        name: result.name,
        winner: result.winner,
        missCongeniality: result.missCongeniality,
        quote: result.quote,
        seasons: result.seasons,
        lipsyncs: result.lipsyncs,
        image_url: result.image_url,
    };
};
