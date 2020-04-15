import React, { useState } from 'react';
import './App.css';
import LoginForm from './login-form';
import WindowsMeasures from './window-measures';
import Counter from './counter';
import Timer from './timer';
import Collapsable from './collapsable';
import UserManager, { useUserContext } from './user-context';
import Tabs, { Tab, TabContent } from './tabs';

const Separator = () => {
  return (
    <>
      <br />
      <hr />
    </>
  )
}

const Header = () => {
  const { user } = useUserContext()
  return (
    <div>
      {
        user.name && user.surname ?
          `The name is ${user.name}` :
          "No user :("
      }
    </div>
  )
}

const Footer = () => {
  const { user } = useUserContext()
  return (
    <div>
      {
        user.name && user.surname && `The surname is ${user.surname}`
      }
    </div>
  )
}

const Blue = () => "I'm blue"

const TabsExercise = () => {
  const [selectedTab, setSelectedTab] = useState("blue")
  return (
    <div>
      <h1>Compound component</h1>
      <Tabs initialValue="red">
        <Tab value="blue" Content={Blue}> Blue </Tab>
        <Tab value="red" Content={() => <div>I'm red</div>}> Red 👨‍👩‍👦</Tab>
        <Tab value="white" Content={() => <div>What?</div>}> White </Tab>
      </Tabs>
      <h1>Controlled component</h1>
      <Tabs value={selectedTab} onChange={setSelectedTab}>
        <Tab value="blue" Content={() => <div>I'm blue</div>}> Blue </Tab>
        <Tab value="red" Content={() => <div>I'm red</div>}> Red 👨‍👩‍👦</Tab>
        <Tab value="white" Content={() => <div>What?</div>}> White </Tab>
      </Tabs>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Collapsable title="Counter">
        <Counter />
      </Collapsable>

      <Separator />

      <Collapsable title="Timer">
        <Timer />
      </Collapsable>

      <Separator />

      <UserManager>
        <Header />
        <LoginForm />
        <Footer />
        <Separator />
      </UserManager>

      <Collapsable title="Windows Measures">
        <WindowsMeasures />
      </Collapsable>

      <Separator />
      <TabsExercise />
      <Separator />
    </div>
  );
}

export default App;
