import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../redux/rootReducer';
import {getPosts} from '../redux/slices/getPostsSlice';

export type SeriesApiDemoScreenProps = {};

export const SeriesApiDemoScreen = (): JSX.Element => {
  const {posts} = useSelector((state: RootState) => state.posts);
  const dispatch = useAppDispatch();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    if (posts.length !== 0) {
      const time = new Date().getTime();
      setEndTime(time);
    }
  }, [posts]);

  const calculateApiResponseTime = () => {
    const time = new Date().getTime();
    setStartTime(time);
    dispatch(getPosts(2));
  };

  return (
    <View
      style={{
        marginTop: 200,
        alignItems: 'center',
      }}>
      <Text>{`The time taken: ${
        endTime - startTime > 0 ? endTime - startTime : 0
      } ms`}</Text>
      <Button
        onPress={calculateApiResponseTime}
        title="Series API"
        color="#841584"
      />
    </View>
  );
};
