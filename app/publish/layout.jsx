import ImagesBanner from "@/components/Images-Banner";

export default function RootLayout({ children }) {
  return (
    <>
      <main>{children}</main>

      {/* images banner` */}
      <ImagesBanner />
    </>
  );
}
