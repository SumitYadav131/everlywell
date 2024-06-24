import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import { CustomComponents } from "./ui-component";

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
  const UserNavbar = CustomComponents.UserNavbar;
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <UserNavbar/>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
