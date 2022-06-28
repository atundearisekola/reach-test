/**
 * defines the shape of a to-do object
 */
export interface DeviceData {
    cvmdata: string;
    videofiles: string;
  }

  /**
 * defines the shape of a to-do toggle object
 */
export interface CvmData {
  RoI: string[];
  frame_data: object;
   
   
  }

  /**
   * This define to-do action and expects an array of to-dos and the methods to add or update a to-do.
   */
  export type DeviceContextType = {
    deviceIds: string[];
    deviceData: DeviceData
    fetchDeviceIDs: () => void;
    fetchDeviceData: (deviceId: string) => void;
    
  };

  /**
   * This define signature for the initial state
   */
   export type DeviceInitialType = {
    deviceIds: string[]; 
    deviceData: DeviceData

  };

  interface Props {
    children: React.ReactNode;
  }
  