import React from 'react'
import Article from './Article'
import History from './History'
import Settings from './Settings'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabNavigation extends React.Component {
  render () {
    return (
        <Tabs>
          <TabList className="tablist">
            <Tab>Current Mood</Tab>
            <Tab>Mood History</Tab>
            <Tab>Settings</Tab>
          </TabList>

          <TabPanel className="currentMood">
            <Article />
          </TabPanel>
          <TabPanel className="moodHistory">
            <History />
          </TabPanel>
          <TabPanel className="moodSettings">
            <Settings />
          </TabPanel>
      </Tabs>
    )
  }
}

export default TabNavigation
