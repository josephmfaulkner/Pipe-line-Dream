import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest' // Import needed if globals: false
import App from './App' // Assuming you have this component

describe('Render App', () => {
  it('renders and updates the button correctly', async () => {
    const user = userEvent.setup();
    render(<App />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    for(let clickCount = 0; clickCount <= 10; clickCount++)
    {
        expect(button).toHaveTextContent(`count is ${clickCount}`)
        await user.click(button);
    }
    
  })
})