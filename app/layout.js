export const metadata = {
  title: "Kalita Consultancy",
  description: "Job Consultancy Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}