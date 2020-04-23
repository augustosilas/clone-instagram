import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import axios from 'axios';

import {Post, Header, Avatar, Name, PostImage, Description} from './styles';

export default function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      axios
        .get('http://192.168.15.15:3000/feed?_expand=author&_limit=5&_page=1')
        .then(reponse => console.log(reponse));
      // .catch(err => console.log(err));

      // const data = await response.json();
      // setFeed(data);
    }

    loadFeed();
  }, []);

  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        renderItem={({item}) => (
          <Post>
            <Header>
              <Avatar source={{uri: item.author.avatar}}></Avatar>
              <Name>{item.author.name}</Name>
            </Header>

            <PostImage source={{uri: item.image}}></PostImage>

            <Description>
              <Name>{item.author.name}</Name> {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
