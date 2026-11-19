export function FestiveTopDecor() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="festive-real-thoranam" aria-hidden="true">
      <img
        src={`${base}images/festive/realistic-thoranam-v40.png`}
        alt=""
        draggable={false}
      />
    </div>
  );
}
