import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export default function SEO({ title, description = "Fixtech Services provides reliable IT onsite services, managed support and infrastructure solutions.", canonicalPath = "/" }: SEOProps) {
  const url = typeof window !== "undefined" ? window.location.origin + canonicalPath : canonicalPath;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
