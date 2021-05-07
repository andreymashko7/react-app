import './App.css';
// import Section from './components/Section';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import PantingList from './components/PaintingList';
// import paintings from './paintings.json';
import Alert from './components/Alert/Alert.js';
import Container from './components/Container/Container';

function App() {
  return (
    <div>
      <Container>
        {/* <PantingList items={paintings} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <Alert type="small" classNames="big red" styles={{ color: '#fff' }} />
        <Alert title="Hello" type="middle" />
        <Alert title="Hello" type="large" />
      </Container>
    </div>
  );
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
