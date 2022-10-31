// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom 
//  import {body} from '../public/index.html'
import React from "react";
import {render,screen} from '@testing-library/react';
import DashboardPage from './Pages/DashboardPage';
import '@testing-library/jest-dom'

// test("scenario d'exemple",function (){
//              render(<body title='React App'><div id='root'></div></body>)
//             const root= document.querySelector('#root')
//                 expect(root).toBeNull()
//              })


    test('renders component', () => {
      render(<DashboardPage/>)
      const linkElement = screen.getByText(/Chatrooms/)
      expect(linkElement).toBeInTheDocument()
    })
  