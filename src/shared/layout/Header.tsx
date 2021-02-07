import React from 'react';
import { useHistory } from 'react-router-dom';
import { AtlassianNavigation, ProductHome, PrimaryButton } from '@atlaskit/atlassian-navigation';
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';

const ProductHomeExample = () => {
  const history = useHistory();
  return <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} onClick={() => history.push('/atlaskit-user-profile')}/>
};

const Header = () => {

  const history = useHistory();

  return (
    <div>
      <AtlassianNavigation
        label="site"
        primaryItems={[
          <PrimaryButton onClick={() => history.push('/atlaskit-user-profile/user-profile')}>User Profile</PrimaryButton>,
          <PrimaryButton onClick={() => history.push('/atlaskit-user-profile/user-profile/edit')}>Edit User Profile</PrimaryButton>,
        ]}
        renderProductHome={ProductHomeExample}
      />
    </div>
  )
}

export default Header
