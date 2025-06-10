import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import AppStore from '../../Utils/AppStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { act } from 'react';

it('should render Header component with a log in button', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                </Provider>
            </BrowserRouter>,
        );
    });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
});

it('should render component header into the cart items', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                </Provider>
            </BrowserRouter>,
        );
    });
    const headercartItems = screen.getByText(/Cart/);
    expect(headercartItems).toBeInTheDocument();
});

it('should login/logout functionality', () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>,
    );
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);
    const logOutButton = screen.getByRole('button', { name: 'Logout' });
    expect(logOutButton).toBeInTheDocument();
});
