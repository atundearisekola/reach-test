import React from 'react';
import styled from 'styled-components';
import {DeviceItem} from './DeviceItem';


export interface DevicePageProps {
  devices: Array<string>;
  classNameName?: string;
 
}

const _DevicePage: React.FC<DevicePageProps> = ({devices, classNameName,}) => {
  return (
    <div className="browser">
  <div className="chrome">
    <a href="#" className="red"></a>
    <a href="#" className="amber"></a>
    <a href="#" className="green"></a>
    <div className="url"></div>
  </div>
  <h1>Convolutional neural network</h1>
  <h2>The deep learning model keep track of liquid colors</h2>
  <section className='screen'>

      <DeviceItem />

  </section>
  
</div>
  );
};

export const DevicePage = styled(_DevicePage)`
  list-style: none;
  padding: 0;
`;
