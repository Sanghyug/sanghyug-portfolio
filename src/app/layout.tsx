import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://sanghyug-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Park Sanghyug | AI-Native Builder Portfolio",
    template: "%s | Park Sanghyug",
  },
  description:
    "Park Sanghyug의 AI 기반 앱·게임·웹 포트폴리오입니다. SpinGo, 비빔팡, 엄마는꽃, 내짤4짤 등 AI와 개발을 결합한 프로젝트를 소개합니다.",
  keywords: [
    "Park Sanghyug",
    "박상혁",
    "밤나무랩",
    "AI Developer",
    "AI Native Builder",
    "Flutter Developer",
    "React Developer",
    "SpinGo",
    "비빔팡",
    "엄마는꽃",
    "내짤4짤",
  ],
  openGraph: {
    title: "Park Sanghyug | AI-Native Builder Portfolio",
    description:
      "AI 기반 앱·게임·웹 프로젝트를 직접 기획하고 개발하는 Park Sanghyug의 포트폴리오입니다.",
    url: siteUrl,
    siteName: "Park Sanghyug Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Park Sanghyug | AI-Native Builder Portfolio",
    description:
      "AI 기반 앱·게임·웹 프로젝트를 직접 기획하고 개발하는 포트폴리오입니다.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}