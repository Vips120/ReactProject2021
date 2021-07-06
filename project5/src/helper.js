export const randomCoin = (arr) => {
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
};

/***
 * RandomCOlorPalette
 */

export const randomColor = () => {
    return '#' + Math.random().toString(16).substr(-6);

};