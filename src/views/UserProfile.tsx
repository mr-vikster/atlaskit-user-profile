import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import Avatar from '@atlaskit/avatar';

const UserProfileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  height: calc(100vh - 56px);
  @media (max-width: 600px) {
    width: 90%;
    height: initial;
  }
`;

const ProfileDataRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
  
  const ProfileDataElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: flex-start;
  flex-wrap: wrap;
  min-width: 200px;
  flex-basis: 49%;
  & span {
    font-size: 14px;
    color: grey;
  }
  & p {
    margin: 0 0 16px;
    font-size: 24px;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    min-width: initial;
  }
`;

const EditLink = styled(Link)`
  position: absolute;
  bottom: 32px;
  right: 32px;
  text-decoration: none;
  @media (max-width: 600px) {
    position: relative;
    bottom: initial;
    right: initial;
    margin: 0 0 12px auto;
  }
`;

const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <h2>Your Profile</h2>
      <Avatar size="xxlarge" src={localStorage.getItem('atlaskit-user-profile-avatar') || undefined}/>
      <br/>
      <ProfileDataRow>
        <ProfileDataElement>
          <span>Name:</span>
          <p>{localStorage.getItem('name_atlaskit_test')}</p>
        </ProfileDataElement>
        <ProfileDataElement>
          <span>Surname:</span>
          <p>{localStorage.getItem('surname_atlaskit_test')}</p>
        </ProfileDataElement>
      </ProfileDataRow>
      <ProfileDataRow>
        <ProfileDataElement>
          <span>Username:</span>
          <p>{localStorage.getItem('username_atlaskit_test')}</p>
        </ProfileDataElement>
        <ProfileDataElement>
          <span>Email:</span>
          <p>{localStorage.getItem('email_atlaskit_test')}</p>
        </ProfileDataElement>
      </ProfileDataRow>
      <ProfileDataRow>
        <ProfileDataElement>
          <span>Newsletter subscription:</span>
          <p>{!!localStorage.getItem('newsletter_atlaskit_test') ? 'Yes' : 'No'}</p>
        </ProfileDataElement>
      </ProfileDataRow>
      <EditLink to="/user-profile/edit">
        <Button appearance="primary">Edit</Button>
      </EditLink>
    </UserProfileWrapper>
  )
}

export default UserProfile
