import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';
import { get } from 'http';

// What is the core functionality of app?
// What are all the ways a user can interact with our app?

// What to test?
/*  
    - We should make sure that the list of contacts shows up on the screen
    - You can submit a contact, and it will show up also
      - We have a form, we want to make sure the inputs on the forms work
      - We want to make sure that when a user does something wrong, an error message shows up
      - The button should be disabled when there's an error on the form
*/

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('shows the Contacts header', () => {
    const { getByText } = render(<App />);
    getByText(/contacts/i);
  });
  it('shows the initial contact', () => {
    const { getByText } = render(<App />);
    getByText(/Name: John Doe/i);
    getByText(/Email: john@doe.com/i);
  });
  it('renders the form', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    getByPlaceholderText(/john doe/i);
    getByPlaceholderText(/email@gmail.com/i);
    getByText(/submit/i);
  });
  it('should update the inputs when the user types in them', () => {
    const { getByPlaceholderText } = render(<App />);
    const nameInput = getByPlaceholderText(/john doe/i);
    const emailInput = getByPlaceholderText(/email@gmail.com/i);
    const name = 'John';
    const email = 'example@email.com';

    fireEvent.change(nameInput, { target: { value: name } });
    fireEvent.change(emailInput, { target: { value: email } });
  });
  // it('should update the inputs when the user types in them', async () => {
  //   const { getByPlaceholderText, getByText } = render(<App />);
  //   const nameInput = getByPlaceholderText(/john doe/i);
  //   const emailInput = getByPlaceholderText(/email@gmail.com/i);
  //   const name = 'Jim';
  //   const email = 'example@email.com';
  //   const button = getByText(/submit/i);

  //   fireEvent.change(nameInput, { target: { value: name } });
  //   fireEvent.change(emailInput, { target: { value: email } });
  //   fireEvent.click(button);
  // });
});
