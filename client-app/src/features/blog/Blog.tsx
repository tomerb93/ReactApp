import React from 'react';
import { Container } from 'semantic-ui-react';
import { BlogForm } from './form/BlogForm';
import { BlogList } from './list/BlogList';

export const Blog = () => {
    return (
        <Container>
            <BlogForm />
            <BlogList />
        </Container>
    );
};
