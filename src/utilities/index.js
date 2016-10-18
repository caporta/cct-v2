export const getRandomCoordinate = (coordinates) => {
    return coordinates[Math.floor(Math.random() * coordinates.length)];
}
