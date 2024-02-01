import { NavBar } from "@/components/Layout/NavBar";
import { Footer } from "@/components/Layout/Footer";
import { CommonProps } from "@/types";

export const Layout: React.FC<CommonProps> = (props) => (
  <>
    <NavBar />
    <main {...props}>{props.children}</main>
    <Footer />
  </>
);
