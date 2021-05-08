import './App.css';
// import Section from './components/Section';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import PantingList from './components/PaintingList';
// import paintings from './paintings.json';
// import Alert from './components/Alert/Alert.js';
// import Container from './components/Container/Container';
// import Counter from './components/Counter/Counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import MyForm from './components/MyForm/MyForm';
import authContext from './context/auth-context';
import { Component } from 'react';
import AppBar from './components/AppBar/AppBar';

class App extends Component {
  state = {
    isLoggedIn: false,
    user: { name: 'Mango' },
    onLogIn: () => {
      this.setState({ isLoggedIn: true });
    },
    onLogOut: () => {
      this.setState({ isLoggedIn: false });
    },
  };
  render() {
    return (
      <>
        <authContext.Provider value={this.state}>
          <div>
            <AppBar />
          </div>
        </authContext.Provider>
        {/* <Container> */}
        {/* <MyForm /> */}
        {/* <Dropdown /> */}
        {/* <Counter /> */}
        {/* <PantingList items={paintings} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Alert type="small" classNames="big red" styles={{ color: '#fff' }} />
        <Alert title="Hello" type="middle" />
        <Alert title="Hello" type="large" /> */}
        {/* </Container> */}
      </>
    );
  }
}

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default App;
