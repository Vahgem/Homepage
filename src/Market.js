
import './market.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import Card from './market/card.js';
import Popup from './market/Popup.js';
function Market() {

  return (
    <div className="App">
      <Popup/>
     <Tabs >
    <TabList>
      <Tab style={{ width:"35%",textAlign:"center"}}>BUY</Tab>
      <Tab style={{ width:"35%",textAlign:"center"}}>SELL</Tab>
    </TabList>

    <TabPanel>
     <div><Card/></div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
}

export default Market;
