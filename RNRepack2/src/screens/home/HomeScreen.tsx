import {Switch, Text, View} from 'react-native';
import React, {useCallback} from 'react';

const LazyChunkA = React.lazy(
  () => import(/* webpackChunkName: "remote_chunk_a" */ './RemoteChunkA.tsx'),
);

const LazyChunkB = React.lazy(
  () => import(/* webpackChunkName: "remote_chunk_b" */ './RemoteChunkB.tsx'),
);

const HomeScreen = () => {
  const [showFirst, setShowFirst] = React.useState(true);

  const toggleSwitch = useCallback(() => setShowFirst(!showFirst), [showFirst]);

  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text
          style={{
            paddingVertical: 10,
          }}>
          Display Chunk A
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={showFirst ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={showFirst}
        />
      </View>

      {showFirst ? <LazyChunkA /> : <LazyChunkB />}
    </React.Suspense>
  );
};

export default HomeScreen;
