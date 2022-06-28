import React, { useEffect } from 'react';
import {DeviceData} from '../@types/device';
import {useDeviceContext} from '../context/constext';
import ReactPlayer from 'react-player'
import styled from 'styled-components';

export interface DeviceItemProps {
  className?: string;
 
}

export const DeviceItem: React.FC<DeviceItemProps> = ({className}) => {
  /**
   * Call useDeviceContext to get fetchDeviceData and deviceData function from state
   */
  const {fetchDeviceData, deviceData} = useDeviceContext()

  /**
   * Make an API call to fetch device data by device ID
   */

  useEffect(()=>{
    fetchDeviceData("LabEye-dVr")
  },[])

 return( 

    <div>

        <ReactPlayer controls={true} url='https://frontend-test-2022-bucket.s3.eu-west-2.amazonaws.com/frontend_test.mp4' />
        <div className='frame'>
          <h3 className='legend'>Frame Information</h3>

          <div className='frame-content'>

            <div className='frame-detail'>

              <p className='text'>Frame Number :</p>
              <p className='text'>Bounding Box :</p>
              <p className='text'>Historam :</p>

            </div>

            <div className='frame-data'>
              <p className='text'>R B G</p>
              <span className='color-box' />
              
            </div>

          </div>

        </div>
        <span className='tracker' />

    </div>
  
 )
};


