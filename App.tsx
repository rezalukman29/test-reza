import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { getFood } from './src/actions/foodActions';
import Spacer from './src/components/atoms/Spacer/Spacer';
import ItemCard from './src/components/molecules/ItemCard';

export default function App() {
  const [items, setItems] = useState<Array<{ [key: string]: any }>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handleGetFood = async (page: number) => {
    setLoading(true);
    try {
      let result: any = await getFood(page);
      page === 1? setItems(result) : setItems([...items, ...result]);
      setLoading(false);
    } catch (error: any) {

    }
  }

  useEffect(() => {
    handleGetFood(page);
  }, [page])

  const renderFooter = () => (
    <View style={{ height: 40, width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        {loading && <>
            <ActivityIndicator  style={{ marginRight: 4 }} />
            <Text>Load more data</Text>
        </>}
    </View>
)

  return (
    <View style={styles.container}>
      <Spacer xl/>
      {loading && items.length === 0 ? <ActivityIndicator /> :
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          renderItem={({ item, index }: any) => (
           <ItemCard key={index} item={item} index={index}/>
          )}
          // keyExtractor={(item: any) => `${item.id}-${randomNumber(3)}`}
          keyExtractor={(item: any) => item.id}
          numColumns={1}
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          removeClippedSubviews={false}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.2}
          onEndReached={() => !loading && setPage(page + 1)}
        />
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
