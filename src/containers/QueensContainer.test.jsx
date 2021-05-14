import React from 'react';
import { render, screen } from '@testing-library/react';
import QueensContainer from './QueensContainer';
import { MemoryRouter } from 'react-router';

describe('QueensContainer', () => {
    it('shows a list of drag queens on the page', async () => {
        render(
            <MemoryRouter>
                <QueensContainer />
            </MemoryRouter>        
        );
    
        screen.getByText('Loading');

        const ul = await screen.findByRole('list', {name: 'queens'});
        
        expect(ul).toMatchSnapshot();
    });
})
