function Book({ book }) {
  return (
    <div className="card">
      <img src={book.image} width="200" height="200" alt="bookimg" />
      <h2>{book.title}</h2>
      <h3>{book.price}</h3>
    </div>
  );
}

const books = [
  { image: "https://m.media-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg", title: "The Lean Startup", price: "$29.99" },
  { image: "https://m.media-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg", title: "Atomic Habits", price: "$11.98" },
  { image: "https://m.media-amazon.com/images/I/41j5v+3GJmL._SX331_BO1,204,203,200_.jpg", title: "Deep Work", price: "$14.99" }
];

function App() {
  return (
    <div className="book-list">
      {books.map((b, i) => (
        <Book key={i} book={b} />
      ))}
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
