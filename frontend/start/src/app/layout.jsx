
import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import Header from "@/components/Header";

export const metadata = {
  title:{
    template:"%s | وبلاگ یار",
    default:"وبلاگ یار"
  },
  description:
    "یک فضای ساده و مدرن برای مدیریت بلاگ‌ها، انتشار محتوا و تعامل با خوانندگان.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.className} min-h-screen bg-slate-50 text-slate-800 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
