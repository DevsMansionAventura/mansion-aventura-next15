// Next - React
import { ReactNode } from "react";
// Components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-auto max-w-[1200px] mx-auto px-custom-x">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
