import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <ThemeProvider>
        <body>
            <header>
            <h1>My App</h1>
            </header>
            <main>{children}</main>
            <footer>
            <p>© 2023 My App</p>
            </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
