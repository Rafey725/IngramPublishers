import ImagesBanner from "@/components/Images-Banner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>

            {/* images banner` */}
            <ImagesBanner />
        </>
    );
}
