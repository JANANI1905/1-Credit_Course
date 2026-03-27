# Testing Guide for Portfolio Application

## Overview
This guide covers testing setup and best practices for the portfolio application.

## Test Framework Setup

### Installing Testing Dependencies

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D jsdom
npm install -D @vitest/ui
```

### Vitest Configuration
Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Update package.json
Add test script to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### Test Setup File
Create `src/test/setup.ts`:

```typescript
import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
  writable: true,
  configurable: true,
  value: 0,
})

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))
```

## Test Strategy

### 1. Component Rendering
- Render component
- Verify key elements exist
- Check for correct text content

### 2. State Management
- Test initial state
- Test state changes through user interactions
- Test side effects (useEffect)

### 3. User Interactions
- Click handlers
- Form submissions
- Navigation

### 4. Visual Elements
- CSS classes
- Styling applied correctly
- Responsive design triggers

### 5. Animations
- Framer Motion components render
- Animation props apply
- Motion triggers on scroll

## Test File Structure

Each component should have a corresponding `.test.tsx` file:

```
src/
├── components/
│   ├── About.tsx
│   ├── About.test.tsx
│   ├── Hero.tsx
│   ├── Hero.test.tsx
│   └── ...
└── test/
    └── setup.ts
```

## Running Tests

### Run all tests
```bash
npm run test
```

### Watch mode
```bash
npm run test -- --watch
```

### UI dashboard
```bash
npm run test:ui
```

### Coverage report
```bash
npm run test:coverage
```

## Testing Best Practices

1. **Use data-testid for complex selections**
   ```tsx
   <div data-testid="section-title">About</div>
   screen.getByTestId('section-title')
   ```

2. **Test user behavior, not implementation**
   - Avoid testing internal state directly
   - Focus on what users see and do

3. **Mock external dependencies**
   - Framer Motion animations
   - Window events (scroll, resize)
   - External links

4. **Use meaningful test names**
   ```typescript
   it('should display hero title on initial render', () => {})
   it('should cycle through roles every 1300ms', () => {})
   ```

5. **Test accessibility**
   ```typescript
   expect(screen.getByRole('button')).toHaveAttribute('aria-label')
   ```

## Common Testing Patterns

### Testing Hooks
```typescript
import { renderHook, act } from '@testing-library/react'
import { useMyHook } from './hooks'

it('should update state', () => {
  const { result } = renderHook(() => useMyHook())
  act(() => {
    result.current.setValue('new value')
  })
  expect(result.current.value).toBe('new value')
})
```

### Testing Async Operations
```typescript
it('should load data', async () => {
  render(<Component />)
  const element = await screen.findByText('Loaded')
  expect(element).toBeInTheDocument()
})
```

### Testing Events
```typescript
import userEvent from '@testing-library/user-event'

it('should handle click', async () => {
  const user = userEvent.setup()
  render(<Button onClick={handleClick} />)
  await user.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalled()
})
```

## Debugging Tests

### View rendered HTML
```typescript
screen.debug()
```

### Check specific element
```typescript
screen.debug(screen.getByTestId('element'))
```

### View all queries
```typescript
screen.logTestingPlaygroundURL()
```

## Coverage Goals

- **Line Coverage:** 80%+
- **Branch Coverage:** 75%+
- **Function Coverage:** 80%+
- **Statement Coverage:** 80%+

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
