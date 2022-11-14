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

        {/* <div className="md:col-start-3 col-start-2 space-y-6"> 
            <GlobalNav /> 
           </div> 
          <div className="col-start-2 col-end-3 mt-28 flex items-center justify-center">
            <div className="text-sm text-gray-600">
              Created by the <strong>Next.js</strong>
              {' team at '}
              <a href="https://vercel.com">
                <strong>Vercel</strong>
              </a>
              {'. '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://github.com/vercel/app-playground"
              >
                View the code
              </a>
              {' or '}
              <a
                className="underline decoration-dotted underline-offset-4"
                href="https://vercel.com/templates/next.js/app-directory"
              >
                deploy your own
              </a>
              {'.'}
            </div>
          </div> */}
        {/* </div> */}
      </body>
    </html>
  );
}
