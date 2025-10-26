import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, folow",
  openGraph: {
    title: "Blog",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://site-blog-next-two.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://site-blog-next-two.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.set",
      },
    ],
  },
};

export default function BlogListPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
}
