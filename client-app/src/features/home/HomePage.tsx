import React, { Fragment } from 'react';
import { Header, Button, Container, Divider, Icon } from 'semantic-ui-react';

export const HomePage = () => {
    return (
        <Fragment>
            <Container className='HomePage-main-container' textAlign='center'>
                <Header className='HomePage-header'>
                    Tomer Barzilay, Developer
                </Header>
                <Header className='HomePage-subheader'>
                    <i>" If it ain't broke, keep trying. "</i>
                </Header>
                <Divider />
                <Button
                    size='huge'
                    className='HomePage-btn'
                    positive
                    animated='fade'
                >
                    <Button.Content visible>About</Button.Content>
                    <Button.Content hidden>
                        <Icon name='info' />
                    </Button.Content>
                </Button>
                <Button
                    size='huge'
                    className='HomePage-btn'
                    positive
                    animated='fade'
                >
                    <Button.Content visible>Contact</Button.Content>
                    <Button.Content hidden>
                        <Icon name='paper plane' />
                    </Button.Content>
                </Button>
            </Container>
        </Fragment>
    );
};
