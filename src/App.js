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
// import authContext from './context/auth-context';
// import AppBar from './components/AppBar/AppBar';
// import SignupForm from './components/SignupForm/SignupForm';
import { Component } from 'react';
// import Modal from './components/Modal/Modal';
// import IconButton from './components/IconButton/IconButton.js';
// import { ReactComponent as AddIcon } from './icons/add.svg';
// import SignupForm from './components/SignupForm/SignupForm';
// import SkipEffectOnFirstRender from './components/SkipEffectOnFirstRender/SkipEffectOnFirstRender';
// import Friends from './components/Friends/Friends';

class App extends Component {
  state = {
    showModal: false,
    // isLoggedIn: false,
    // user: { name: 'Mango' },
    // onLogIn: () => {
    //   this.setState({ isLoggedIn: true });
    // },
    // onLogOut: () => {
    //   this.setState({ isLoggedIn: false });
    // },
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    // const { showModal } = this.state;

    return (
      <>
        {/* <Friends /> */}
        {/* <SkipEffectOnFirstRender /> */}
        {/* <SignupForm /> */}
        {/* <Counter /> */}
        {/* <Clock />  */}
        {/* <IconButton onClick={this.toggleModal} aria-label="Fucking IT">
          <AddIcon width="100" height="100" fill="#fff" />
        </IconButton> */}

        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, fugit architecto aperiam voluptatum optio cupiditate
              placeat repellendus quae, at voluptates ducimus esse dolor nobis
              excepturi. Perferendis voluptas a nulla pariatur?
            </p>
            <button type="button" onClick={this.toggleModal}>
              close
            </button>
          </Modal>
        )} */}
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
