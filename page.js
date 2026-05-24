export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "40px",
      textAlign: "center"
    }}>
      <h1>Kalita Consultancy</h1>

      <p>
        Showroom Helper, Receptionist, Sales Boy Jobs
      </p>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        style={{
          background: "green",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Apply on WhatsApp
      </a>
    </main>
  );
}