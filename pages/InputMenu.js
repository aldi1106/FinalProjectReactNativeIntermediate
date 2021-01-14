import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';

const InputMenu = ({navigation}) => {
  const inputNama = React.createRef();
  const inputDesc = React.createRef();
  //   const inputAuthor = React.createRef();

  const [nama, setNama] = useState();
  //   const [penulis, setPenulis] = useState();
  const [deskripsi, setDeskripsi] = useState();

  const onChangeNama = (nama) => {
    setNama(nama);
  };

  //   const onChangePenulis = (penulis) => {
  //     setPenulis(penulis);
  //   };

  const onChangeDeskripsi = (deskripsi) => {
    setDeskripsi(deskripsi);
  };

  const handleAddMenu = () => {
    firestore()
      .collection('menu')
      .add({
        name: nama,

        description: deskripsi,
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
        inputNama.current.clear();
        inputDesc.current.clear();

        alert('Coffee Menu successfully added');
        navigation.navigate('ListMenu');
      })
      .catch(function (error) {
        console.error('Error adding menu: ', error);
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.createTitle}>Input Data Menu</Text>
      <Input
        placeholder="Nama Menu"
        ref={inputNama}
        onChangeText={(nama) => onChangeNama(nama)}
      />

      <Input
        placeholder="Deskripsi/Harga"
        ref={inputDesc}
        onChangeText={(deskripsi) => onChangeDeskripsi(deskripsi)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddMenu}>
        <Text>Save </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#de893e',
    width: '50%',
    padding: 10,
  },

  createTitle: {
    alignItems: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default InputMenu;
