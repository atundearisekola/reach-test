import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 8px 0;
  color: #263238;
`;



export interface DeviceHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const _DeviceHeader: React.FC<DeviceHeaderProps> = ({children, className}) => {

return(
    <div className={className}>
        <Heading>My Device</Heading>
       
        {children}
      </div>
)
};

export const DeviceHeader = styled(_DeviceHeader)`
  padding: 8px;
`;
