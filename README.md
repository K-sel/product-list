# React Product Filter

A React component for filtering and displaying categorized product lists. Users can search products and filter out-of-stock items.

## Repository Description
React application demonstrating state management and data filtering with controlled components. Implements a classic product filtering use case with an intuitive user interface.

## Features

- 🔍 Real-time product search
- ✅ In-stock/out-of-stock filtering
- 📊 Category-based display
- 🎨 Visual indication of out-of-stock products (red text)
- ⚛️ Modern React architecture with functional components and hooks

## Project Structure

```
src/
├── components/
│   ├── products/
│   │   ├── ProductTable.jsx
│   │   ├── ProductRow.jsx
│   │   └── ProductCategoryRow.jsx
│   └── searching/
│       ├── SearchBar.jsx
│       ├── Input.jsx
│       └── CheckBox.jsx
└── App.jsx
```

## Components

### App.jsx
Main component that:
- Maintains global state (search and stock filter)
- Handles product filtering logic
- Orchestrates child components

### SearchBar
Composite search bar including:
- Search field (`Input`)
- Checkbox for filtering in-stock products (`CheckBox`)

### ProductTable
Product table that:
- Organizes products by categories
- Displays category headers
- Manages product row display

### Supporting Components
- `ProductRow`: Displays a product line
- `ProductCategoryRow`: Displays a category header
- `Input`: Controlled input component
- `CheckBox`: Controlled checkbox component

## State and Data Flow

States are managed at the `App.jsx` level:
```javascript
const [stockedOnly, setStockedOnly] = useState(false);
const [search, setSearch] = useState("");
```

Data flow is unidirectional:
1. User interacts with `SearchBar`
2. Changes trigger state setters
3. New state triggers re-render
4. Product list is filtered based on criteria
5. `ProductTable` displays filtered products

## Installation and Usage

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
npm run dev
```

## Technical Highlights

- React Hooks usage (`useState`)
- Controlled components for forms
- JSDoc typed props
- Efficient filtering using `Array.filter()`
- Modular and reusable component structure
- Consistent props and event naming conventions

## Sample Data Structure

```javascript
const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    // ...
]
```

## Component Props

### ProductTable
```typescript
interface ProductTableProps {
    products: Array<{
        category: string,
        price: string,
        stocked: boolean,
        name: string
    }>
}
```

### SearchBar
```typescript
interface SearchBarProps {
    search: string,
    onSearchChange: (value: string) => void,
    stocked: boolean,
    onStockedOnlyChange: (value: boolean) => void
}
```

## Contributing

Contributions are welcome! Please:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this code for your own projects.