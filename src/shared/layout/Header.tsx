import React from 'react';
import { useHistory } from 'react-router-dom';
import { AtlassianNavigation, ProductHome, PrimaryButton } from '@atlaskit/atlassian-navigation';
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';

const ProductHomeExample = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo}/>
);

const Header = () => {

  const history = useHistory();

  return (
    <div>
      <AtlassianNavigation
        label="site"
        primaryItems={[
          <PrimaryButton onClick={() => history.push('/')}>User Profile</PrimaryButton>,
        ]}
        renderProductHome={ProductHomeExample}
      />
    </div>
  )
}

export default Header
