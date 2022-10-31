import React from "react";
import {render,screen} from '@testing-library/react';
import DashboardPage from './Pages/DashboardPage';
import '@testing-library/jest-dom'


    test('renders component', () => {
      render(<DashboardPage/>)
      const linkElement = screen.getByText(/Chatrooms/)
      expect(linkElement).toBeInTheDocument()
    })
  