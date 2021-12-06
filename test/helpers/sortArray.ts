export function sortById(array: any[]) {
    return array.sort((a, b) => (a.id < b.id ? -1 : 1));
}
