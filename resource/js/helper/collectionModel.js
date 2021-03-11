export default function collectionModel(array, Model) {
    return array.map(item => new Model(item))
}