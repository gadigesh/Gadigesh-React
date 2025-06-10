import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import { act } from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DTA from '../Mocks/MockResListData.json';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DTA);
        },
    });
});

test('should search res list burger text input', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>,
        );
    });
    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    expect(cardsBeforeSearch.length).toBe(20);
    const searchButton = screen.getByRole('button', { name: 'Search' });
    const searchId = screen.getByTestId('searchinput');
    fireEvent.change(searchId, { target: { value: 'Burger' } });
    fireEvent.click(searchButton);
    const cardsAfterSearch = screen.getAllByTestId('resCard');
    expect(cardsAfterSearch.length).toBe(2);
    //screen should load 4 crds
});

test('should filter toprated res', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>,
        );
    });
    const cardsBeforeFilter = screen.getAllByTestId('resCard');
    expect(cardsBeforeFilter.length).toBe(20);
    const topratedButton = screen.getByRole('button', {
        name: 'Top rated restaurants',
    });
    fireEvent.click(topratedButton);
    const cardsAfterFilter = screen.getAllByTestId('resCard');
    expect(cardsAfterFilter.length).toBe(11);
});
