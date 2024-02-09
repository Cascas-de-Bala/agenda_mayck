import React from 'react';
import Toggle from 'react-native-toggle-input';

const App = () => {
  const [toggle, setToggle] = React.useState(false);

  return <Toggle toggle={toggle} setToggle={setToggle} />;
};


export default App
