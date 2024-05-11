# note-hub

# KeepClone

This app is a simplified version of Google Keep that allows users to create, edit, and organize their notes.

## Screens

### Home Page
Displays a list of user notes in a grid or list format.

- **Behavior:** 
  - Fetches and updates notes from a local or remote database.
  - Allows users to search, create, edit, or delete notes.
- **Layout:** 
  - Contains a 'Header', a 'SearchBar', and a 'NoteList'.

### Note Detail Page
Displays the full content of a selected note and allows editing.

- **Behavior:** 
  - Allows users to edit the title and body of the note.
  - Autosaves changes after a set interval or when exiting the edit mode.
- **Layout:** 
  - Contains a 'Header' with back and options button, and editable fields for the note’s title and content.

## Components

### Header
Displays the page title and navigation or action buttons specific to the current view.

- **Behavior:**
  - Home view shows the app title and a button to create new notes.
  - Detail view shows a back button, the title of the note or "New Note" text, and an options button to delete the note or open a menu for more actions.
- **Styling:** 
  - Fixed at the top, with a moderate font size and a contrasting background color.

### SearchBar
Allows users to search through their notes by title or content.

- **Behavior:** 
  - On text input, filters the 'NoteList' based on the search query.
- **Styling:** 
  - Positioned under the 'Header' with a full-width input field.

### NoteList
Displays all notes as cards in a grid or list format which can be toggled by the user.

- **Behavior:**
  - Renders a list of 'NoteItem' components.
  - Supports infinite scrolling.
- **Styling:** 
  - Occupies the remaining space below the 'Header' and 'SearchBar'.

### NoteItem
Displays an individual note with its title, content snippet, and possibly a color coding.

- **Behavior:** 
  - On tap, navigates to the 'Note Detail Page' where the note can be viewed and edited in full.
- **Styling:** 
  - Displays the title in a bold font and the content snippet in a regular font.
  - May include a visual indicator for categorization, such as a color bar or tag icon.
  - Has some padding and may show elevation (shadow) to appear like cards.

### Floating Action Button (FAB)
Displayed on the bottom right of the 'Home Page', used to create a new note.

- **Behavior:** 
  - On tap, navigates to the 'Note Detail Page' with a new empty note ready for input.
- **Styling:** 
  - Generally a circular button with a plus icon, consistent with material design principles.

Follow the following design principles:
- Use a Light Base: Employ a predominantly white or light-colored background to create a clean, expansive feel.
- Accent with Vibrant Colors: Choose one or two vibrant colors for highlights, buttons, and important features to draw attention and guide user interactions
- Utilize black and grey for text for clarity.
- Ensure that the layout feels open and uncluttered by generously using ample whitespace. It's okay if this means users need to scroll more; the additional space will create a more breathable and comfortable user experience. 
- Use images and icons strategically, when it compliments the website
- If necessary, design a simple, top-aligned navigation bar with clear categories, ensuring easy access and usability. Keep footer design minimal with essential links organized into categories for easy navigation.
- Hierarchical Type Setting: Use varied type sizes and weights to establish a clear visual hierarchy, helping users navigate through the content easily.
- Standout CTAs: Design call-to-action buttons with standout colors that contrast with the background, making them easy to locate.
- Emphasize Key Information: Use size, color, and placement to emphasize key pieces of information or actions.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/note-hub.git
cd note-hub
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
