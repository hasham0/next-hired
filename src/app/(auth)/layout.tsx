export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-center justify-center p-16">
      {children}
    </section>
  );
}
