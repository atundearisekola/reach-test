import {DeviceInitialType } from "../@types/device";
import { actions } from "../constant";
//Reducer to Handle Actions
export const deviceReducer = (state: DeviceInitialType, action: any) => {
    switch (action.type) {
       
      /**
       * Handle fetch  deviceIds success response
       */
      case actions.FETCH_DEVICE_ITEM: {
       
            return {...state, deviceData: action.payload };
      }
      /**
       * Handle fetch  deviceIds success response
       */
        case actions.FETCH_DEVICE_IDS: {
          
          return {...state, deviceIds: action.payload };

      }

      
      default:
        return state;
    }
  };