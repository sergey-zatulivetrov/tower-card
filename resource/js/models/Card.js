import collectionModel from 'App/helper/collectionModel'
import Characteristic from 'App/models/Characteristic'

export default function Card({id, name, description, resourceCharacteristic, resourceRelationship}) {
    this.id = parseInt(id)
    this.name = String(name)
    this.description = String(description)
    this.characteristics = collectionModel(resourceCharacteristic, Characteristic)
    this.toRefers = resourceRelationship.map(item => parseInt(item.id))

    return this
}