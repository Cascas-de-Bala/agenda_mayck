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
} from 'react-native';

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

  const sortContacts = () => {
    setContacts(
      contacts.sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  const handleAddContact = () => {
    if (contactName.trim() === '' || contactPhone.trim() === '' || !isValidPhoneNumber(contactPhone)) {
      return;
    }

    const newContact = {
      id: Date.now(),
      name: contactName,
      lastName: contactLastName,
      phone: formatPhoneNumber(contactPhone),
      email: contactEmail,
    };

    setContacts(
      [newContact, ...contacts].sort((a, b) => a.name.localeCompare(b.name))
    );
    setContactName('');
    setContactLastName('');
    setContactPhone('');
    setContactEmail('');
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
          }
        : contact
    );

    setContacts(updatedContacts);
    setEditingContactId(null);
    setEditingContactName('');
    setEditingContactLastName('');
    setEditingContactPhone('');
    setEditingContactEmail('');
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
    setModalVisible(true);
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Adiciona a máscara no telefone (99) 99999-9999
    return phoneNumber.replace(
      /(\d{2})(\d{5})(\d{4})/,
      '($1) $2-$3'
    );
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Verifica se o telefone tem pelo menos 9 dígitos
    return phoneNumber.replace(/\D/g, '').length >= 9;
  };

  useEffect(() => {
    sortContacts();
  
  
//   const contact1 = 
//     {
//       id: 1,
//       name: 'Mayck',
//       lastName: 'Edu',
//       phone: '17 98809 0058',
//       email: 'mayck22.03@hotmail.com',

//     };
//     setContacts([contact1]);
//   []
// })
  

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <TouchableOpacity style={styles.contactContainer} onPress={() => handleOpenEditModal(item)} >
            
            <Text style={styles.contactName}>{item.name} {item.lastName}</Text>
            
            {/* <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteContact(item.id)}
            >
              <Text style={styles.deleteButtonText}>🗑</Text>
            </TouchableOpacity> */}
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
            {editingContactId ? 'Editar Contato' : 'Adicionar Contato'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={editingContactName || contactName}
            onChangeText={
              editingContactName ? setEditingContactName : setContactName
            }
          />
          <TextInput
            style={styles.input}
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
              <Button title="Salvar" onPress={handleEditContact} />
            )}
            {!editingContactId && (
              <Button title="Adicionar" onPress={handleAddContact} />
            )}
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            {/* <Button title="Delete" onPress={() => setModalVisible(false) && handleDeleteContact(item.id)}/> */}
            
          </View>
        </View>
      </Modal>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#F44336',
    width: 30,
    height: 30,
    borderRadius: 15,
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
    backgroundColor: '#4CAF50',
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
    backgroundColor: '#fff',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})}