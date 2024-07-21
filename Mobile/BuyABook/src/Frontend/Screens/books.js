import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const BooksScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.1.77:3000'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Image source={{ uri: item.photo }} style={{ width: '100%', height: 200 }} />
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{item.title}</Text>
      <Text style={{ fontSize: 16 }}>{item.author}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BooksScreen;
