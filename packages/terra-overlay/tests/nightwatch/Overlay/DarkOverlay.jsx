import React from 'react';

import Overlay from '../../../lib/Overlay';
import OverlayContainer from '../../../lib/OverlayContainer';

const OverlayExample = () => (
  <OverlayContainer style={{ height: '100%', width: '100%' }}>
    <Overlay isOpen backgroundStyle={Overlay.Opts.BackgroundStyles.DARK} id="dark-overlay" >
      <h1>Dark Overlay</h1>
    </Overlay>
  </OverlayContainer>
);

export default OverlayExample;
