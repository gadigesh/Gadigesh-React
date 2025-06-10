import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA_NAME from '../Mocks/MockResMenu.json';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react';
import { Provider } from 'react-redux';
import AppStore from '../../Utils/AppStore';
import Header from '../Header';
import '@testing-library/jest-dom';
import Cart from '../cart';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_NAME);
        },
    });
});

test('should should load restarent menu component', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>,
        );
    });

    const accordianHeder = screen.getByText('Soft Drinks (4)');
    fireEvent.click(accordianHeder);
    const foodItems = screen.getAllByTestId('foodItems');
    expect(foodItems.length).toBe(4);
    const addBtns = screen.getAllByRole('button', { name: 'ADD+' });
    fireEvent.click(addBtns[0]);
    expect(screen.getByText('Cart - (1 Items)')).toBeInTheDocument();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText('Cart - (2 Items)')).toBeInTheDocument();
    expect(screen.getAllByTestId('foodItems').length).toBe(6);
    fireEvent.click(screen.getByText('Clear cart'));
    expect(screen.getAllByTestId('foodItems').length).toBe(4);
    expect(
        screen.getByText('Your cart is empty please add iems'),
    ).toBeInTheDocument();
});
