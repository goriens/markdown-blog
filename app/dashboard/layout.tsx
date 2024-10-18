import NavLinks from "./components/NavLinks";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-3">
      <NavLinks />
      {children}
    </div>
  );
}
