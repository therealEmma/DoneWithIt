import React from 'react'
import Screen from '../components/Screen'
import { FlatList } from 'react-native'
import Card from '../components/Card';

interface ListingScreenProps{
    id: number;
    title: string;
    price: number,
    image: any,
}

const listings : ListingScreenProps[] = [
    {
        id: 1,
        title: 'Red Jacket For Sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]

const ListingScreen = () => {
  return (
    <Screen>
        <FlatList
         data={listings}
         keyExtractor={listings => listings.id.toString()}
         renderItem={({item}) => <Card title={item.title} subtitle={"$" + item.price} image={item.image} />}
         />
    </Screen>
  )
}

export default ListingScreen
