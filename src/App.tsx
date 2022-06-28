import React from 'react';
import styled from 'styled-components';
import {DeviceHeader} from './components/DeviceHeader';
import {DevicePage} from './components/DevicePage';
import {useDeviceContext} from './context/constext';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const App: React.FC = () => {

  /**
   * Define useDeviceContext custom hooks
   */

  const {fetchDeviceIDs, deviceIds = []} = useDeviceContext()

  /**
   * Define effect to fetch list of devices
   */
    React.useEffect(() => {
    
      fetchDeviceIDs()
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
   
    <AppContainer className='App'>
      {/* <DeviceHeader/> */}
      <DevicePage devices={deviceIds}/>
    </AppContainer>
   
  );
};
