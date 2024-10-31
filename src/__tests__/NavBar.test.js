import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar'; // Adjusted path

test("renders three <a> elements", () => {
    render(<NavBar />);
    expect(screen.getAllByRole('link')).toHaveLength(3);
});

// ... other tests
