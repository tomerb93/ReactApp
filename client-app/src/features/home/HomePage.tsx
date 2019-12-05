import React, { Fragment } from 'react';
import { Header, Segment } from 'semantic-ui-react';

export const HomePage = () => {
  return (
    <Fragment>
      <Segment />
      <Header className='HomePage-header' inverted textAlign='center'>
        Tomer Barzilay
      </Header>
    </Fragment>
  );
};
