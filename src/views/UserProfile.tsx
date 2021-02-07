import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@atlaskit/button';

const EditLink = styled(Link)`
  display: flex;
  justify-content: center;
  algin-items: center;
  text-decoration: none;
`;

const UserProfile = () => {
  return (
    <EditLink to="/user-profile/edit">
      <Button appearance="primary">Edit</Button>
    </EditLink>
  )
}

export default UserProfile
