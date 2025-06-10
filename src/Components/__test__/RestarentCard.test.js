import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../Mocks/resMock.json';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { withPromotedLebal } from '../RestaurantCard';

it('should restarent component with props', () => {
    //console.log(render(<RestorentCard resData={MOCK_DATA} />));
    render(<RestaurantCard resData={MOCK_DATA} />);
    const nameOfResta = screen.getByText('Theobroma');
    expect(nameOfResta).toBeInTheDocument();
});
it('should restarent component with  Promoted Lebal', () => {
    const Enhanced = withPromotedLebal(RestaurantCard);
    render(<Enhanced resData={MOCK_DATA} />);
    // <RestorentCard {...props} />;
    const nameOfResta = screen.getByText('Prmoted');
    expect(nameOfResta).toBeInTheDocument();
});
