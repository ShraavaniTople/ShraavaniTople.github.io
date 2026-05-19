import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Shraavani Tople`,
    description: post.excerpt,
  };
}

// Blog post content
const POST_CONTENT: Record<string, string> = {
  "ros2-learning-curve": `
# The ROS2 Learning Curve Nobody Warns You About

When I started working on Origin Navigation — my ROS2 trajectory tracking framework — I thought the hardest part would be the math. Cubic spline interpolation, pure pursuit controllers, C2 continuity. Turns out, none of that was the hard part.

The hard part was understanding what ROS2 *actually is*.

## The Conceptual Leap

Most robotics tutorials start with "install ROS2 and run this demo." What they don't tell you is that you're stepping into a **distributed middleware system** that fundamentally changes how you think about software architecture.

In regular Python, you write functions. They call each other. There's a call stack you can trace.

In ROS2, you write **nodes**. They publish to **topics**. Other nodes subscribe to those topics. Nobody calls anybody — everything is event-driven over DDS (Data Distribution Service).

This sounds simple. It isn't.

## The DDS Layer Will Break Your Brain (Then Fix It)

DDS stands for Data Distribution Service. It's a publish-subscribe middleware originally designed for defense and industrial systems. This means:

1. **No central broker** — nodes discover each other automatically through multicast
2. **Quality of Service (QoS) profiles** — you can configure reliability, durability, history depth for every topic
3. **Real-time capable** — if you set it up right

The moment you have two nodes on different machines talking to each other over a network, you understand why this exists. But getting there from "hello world" is a journey.

## Lifecycle Nodes Are Underrated

Most tutorials ignore lifecycle nodes. They're more verbose to set up. They feel like overkill for small projects.

They're not.

A lifecycle node has explicit states: **unconfigured → inactive → active → finalized**. This means your robot can be in a known, predictable state at every moment. When I integrated pure pursuit into a lifecycle architecture, the entire system became dramatically easier to debug.

The 91.9% tracking accuracy on Origin Navigation? Lifecycle nodes made that possible — because we could guarantee the controller was properly initialized before it started receiving commands.

## Gazebo Is a Relationship, Not a Tool

Simulating TurtleBot3 in Gazebo felt like fighting the simulator for the first few weeks.

The thing I missed: Gazebo and ROS2 communicate through **plugins** that bridge the simulation world with the ROS topic graph. The robot in the simulation *is* just another ROS2 node. Once you internalize this, everything clicks.

Want to read the robot's position? Subscribe to \`/odom\`. Want to move it? Publish to \`/cmd_vel\`. Same as a real robot.

## What I Wish I'd Known

1. **Read the design docs, not just the tutorials** — the ROS2 design docs explain *why* decisions were made, which makes the API make sense
2. **Start with Python, migrate to C++ later** — get the concepts first, then optimize
3. **Docker from day one** — ROS2 version conflicts are painful; containers are your friend
4. **Write tests early** — our 38 pytest tests for Origin Navigation saved us hours of debugging

The learning curve is real. But so is the power on the other side.

---

*Origin Navigation achieved 91.9% tracking accuracy with 38 automated tests. The full implementation is on GitHub.*
  `,
  "hackathons-best-rdlab": `
# Why Hackathons Are the Best R&D Labs We Have

I've organized two major hackathons: ETHMumbai and Hack The League. I've judged several more. I've competed in a few. And I've come to a conclusion that sounds provocative but I believe deeply:

**Hackathons produce more genuine innovation per dollar than most corporate R&D budgets.**

Let me make the case.

## The Economics of Forced Constraints

Corporate R&D labs, at their best, are environments of open exploration. At their worst — which is more common — they're bureaucratic machines optimized for low-risk incremental work.

A hackathon is 48 hours of forced constraints:
- Time: 48 hours
- Team: usually 2-4 people
- Resources: whatever's free or cheap
- Accountability: build something that actually works by Sunday afternoon

These constraints are *productive*. They eliminate the possibility of analysis paralysis. They make "let's do more research first" an impossible excuse. They create the conditions where genuine creativity happens.

## StrikeBot Was Born at a Hackathon

My first real robotics project — StrikeBot, the vision-guided marble-playing robot — was built at a hackathon. Raspberry Pi, OpenCV, a camera module, and 48 hours.

We had to make design decisions in minutes that a corporate team might spend weeks discussing. Does the detection pipeline use adaptive thresholding or binary thresholding? We tried both. We had 10 minutes to decide.

The answer was adaptive. The robot launched marbles at 1.38 m/s and 176 RPM. It worked.

Would we have made a better decision with 3 weeks? Maybe marginally. But we wouldn't have made *any* decision in 3 weeks. We'd have scheduled another meeting.

## The Learning Density Is Unmatched

The amount you learn in a 48-hour hackathon is not linear with time. It's not even exponential. It's something else.

Because you're not learning in a vacuum — you're learning to solve a specific problem that you care about *right now*, with direct feedback on whether you're getting it right. This is the optimal learning condition.

When I organized ETHMumbai, I watched teams go from "I've heard of smart contracts" to "we deployed a working DeFi protocol" in 24 hours. That's not possible in a classroom.

## Why Hackathons Are Underrated as R&D

Here's what a hackathon gives you that traditional R&D doesn't:

1. **Radical diversity of approaches** — 20 teams means 20 different architectures. One of them will be the one nobody planned for.
2. **Immediate user validation** — demos in front of judges are user tests. Brutal, unforgiving, and valuable.
3. **Cross-pollination** — the team doing AI governance at table 5 will use the same blockchain infrastructure as the team doing supply chain at table 12. Ideas spread.
4. **Skin in the game** — everyone *chose* to be there. Motivation is intrinsic.

## What Organizers Get Wrong

The biggest mistake hackathon organizers make is optimizing for *polish* over *substance*. They want beautiful demos. But the most valuable thing a hackathon can produce is a proof-of-concept that was impossible before someone tried.

The second mistake is not following up. The best hackathon projects die because there's no infrastructure to take them forward. ETHMumbai tried to address this with mentorship connections post-event.

## The Defense of Chaos

Yes, hackathon code is messy. Yes, some teams build things that don't work. Yes, 48 hours isn't enough to build anything production-ready.

But the question isn't "does this produce production software?" The question is "does this produce *ideas* and *learning* that would not otherwise exist?"

The answer is yes. Emphatically, provably yes.

That's why I'll keep organizing them.

---

*Shraavani has organized ETHMumbai and Hack The League. She has judged multiple hackathons and built her first robotics project, StrikeBot, at one.*
  `,
  "ai-governance-ux": `
# AI Governance Isn't Boring — It's the Most Important UX Problem

Here's the premise of PublicAI Pulse, the project that made me think most seriously about governance:

**The people who design AI governance systems are making UX decisions.**

They're choosing who gets to interact with the system, what feedback they receive, how transparent the system is about its reasoning, what happens when it fails. These are UX decisions. We just don't call them that.

## The Slider Problem

PublicAI Pulse is a browser-based simulator. It has two sliders:

1. **Transparency** — how much of the AI's reasoning is visible to affected parties
2. **Bias Correction Intensity** — how aggressively the system attempts to correct for historical biases

Move these sliders and watch what happens to simulated healthcare access, transit routing, housing allocation.

Building this taught me something I didn't expect: **the slider positions are not neutral**. There's no "default." Every deployment of an AI system in public services has implicit slider settings — usually set by engineers and policymakers who never had to explain them to anyone.

## Why Governance Looks Boring (And Isn't)

Governance looks boring because it's discussed in the language of policy. Compliance frameworks. Ethics guidelines. Audit requirements.

This language obscures what governance actually *is*: decisions about power. About who gets to know what. About who gets to appeal when something goes wrong. About what counts as going wrong.

When a transit authority deploys an AI routing system and it routes fewer buses to lower-income neighborhoods, that's not an algorithm problem. It's a governance problem. Someone decided what "efficiency" meant, whose travel time mattered, and whether disparate impact was acceptable.

That's UX. That's design. That's governance.

## The Healthcare Dimension

The healthcare slider in PublicAI Pulse is the most sobering.

When transparency is low and bias correction is weak, the simulation shows reduced appointment access for demographic groups historically underserved by healthcare systems. When transparency is high and bias correction is strong, overall efficiency metrics drop slightly — but distribution becomes more equitable.

This tradeoff is real. It exists in deployed systems today. Administrators are making this choice right now — usually implicitly, usually without realizing it.

The goal of PublicAI Pulse is to make that choice explicit. To force people to see the slider they're already moving.

## Design Principles for AI Governance

Through building this project and thinking about it since, I've come to believe that good AI governance in public services requires:

**1. Legibility** — Affected parties should be able to understand, in plain language, what factors the system considers about them.

**2. Contestability** — There must be a mechanism for challenging decisions. Not just an email address. A real process with defined timelines and escalation paths.

**3. Disparity monitoring** — Outcomes must be tracked by demographic group. You can't correct for disparities you're not measuring.

**4. Sunset clauses** — Deployed systems should require active renewal, not passive continuation. "Nothing has broken" is not evidence of "everything is working."

**5. Participatory auditing** — The communities affected by algorithmic systems should have representatives in the audit process.

None of these are technically difficult. They're all design decisions.

## The Most Important UX Problem

We're at an inflection point. AI systems are entering healthcare, transit, housing, criminal justice, education. The governance decisions made in the next five years will shape who benefits and who is harmed.

These decisions look like policy. They're really design.

And designers — engineers who build things for people — should be in the room.

That's why I built PublicAI Pulse. Not because I have all the answers, but because I think more people need to see the sliders.

---

*PublicAI Pulse is live at shraavanitople.github.io/publicai-pulse — try moving the sliders.*
  `,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const content = POST_CONTENT[slug];

  // Simple markdown-to-html (minimal, for the blog posts)
  const renderContent = (text: string) => {
    const lines = text.trim().split("\n");
    const elements: React.ReactElement[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="text-3xl font-black text-white mt-8 mb-4 tracking-tight">
            {line.replace("# ", "")}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-xl font-bold text-white mt-8 mb-3 tracking-tight">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="text-white font-semibold text-base leading-relaxed mb-4">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
        // Handle numbered lists
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) {
          listItems.push(lines[i].replace(/^\d+\. /, ""));
          i++;
        }
        elements.push(
          <ol key={i} className="list-decimal list-inside space-y-2 mb-4 text-[#a1a1aa]">
            {listItems.map((item, j) => (
              <li key={j} className="leading-relaxed">
                {item.replace(/\*\*(.*?)\*\*/g, (_, t) => t)}
              </li>
            ))}
          </ol>
        );
        continue;
      } else if (line.startsWith("- ")) {
        // Handle bullet lists
        const listItems: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          listItems.push(lines[i].replace("- ", ""));
          i++;
        }
        elements.push(
          <ul key={i} className="list-disc list-inside space-y-2 mb-4 text-[#a1a1aa]">
            {listItems.map((item, j) => (
              <li key={j} className="leading-relaxed">
                {item.replace(/\*\*(.*?)\*\*/g, (_, t) => t)}
              </li>
            ))}
          </ul>
        );
        continue;
      } else if (line.startsWith("---")) {
        elements.push(
          <hr key={i} className="my-8" style={{ borderColor: "rgba(255,255,255,0.08)" }} />
        );
      } else if (line.startsWith("> ")) {
        elements.push(
          <blockquote
            key={i}
            className="pl-4 py-1 text-[#a1a1aa] italic my-4"
            style={{ borderLeft: "2px solid #818CF8" }}
          >
            {line.replace("> ", "")}
          </blockquote>
        );
      } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
        elements.push(
          <p key={i} className="text-sm text-[#52525b] italic mt-4">
            {line.replace(/^\*/, "").replace(/\*$/, "")}
          </p>
        );
      } else if (line.trim() === "") {
        // Skip empty lines (used as spacing between paragraphs)
      } else {
        // Regular paragraph — handle inline bold
        const parts = line.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <p key={i} className="text-[#a1a1aa] leading-relaxed mb-4 text-base">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="text-white font-semibold">
                  {part.replace(/\*\*/g, "")}
                </strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </p>
        );
      }

      i++;
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div
        className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b ${post.gradient} via-transparent to-transparent`}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#52525b] hover:text-[#818CF8] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            All posts
          </Link>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full text-[#52525b]"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[#52525b] font-mono">
            <span>Shraavani Tople</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose-sm sm:prose-base">
          {renderContent(content || "")}
        </article>
      </div>

      {/* Footer nav */}
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#52525b] hover:text-[#818CF8] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All posts
          </Link>
          <Link
            href="/"
            className="text-sm font-mono text-[#52525b] hover:text-[#818CF8] transition-colors"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
