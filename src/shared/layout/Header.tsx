import React from 'react';
import { AtlassianNavigation, ProductHome, PrimaryButton } from '@atlaskit/atlassian-navigation';
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';

const ProductHomeExample = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} siteTitle="User Profile" />
);

const Header = () => {
  return (
    <div>
      <AtlassianNavigation
        label="site"
        primaryItems={[
          <PrimaryButton>User Profile</PrimaryButton>,
        ]}
        renderProductHome={ProductHomeExample}
      />
    </div>
  )
}

export default Header
