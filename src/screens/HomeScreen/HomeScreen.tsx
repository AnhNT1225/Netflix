import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, SafeAreaView, View} from 'react-native';
import MovieCard from '../../components/MovieCard/MovieCard';
import {IMovie} from '../../interface';
// import {ListRenderItem} from '../../interface';
import styles from './styles';

const HomeScreen: React.FC = () => {
  // const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMoviesFromApi = async () => {
      let response = await fetch(
        'https://movies-app1.p.rapidapi.com/api/movies',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
            'X-RapidAPI-Key':
              '4617a2b102msh13a8b36b5ed103dp1fece2jsneac6b06068c1',
          },
        },
      );
      let json = await response.json();
      setMovies(json.results);
    };
    getMoviesFromApi();
  }, []);

  // console.log('movies: ', movies);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={({item}: ListRenderItemInfo<IMovie>) => (
            <MovieCard item={item} />
          )}
          keyExtractor={(item: IMovie) => item._id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
