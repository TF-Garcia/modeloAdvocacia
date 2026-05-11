import { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Post } from "@/data/posts";

const MOBILE_POSTS_STEP = 3;

export default function BlogSection() {
  const [visiblePosts, setVisiblePosts] = useState(MOBILE_POSTS_STEP);
  const mobilePosts = posts.slice(0, visiblePosts);
  const hasMoreMobilePosts = visiblePosts < posts.length;

  return (
    <section id="posts" className="px-4 py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-3">
            Conteúdos informativos
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary">
            Artigos e orientações jurídicas
          </h2>

          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Informações úteis para ajudar você a entender melhor seus direitos.
          </p>
        </div>

        <div className="grid gap-6 md:hidden">
          {mobilePosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}

          {hasMoreMobilePosts && (
            <Button
              type="button"
              variant="outline"
              className="mt-2 h-12 rounded-full"
              onClick={() => setVisiblePosts((current) => current + MOBILE_POSTS_STEP)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Carregar mais posts
            </Button>
          )}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: posts.length > 3,
          }}
          className="hidden md:block"
        >
          <CarouselContent className="-ml-6">
            {posts.map((post) => (
              <CarouselItem key={post.slug} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <PostCard post={post} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 h-10 w-10 bg-background shadow-[var(--shadow-card)] lg:-left-14" />
          <CarouselNext className="-right-4 h-10 w-10 bg-background shadow-[var(--shadow-card)] lg:-right-14" />
        </Carousel>
      </div>
    </section>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/posts/${post.slug}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-card)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-elegant)]">
        <img
          src={post.image}
          alt={post.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="p-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            {post.date} • {post.readingTime}
          </p>

          <h3 className="text-xl text-primary font-serif mb-3 leading-snug">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
            Ler artigo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
