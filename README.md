# Virtual Table Component 📊

A high-performance virtual table component built with React and TypeScript, powered by
[TanStack React Virtual](https://tanstack.com/react/virtual) for efficient rendering of large datasets.

## 📖 Basic Usage

```tsx
import { KnittoTable, type IHeader } from '@knitto/virtual-table';

const MyTable = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // ... more data
  ];

  const headers: IHeader<(typeof data)[0]>[] = [
    { key: 'id', caption: 'ID', width: 80 },
    { key: 'name', caption: 'Name', width: 200 },
    { key: 'email', caption: 'Email', width: 250 },
  ];

  return (
    <KnittoTable
      headers={headers}
      data={data}
      rowKey='id'
      headerMode='double'
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
    />
  );
};
```

## ✨ Key Features

### 🎯 Core Functionality

- **Virtual Scrolling** - Handle millions of rows with smooth performance
- **Column Management** - Resize, freeze, hide/show columns
- **Sticky Headers** - Always visible headers during scroll
- **Auto Stretch** - Automatic column width adjustment

### 🔍 Advanced Features

- **Header Grouping** - Multi-level column headers
- **Filtering System** - Search, selection, and advanced filters
- **Row Selection** - Single, multiple, and checkbox selection
- **Row Actions** - Click, double-click, and right-click handlers
- **Expandable Rows** - Show additional content per row
- **Footer Support** - Customizable table footer

### 🎨 Customization

- **Custom Cell Rendering** - Full JSX support for cell content
- **Theming** - Tailwind CSS integration
- **Responsive Design** - Mobile-friendly layouts
- **TypeScript** - Full type safety and IntelliSense

## 📚 Documentation

For complete documentation, examples, and API reference, visit our documentation website (local docker):

**🌐 [View Full Documentation](http://192.168.21.32:3003/)**

The documentation includes:

- 📖 Complete API reference
- 🎯 Interactive examples
- 💡 Best practices and tips
- 🔧 Advanced configuration options
- 🚀 Performance optimization guides

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 📦 Package Structure

```
@knitto/virtual-table/
├── components/          # Core table components
├── hooks/              # Custom React hooks
├── context/            # React context providers
├── lib/                # Utilities and types
└── icons/              # SVG icon components
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](http://192.168.21.32:3003/contributing) for
details.

## 🔗 Links

- 📖 [Documentation](http://192.168.21.32:3003/)
- 🐛 [Report Issues](http://192.168.21.32:3003/issues)
- 💬 [Discussions](http://192.168.21.32:3003/discussions)

---

**Status:** ✅ Production Ready | **Version:** 1.0.0 | **Last Updated:** 2025
