import React, { FunctionComponent, useEffect, useState } from 'react';
import mainStyles from './mainStyles'
import { Button, Text, TextInput, View } from 'react-native';
import { useInstance } from 'react-ioc';
import ApiService from '../../services/ApiService';
import { observer } from 'mobx-react';
import { Picker } from '@react-native-picker/picker';

const Main: FunctionComponent = (): JSX.Element => {
  const apiService = useInstance(ApiService);
  const { tags, getTags, getTagsCount, tagsCount } = apiService;

  const [tagsPerPage, setTagsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const handleLogout = () => {
    apiService.logout();
  }

  useEffect(() => {
    setPage(1)
    setPagesCount(Math.ceil(tagsCount/tagsPerPage))
  }, [tagsPerPage]);

  useEffect(() => {
    getTagsCount()
    getTags(tagsCount, 0);
    setPagesCount(Math.ceil(tagsCount/tagsPerPage))
  }, []);

  return (
    <View style={mainStyles.root}>
      {tags && tags.slice(tagsPerPage*(page-1),tagsPerPage*page).map((item, index) => {
        return <Text key={index}>{item.title}: {item.value}</Text>        
      })}
      <View style={{marginTop: 20}}>
        <Text>Количество тегов на странице: </Text>
        <Picker 
          style={mainStyles.picker}
          selectedValue={tagsPerPage}
          onValueChange={setTagsPerPage}
        >
          <Picker.Item label="3" value={3} />
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="20" value={20} />
        </Picker>
      </View>
      <View style={mainStyles.paginatorContainer}>
        <View style={mainStyles.paginator}>
          <Button
            title='<-'
            onPress={() => {(page - 1 > 0) ? setPage(page - 1) : setPage(page)}}
          />
          <Text>Cтраница: {page}</Text>
          <Button
            title='->'
            onPress={() => {(pagesCount >= page + 1) ? setPage(page + 1) : setPage(page)}}
          />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <Button
          title="Выйти"
          onPress={() => handleLogout()}
        />
      </View>
    </View>
  )
}

export default observer(Main);
