# SEO Configuration Guide

## Domain Configuration

Before deploying, update the following files with your actual domain:

### 1. `src/pages/index.tsx`

- Line ~15: Update `baseUrl` constant with your actual domain
  ```typescript
  const baseUrl = "https://your-domain.com"; // Change this
  ```

### 2. `public/robots.txt`

- Update the sitemap URL with your actual domain
  ```
  Sitemap: https://your-domain.com/sitemap.xml
  ```

### 3. `public/sitemap.xml`

- Replace all instances of `https://your-domain.com` with your actual domain

## SEO Features Implemented

✅ **Meta Tags**

- Title, description, keywords
- Open Graph tags (Facebook)
- Twitter Card tags
- Language alternates
- Canonical URLs

✅ **Structured Data (JSON-LD)**

- Person schema with insurance advisor information
- Service offerings
- Contact information
- Area served

✅ **Technical SEO**

- robots.txt file
- sitemap.xml file
- Proper heading hierarchy (h1, h2, h3)
- Semantic HTML elements
- Alt texts for images
- ARIA labels for accessibility

✅ **Performance**

- DNS prefetch for external domains
- Preconnect for fonts
- Lazy loading for iframes
- Optimized images with Next.js Image component

## Additional Recommendations

1. **Google Search Console**: Submit your sitemap after deployment
2. **Google Analytics**: Add tracking code if needed
3. **Page Speed**: Test with Google PageSpeed Insights
4. **Mobile-Friendly**: Test with Google Mobile-Friendly Test
5. **SSL Certificate**: Ensure HTTPS is enabled
6. **Social Media**: Update Open Graph image with a custom image (1200x630px recommended)

## Testing Your SEO

1. Use Google's Rich Results Test: https://search.google.com/test/rich-results
2. Validate structured data: https://validator.schema.org/
3. Check meta tags: https://www.opengraph.xyz/
4. Test mobile-friendliness: https://search.google.com/test/mobile-friendly
