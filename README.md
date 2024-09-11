# Todo Application

This is a simple Todo application built using React and Material-UI. The app allows users to add, complete, and remove todo items, with data persisted in `localStorage`.

## Features

- Add new todo items.
- Mark items as completed.
- Remove todo items.
- Persistent data using `localStorage`.

## Project Structure

```bash
├── components
│   ├── navBar
│   │   └── NavBar.js
│   ├── todoForm
│   │   └── TodoForm.js
│   └── todoItem
│       └── TodoItem.js
├── pages
│   └── Todo.js
└── styles
    └── TodoForm.module.scss
```

## Getting Started

Follow these steps to run the Todo application locally.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies:**

   Run the following command in the root directory to install the necessary packages:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server:**

   Once the dependencies are installed, you can start the app locally:

   ```bash
   npm start
   ```

2. **Open the app:**

   The app will be available at [http://localhost:3000](http://localhost:3000).

### Local Storage

The app uses `localStorage` to persist the todo items between browser sessions. If you want to clear the stored items, you can open the browser's developer tools and clear the `localStorage` for the app's domain.

### Adding New Items

To add a new todo item:

1. Type the item in the input field.
2. Click the pencil icon (EditIcon) to add the item to the list.

### Managing Items

- **Mark as Completed:** Click the todo item to toggle its completion status.
- **Remove Item:** Click the delete button next to each item to remove it from the list.

## Dependencies

- React
- Material-UI
- uuid (for generating unique item IDs)

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

## License

This project is licensed under the MIT License.

```

### Key Steps:

1. **Clone the repo.**
2. **Install dependencies** with `npm install`.
3. **Run the app** using `npm start`.

This README should cover the steps for users to run the application locally and give an overview of its functionality. Let me know if you'd like any adjustments!
```
