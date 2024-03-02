import React, { Component } from 'react';
import { ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <UserName />
      <Password />
      <SignInButton />
    </ScrollView>
  );
};

class UserName extends Component {
  render() {
    return (
      <View style={styles.profile}>
        <Text style={styles.nameInput}>UserName</Text>
        <TextInput style={[styles.input, { paddingLeft: 20 }]} placeholder="Masukan username anda"/>
      </View>
    );
  }
}

class Password extends Component {
  render() {
    return (
      <View style={styles.profile}>
        <Text style={styles.nameInput}>Password</Text>
        <TextInput style={[styles.input, { paddingLeft: 20 }]} placeholder="Masukan password anda" />
      </View>
    );
  }
}

class SignInButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 18,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  nameInput: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  profile: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  signInButton: {
    backgroundColor: '#FF7417',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signInText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
});


export default App;