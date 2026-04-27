import raw from './posts.json';

export const posts = raw.map(post => {
  // Calculate reading time
  const wordCount = post.content.rendered.replace(/<[^>]*>?/gm, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 225);

  return {
    id: post.id,
    title: post.title.rendered,
    slug: post.slug,
    readingTime: `${readingTime} min read`,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...',
    content: post.content.rendered,
    categories: post._embedded?.['wp:term']?.[0]?.map(c => c.name) || ['Insights'],
    author: post._embedded?.author?.[0]?.name || 'Kazzius Editorial',
  };
});
