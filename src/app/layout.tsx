import type { Metadata } from "next";
import StoreProvider from "../StoreProvider";

export const metadata :Metadata = {
  title: {
    default:"Everlywell",
    template:"%s | Everlywell"
  },
  description: "Everlywell a ecommerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
