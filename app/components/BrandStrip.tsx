export default function BrandStrip() {
  const brands = ['BMW', 'AUDI', 'MERCEDES', 'VOLKSWAGEN', 'TOYOTA', 'VOLVO', 'FORD', 'SKODA'];
  return (
    <div className="brand-strip">
      {brands.map(b => <span key={b}>{b}</span>)}
    </div>
  );
}
