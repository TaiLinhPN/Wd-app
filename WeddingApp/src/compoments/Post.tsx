import {faHeart, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useRef } from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import color from '../assets/color';
import globalStyles, { appWidth, screenWidth } from '../assets/style';
import MyIcon from 'react-native-vector-icons/AntDesign';
import MyIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import MyIcon2 from 'react-native-vector-icons/FontAwesome5';
import MyIcon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import MyIcon5 from 'react-native-vector-icons/FontAwesome';

const Post = () => {
    useEffect(() => {
       Image.getSize(
           'https://i.pinimg.com/564x/08/49/28/084928666789f3e1c309eb857b2e21a2.jpg',
           (w, h) => {
               console.log("w: ", w, " h: ", h);
               
           }
       );
    }, [])
  return (
    <View style={globalStyles.app}>
      <View style={[globalStyles.row, globalStyles.spaceBetween]}>
        <View style={[globalStyles.row, {alignItems: 'flex-end'}]}>
          <Image
            source={{
              uri: `https://i.pinimg.com/564x/08/49/28/084928666789f3e1c309eb857b2e21a2.jpg`,
            }}
            style={styles.icon}></Image>
          <View>
            <Text>User name</Text>
            <Text>Time.</Text>
          </View>
        </View>
        <MyIcon2 name="user-plus" />
      </View>
      <Text>
        Let us help you create the wedding of your dreams, what do you think
        about this? Connect with us now!!!
      </Text>
          <Image
        source={{
          uri: `https://i.pinimg.com/564x/08/49/28/084928666789f3e1c309eb857b2e21a2.jpg`,
        }}
        style={styles.image}></Image>
      <View style={[globalStyles.row, globalStyles.spaceBetween]}>
        <View style={[globalStyles.row]}>
          <MyIcon name="heart" />
          <Text>12</Text>
          <MyIcon1 name="comment-text-outline" />
          <Text>12</Text>
        </View>
        <MyIcon3 name="dots-horizontal" />
      </View>
      <View style={[globalStyles.row, styles.comment]}>
        <TextInput
          style={styles.input}
          placeholder="leave a comment..."

          // underlineColorAndroid="transparent"
        />
        <MyIcon5
          style={styles.searchIcon}
          name="send-o"
          size={20}
          color="#000"
        />
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
    image: {
      width: screenWidth,
    height: 200,
    marginLeft: -16,
    marginRight: -16,
  },
  comment: {
    marginRight: -16,
    backgroundColor: '#E4F2FF',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 16,
    backgroundColor: '#E4F2FF',
    color: '#424242',
  },
  line: {
    height: 1,
    width: screenWidth,
    backgroundColor: '#AAAAAA',
    marginLeft: -16,
    marginRight: -16,
  },
});
