import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Shraavani Tople",
  description: "Thoughts at the intersection of robotics, AI, community, and governance.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div
        className="border-b pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#71717A] hover:text-[#818CF8] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to portfolio
          </Link>
          <p className="text-xs font-mono tracking-widest text-[#818CF8] uppercase mb-4">
            ◆ Blog
          </p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-white mb-4">
            Writing at the
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              intersection.
            </span>
          </h1>
          <p className="text-[#a1a1aa] max-w-xl">
            Robotics, AI, community, governance — perspectives from building at the edges.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-5">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div
                className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-[#52525b] mb-2">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h2 className="font-bold text-white group-hover:text-[#818CF8] transition-colors text-lg mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded text-[#52525b]"
                          style={{ background: "rgba(255,255,255,0.06)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#71717A] group-hover:text-[#818CF8] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
