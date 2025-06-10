import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe(' all contact pages test', () => {
    // beforeAll(() => {
    //     console.log('before all');
    // });
    // beforeEach(() => {
    //     console.log('before Each');
    // });
    //afterAll(() => {
    //     console.log('after all');
    // });
    it('should load button inside the contact us component', () => {
        render(<Contact />);
        const Button = screen.getByRole('button');
        expect(Button).toBeInTheDocument();
    });

    it('should load heading in the cantact us component', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    it('should submit text is there or not', () => {
        render(<Contact />);
        const buttontext = screen.getByText('Submit');
        expect(buttontext).toBeInTheDocument();
    });

    it('should load input name test is there or not', () => {
        render(<Contact />);
        const inputName = screen.getAllByPlaceholderText('Name')[0];
        expect(inputName).toBeInTheDocument();
    });

    it('should 2 input is there are not ', () => {
        render(<Contact />);
        const inputBox = screen.getAllByRole('textbox');
        //expect(inputBox).toBeInTheDocument();
        //console.log(inputBox);
        expect(inputBox.length).toBe(2);
    });
});
