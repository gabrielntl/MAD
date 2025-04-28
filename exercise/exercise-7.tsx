import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

interface User {
  id: string;
  email?: string;
  firstName: string;
  lastName: string;
  picture: string;
  title?: string;
}

// Dummy user data
const dummyUsers: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    title: 'Mr',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    picture: 'https://randomuser.me/api/portraits/women/1.jpg',
    title: 'Ms',
  },
  {
    id: '3',
    firstName: 'Robert',
    lastName: 'Johnson',
    picture: 'https://randomuser.me/api/portraits/men/2.jpg',
    title: 'Mr',
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Williams',
    email: 'emily.williams@example.com',
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    title: 'Mrs',
  },
  {
    id: '5',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@example.com',
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    title: 'Dr',
  },
  {
    id: '6',
    firstName: 'Sarah',
    lastName: 'Miller',
    picture: 'https://randomuser.me/api/portraits/women/3.jpg',
    title: 'Ms',
  },
  {
    id: '7',
    firstName: 'David',
    lastName: 'Garcia',
    email: 'david.garcia@example.com',
    picture: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: '8',
    firstName: 'Lisa',
    lastName: 'Martinez',
    email: 'lisa.martinez@example.com',
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    title: 'Dr',
  },
  {
    id: '9',
    firstName: 'James',
    lastName: 'Rodriguez',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    title: 'Mr',
  },
  {
    id: '10',
    firstName: 'Jennifer',
    lastName: 'Wilson',
    email: 'jennifer.wilson@example.com',
    picture: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setUsers(dummyUsers);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderUserItem = ({item}: {item: User}) => (
    <View style={styles.userCard}>
      <Image source={{uri: item.picture}} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {item.lastName} {item.firstName}
        </Text>
        {item.email && <Text style={styles.userEmail}>{item.email}</Text>}
        {!item.email && (
          <Text style={styles.userEmail}>No email available</Text>
        )}
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Loading users...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.header}>User List</Text>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  userInfo: {
    marginLeft: 16,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserList;
