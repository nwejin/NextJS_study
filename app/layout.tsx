import Navigation from "../components/navigation";
import { Metadata } from "next"; // 타입스크립트 사용 시
import "../styles/global.css"

export const metadata: Metadata = {
  title: {
    template: '%s | Jin Test',
    default: 'Loading...',
  },
  description: 'The best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">

      <body>
              <Navigation/>
        {children}</body>
    </html>
  )
}
