import collectionModel from 'App/helper/collectionModel'
import Characteristic from 'App/models/Characteristic'

export default function Mast({id, description, resourceCharacteristic, resourceRelationship}) {
    this.id = parseInt(id)
    this.description = String(description)
    this.characteristics = collectionModel(resourceCharacteristic, Characteristic)
    this.toRefers = resourceRelationship.map(item => parseInt(item.id))

    return this
}