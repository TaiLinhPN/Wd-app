import React from 'react'
import { ScrollView, Text } from 'react-native'
import Post from '../compoments/Post'

const HomeScreen = () => {
  return (
    <>
      <ScrollView>
        <Text>HomeScreen</Text>
        <Post />
      </ScrollView>
    </>
  );
}

export default HomeScreen