# Cursor: not-allowed

## Project Overview

A web application that forces users to learn keyboard shortcuts by disabling mouse interactions and requiring keyboard-only navigation.

## Technical Stack

- TypeScript
- Vite
- CSS Modules/Styled Components

## Implementation Plan

### 1. Project Setup

- [ ] Initialize Vite + TypeScript project
- [ ] Set up project structure
- [ ] Configure CSS modules/styling solution
- [ ] Add necessary dependencies

### 2. Core Application Structure

- [ ] Create main app layout
- [ ] Implement global styles
  - [ ] Set `pointer-events: none` on root
  - [ ] Add necessary keyboard focus styles
- [ ] Set up routing (if needed for multiple screens)

### 3. Game Components

- [ ] Create Welcome Screen

  - [ ] Implement "Press any key to continue" functionality
  - [ ] Add keyboard event listeners
  - [ ] Style welcome message

- [ ] Create Game Board

  - [ ] Design grid layout for text boxes
  - [ ] Implement text box components
  - [ ] Add keyboard shortcuts for box selection (cmd+1...4)
  - [ ] Create text appearance/disappearance animation

- [ ] Create Document Area
  - [ ] Design document layout with gaps
  - [ ] Implement focus switching (ctrl+`)
  - [ ] Add paste functionality (ctrl+v)
  - [ ] Create save mechanism (ctrl+s)

### 4. Game Logic

- [ ] Implement text generation system

  - [ ] Create array of text fragments
  - [ ] Design text scrambling algorithm
  - [ ] Ensure text pieces fit together logically

- [ ] Add keyboard shortcut handlers
  - [ ] Copy functionality (ctrl+c)
  - [ ] Paste functionality (ctrl+v)
  - [ ] Save functionality (ctrl+s)
  - [ ] Box selection (cmd+1...4)
  - [ ] Focus switching (ctrl+`)

### 5. State Management

- [ ] Set up game state
  - [ ] Track current text fragments
  - [ ] Manage document content
  - [ ] Handle save states
  - [ ] Track game progress

### 6. User Experience

- [ ] Add visual feedback

  - [ ] Highlight selected boxes
  - [ ] Show copy/paste indicators
  - [ ] Display save confirmations
  - [ ] Add keyboard shortcut hints

- [ ] Implement error handling
  - [ ] Invalid keyboard combinations
  - [ ] Save failures
  - [ ] Copy/paste errors

### 7. Polish

- [ ] Add animations
  - [ ] Text appearance/disappearance
  - [ ] Selection highlights
  - [ ] Save confirmations
- [ ] Implement sound effects (optional)
- [ ] Add progress indicators
- [ ] Create help/tutorial overlay

### 8. Testing

- [ ] Test all keyboard shortcuts
- [ ] Verify mouse blocking
- [ ] Test save/load functionality
- [ ] Cross-browser testing
- [ ] Mobile device testing (should show "desktop only" message)

## Game Flow

1. User lands on welcome screen
2. Presses any key to start
3. Text fragments appear in boxes
4. User must:
   - Select correct box (cmd+1...4)
   - Copy text (ctrl+c)
   - Switch to document (ctrl+`)
   - Paste text (ctrl+v)
   - Save progress (ctrl+s)
5. Repeat until all text fragments are collected
6. Show completion message with decoded text

## Next Steps

1. Set up project with Vite
2. Create basic component structure
3. Implement global styles and mouse blocking
4. Begin with welcome screen implementation
