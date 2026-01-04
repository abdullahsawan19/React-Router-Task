import { useSearchParams, Link } from "react-router-dom";
import { products } from "./data";

export default function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const filteredProducts = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>نتائج البحث عن: "{query}" 🔍</h1>

      {filteredProducts.length === 0 && (
        <h3 style={{ color: "red" }}>مفيش منتجات بالاسم ده يا غالي 😔</h3>
      )}

      <div style={{ display: "grid", gap: "10px", marginTop: "20px" }}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <h3>{p.name}</h3>
            <p>السعر: ${p.price}</p>
            <Link to={`/products/${p.id}`}>شوف التفاصيل</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
