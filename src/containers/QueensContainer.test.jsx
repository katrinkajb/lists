import React from 'react';
import { render, screen } from '@testing-library/react';
import QueensContainer from './QueensContainer';

describe('QueensContainer', () => {
    it('shows a list of drag queens on the page', async () => {
        render(<QueensContainer />);
    
        screen.getByText('Loading');

        const ul = await screen.findByRole('list', {name: 'queens'});
        
        expect(ul).toMatchSnapshot();
    });
})
