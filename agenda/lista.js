import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
  Alert,
  Image
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [contactName, setContactName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [editingContactId, setEditingContactId] = useState(null);
  const [editingContactName, setEditingContactName] = useState('');
  const [editingContactLastName, setEditingContactLastName] = useState('');
  const [editingContactPhone, setEditingContactPhone] = useState('');
  const [editingContactEmail, setEditingContactEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);


  const sortContacts = () => {
    setContacts(contacts.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleAddContact = () => {
    if (contactName.trim() === '' || contactPhone.trim() === '' || !isValidPhoneNumber(contactPhone)) {
      Alert.alert('Alerta', 'Preencha corretamente os dados', [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('CANCEL Pressed');
            setModalVisible(false);
          },
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return;
    }

    const newContact = {
      id: Date.now(),
      name: contactName,
      lastName: contactLastName,
      phone: formatPhoneNumber(contactPhone),
      email: contactEmail,
      image: image, // Add the image URI to the new contact object
    };

    setContacts([newContact, ...contacts].sort((a, b) => a.name.localeCompare(b.name)));
    setContactName('');
    setContactLastName('');
    setContactPhone('');
    setContactEmail('');
    setImage(null); // Reset the image state after adding a contact
    setModalVisible(false);
  };

  const handleEditContact = () => {
    if (
      editingContactName.trim() === '' ||
      editingContactPhone.trim() === '' ||
      !isValidPhoneNumber(editingContactPhone)
    ) {
      return;
    }

    const updatedContacts = contacts.map((contact) =>
      contact.id === editingContactId
        ? {
          ...contact,
          name: editingContactName,
          lastName: editingContactLastName,
          phone: formatPhoneNumber(editingContactPhone),
          email: editingContactEmail,
          image: image, // Update the image URI if one is selected
        }
        : contact
    );

    setContacts(updatedContacts);
    setEditingContactId(null);
    setEditingContactName('');
    setEditingContactLastName('');
    setEditingContactPhone('');
    setEditingContactEmail('');
    setImage(null); // Reset the image state after editing a contact
    setModalVisible(false);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleOpenEditModal = (contact) => {
    setEditingContactId(contact.id);
    setEditingContactName(contact.name);
    setEditingContactLastName(contact.lastName);
    setEditingContactPhone(contact.phone);
    setEditingContactEmail(contact.email);
    setImage(contact.image); // Set the image URI for editing
    setModalVisible(true);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Add phone number formatting logic here
    return phoneNumber; // Replace with your desired formatting function
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Verifica se o telefone tem pelo menos 9 dígitos
    return phoneNumber.replace(/\D/g, '').length >= 9;
  };

  useEffect(() => {
    sortContacts();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactContainer} onPress={() => handleOpenEditModal(item)}>
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
            <Text style={styles.contactName}>{item.name} {item.lastName}</Text>
            {/* <TouchableOpacity
              style={styles.editButton}
              onPress={() => handleOpenEditModal(item)}
            >
              <Text style={styles.editButtonText}>✎</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteContact(item.id)}
            >
              <Text style={styles.deleteButtonText}>🗑</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>

          <Text style={styles.modalTitle}>
            {editingContactId ? 'Editar Contato' : 'Novo Contato'}
          </Text>
          <View style={styles.containerImg}>
            {image && (
              <Image style={styles.imgNovoContato} source={{ uri: image || setImage }} />
            )}
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.inputImage}>Selecionar Imagem</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholderTextColor={'white'}
            placeholder="Nome"
            value={editingContactName || contactName}
            onChangeText={
              editingContactName ? setEditingContactName : setContactName
            }
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'white'}
            placeholder="Sobrenome"
            value={editingContactLastName || contactLastName}
            onChangeText={
              editingContactLastName
                ? setEditingContactLastName
                : setContactLastName
            }
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'white'}
            placeholder="Telefone"
            value={editingContactPhone || contactPhone}
            onChangeText={
              editingContactPhone
                ? setEditingContactPhone
                : setContactPhone
            }
            keyboardType="numeric"
            maxLength={14}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'white'}
            placeholder="E-mail"
            value={editingContactEmail || contactEmail}
            onChangeText={
              editingContactEmail
                ? setEditingContactEmail
                : setContactEmail
            }
            keyboardType="email-address"
          />
          <View style={styles.buttonContainer}>
            {editingContactId && (
              <TouchableOpacity title="Salvar" onPress={handleEditContact} style={styles.btnContainerBottom} >
                <Entypo name="save" size={24} color="white" />
                <Text style={styles.txtContainerBottom}>Salvar</Text>
              </TouchableOpacity>
            )}
            {!editingContactId && (
              <TouchableOpacity onPress={handleAddContact} style={styles.btnContainerBottom}>
                <Entypo name="add-user" size={24} color="white" />
                <Text style={styles.txtContainerBottom}>Salvar</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity title="Cancelar" onPress={() => setModalVisible(false)} style={styles.btnContainerBottom}>
              <Entypo name="warning" size={24} color="white" />
              <Text style={styles.txtContainerBottom}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10

  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#2196F3',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  contactContainer: {
    marginBottom: 20,
    width: width,
    height: 'auto',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#171719',
    borderColor: '#2D2D2F',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid'

  },
  contactName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 0,
    marginStart: 15
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  list: {
    flex: 1,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,


  },
  addButton: {
    backgroundColor: '#022e75',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 32,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  input: {
    height: 40,

    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',

  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 0

  },
  btnContainerBottom: {
    border: 'none',
    color: 'white',
    alignItems: 'center'

  },
  txtContainerBottom: {
    color: 'white',
  },
  imgNovoContato: {
    width: 150,
    height: 150,
    alignItems: 'center',
    borderRadius: 100,
  },
  containerImg: {
    alignItems: 'center',
  },
  inputImage: {
    backgroundColor: '#4287f5',
    padding: 6,
    color: 'white',
    borderRadius: 5,
    margin: 5
  }
});

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height