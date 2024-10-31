import React from 'react'; // Only if you're using JSX
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure jest-dom is imported
import ProjectList from '../components/ProjectList'; // Adjust this path based on your structure

// Example projects data (make sure to adjust this as necessary)
const projects = [
    {
        name: 'Reciplease',
        description: 'A recipe application',
        technologies: ['JavaScript', 'React', 'Node.js'], // Example technologies
    },
    // Add other projects as needed
];

test('renders a <ProjectItem> for each project passed in as a prop', () => {
    render(<ProjectList projects={projects} />);

    projects.forEach(project => {
        expect(screen.getByText(project.name)).toBeInTheDocument(); // This will check if project name is rendered
    });
});
