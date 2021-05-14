import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import QueenDetails from './QueenDetails';

describe('QueenDetails', () => {
    afterEach(() => cleanup());

    it('shows details for a drag queen', async () => {
        render(
            <QueenDetails
                match={{
                    params: {
                    id: 12,
                    },
                }}
            />
        );

        const header = await screen.findByText('Bebe Zahara Benet');

        expect(header).toMatchSnapshot();
    });
})
