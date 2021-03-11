import Antenna from 'App/models/Antenna'
import Card from 'App/models/Card'
import Mast from 'App/models/Mast'
import Station from 'App/models/Station'

export default function parseModel(item) {
    switch (item.type) {
        case 'Site':
            return new Card(item)
        case 'BaseStation':
            return new Station(item)
        case 'AMC':
            return new Mast(item)
        case 'Antenna_RAN':
            return new Antenna(item)
        default:
            throw new Error('Модель не распознана')
    }
}