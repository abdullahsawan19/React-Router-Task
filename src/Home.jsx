import { Link, useSearchParams } from "react-router-dom";
import { products } from "./data";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>متجر المنتجات 🛒</h1>

      <input
        placeholder="ابحث عن منتج..."
        value={query}
        onChange={(e) => {
          const text = e.target.value;
          setSearchParams(text ? { q: text } : {});
        }}
        style={{ padding: "10px", marginBottom: "20px", width: "300px" }}
      />

      <div style={{ display: "grid", gap: "10px" }}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <h3>
              {p.name} - ${p.price}
            </h3>
            <Link to={`/products/${p.id}`}>عرض التفاصيل</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
