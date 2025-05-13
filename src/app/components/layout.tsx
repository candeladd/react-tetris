export default function components({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="app-header">
      <div> {children}</div>
    </div>
  );
}