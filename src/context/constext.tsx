/**
 * React Context allows you to share and manage state across your components without passing down props. 
 * The context will provide the data to just the components that need to consume it.
 * @author Toyeeb Atunde
 */

import * as React from 'react';
import { DeviceContextType, DeviceData, DeviceInitialType, Props } from '../@types/device';
import { BASE_URL } from '../constant';
import { deviceReducer } from './reducer';
import { actions } from "../constant";

//Initial State and Actions
const InitialState: DeviceInitialType = {

  deviceIds: [],
  deviceData: {} as DeviceData
  
}

  
  /**
   * Create DeviceIds context custom hook
   */
   const DeviceContext = React.createContext<DeviceContextType | undefined>(undefined);

   /**
    * Instead of calling  useContext(DeviceContext) every time, I use the  useDeviceContext hook, as a custom hook
    * @returns DeviceContext
    */

  export  function useDeviceContext() {
      const useDeviceContext = React.useContext(DeviceContext);
      if (!useDeviceContext) {
        throw new Error('useDeviceContext must be used within the useDeviceContext.Provider');
      }
      return useDeviceContext;
    }

 /**
   * Create DeviceIds provider custom hook
   */
  const DeviceProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(deviceReducer, InitialState) 

  const value = {
    // List of deviceIds
    deviceIds: state.deviceIds,

    // The device data
    deviceData: state.deviceData,
   
    /**
     * Define function to fetch the list of deviceIds from the server
     */

    fetchDeviceIDs: async() => {
      try {

        const response = await fetch(`${BASE_URL}/getdevices?userId=100&orgId=Lumi`,{
          mode: 'no-cors',
      });
       let data = []
        if (response.ok) {
            data = await response.json()
        
        }

        dispatch({ type: actions.FETCH_DEVICE_IDS, payload:data });

      } catch (error) {
        console.log("__FETCH-ERROR-RESPONSE__", error)
      }
     
    },

    /**
     * Define function to fetch the device item from the server
     */

     fetchDeviceData: async(deviceId: string) => {
      try {

        if (deviceId === "") {
          return false;
        }

         const response = await fetch(`${BASE_URL}/getdevicedata?deviceId=${deviceId}`,{
          mode: 'no-cors',
      });
       let data = []
        if (response.ok) {
            data = await response.json()
        
        }

        dispatch({ type: actions.FETCH_DEVICE_ITEM, payload:data });

      } catch (error) {
        console.log("__FETCH-ERROR-RESPONSE__", error)
      }
     
    },

  };

  
  return  <DeviceContext.Provider value={value}> {children} </DeviceContext.Provider>
  
};
/**
 * export the provider as a wrapper for the root component
 */
export default DeviceProvider