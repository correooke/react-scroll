const place = "https://via.placeholder.com/150/FF0000/FFFFFF?text=";

export const data = Array(100)
    .fill()
    .map((e, i) => ({id: i, name: `Item ${i}`, picture: `${place}Item ${i}`}));
