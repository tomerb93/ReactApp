import React from 'react';
import { TextArea, Button, Form } from 'semantic-ui-react';

export const BlogForm = () => {
    return (
        <Form>
            <TextArea rows='8' placeholder="What's on your mind?" />
            <Button className='Blog-btn-submit' floated='right'>
                Submit
            </Button>
        </Form>
    );
};
