import '#/styles/globals.css';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title className="flex justify-center">GE15 Candidates</title>
        <meta name="description" content="GE15 Candidates" key="desc" />
      </head>
      <body className="overflow-y-scroll bg-gray-100">
        {children}
      </body>
    </html>
  );
}
