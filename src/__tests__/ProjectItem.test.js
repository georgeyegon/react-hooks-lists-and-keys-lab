import React from 'react'; // Only if you're using JSX
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom is imported
import ProjectItem from '../components/ProjectItem'; // Adjust this path based on your structure

// Example project data (make sure to adjust this as necessary)
const yourProjectData = {
    name: 'Project Name',
    technologies: ['JavaScript', 'React', 'Node.js'], // Example technologies
    // Add other properties as needed
};

test('renders a <span> for each technology passed in as a prop', () => {
    render(<ProjectItem project={yourProjectData} />);

    for (const technology of yourProjectData.technologies) {
        const span = screen.queryByText(technology);
        expect(span).toBeInTheDocument();
        expect(span.tagName).toBe("SPAN");
    }
});
