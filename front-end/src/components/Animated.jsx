// src/components/AnimatedDots.jsx
export default function AnimatedDots() {
  return (
    <div className="animated-dots">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
}