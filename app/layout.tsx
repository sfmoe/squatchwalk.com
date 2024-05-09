import "../styles/globals.css";
import ClientApp from "./clientApp";

export default function RootLayout({children}: {
    children: React.ReactNode;
  }){
    return (
    <html lang="en">
    <head />
        <body>
        <ClientApp>
          <header>
            <div>
          <h1>SquatchWalk</h1> <span>by SFMoe</span>
          </div>

          <div>
            <a href="https://sfmoe.com">sfmoe.com</a>
          </div>
          </header>
            {children}
        </ClientApp>
        </body>
    </html>
    
  );
}