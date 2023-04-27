import React from "react";
import { Tab, TabList} from 'react-tab';


const WeatherCityTab = () => {
    return (
      <div>
        <TabList>
          <Tab>Tokyo</Tab>
          <Tab>Calgary</Tab>
          <Tab>New York</Tab>
        </TabList>
      </div>
    );
  }
  
  export default WeatherCityTab;