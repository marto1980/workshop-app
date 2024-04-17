export default function MyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div>
    Hey, this is my first nested layout!
    { children }
  </div>
  )
}
