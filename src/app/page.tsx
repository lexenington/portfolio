import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { getPinnedRepos } from "@/lib/github";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export default async function HomePage() {
  const repos = await getPinnedRepos(siteConfig.githubUsername);

  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <About />
      <Projects repos={repos} />
      <Experience />
      <BlogPreview posts={posts} />
      <Contact />
    </>
  );
}
