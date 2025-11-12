import { Fragment } from "react";

type Story = {
  id: string;
  headline: string;
  summary: string;
  category: string;
  readTime: string;
};

type Recommendation = {
  id: string;
  title: string;
  summary: string;
  curator: string;
};

type TimelineEvent = {
  id: string;
  time: string;
  headline: string;
  summary: string;
};

type PlaylistItem = {
  id: string;
  title: string;
  duration: string;
};

type InsightStat = {
  id: string;
  label: string;
  metric: string;
  delta: string;
  direction: "up" | "down";
};

const featuredStories: Story[] = [
  {
    id: "story-01",
    headline: "How AI Newsrooms Are Rewriting the Craft of Editorial Journalism",
    summary:
      "From predictive analytics to co-authoring, explore how machine intelligence is reshaping storytelling and audience trust.",
    category: "Future of Media",
    readTime: "7 min read"
  },
  {
    id: "story-02",
    headline: "The Creator Economy’s Next Chapter: Boutique Media Brands at Scale",
    summary:
      "Independent voices are building multi-platform empires. We break down the playbooks accelerating their momentum.",
    category: "Creator Economy",
    readTime: "5 min read"
  },
  {
    id: "story-03",
    headline: "Immersive Audio: The Hidden Driver Behind Newsletter Retention",
    summary:
      "Voice-first storytelling and sound design are redefining the daily commute and fighting churn in premium subscriptions.",
    category: "Audience Design",
    readTime: "6 min read"
  },
  {
    id: "story-04",
    headline: "Inside the Battle for Local Streaming Rights Across Global Cities",
    summary:
      "Regional networks are reinventing licensing models to keep pace with hyperlocal streaming demands and advertiser ROI.",
    category: "Media Economics",
    readTime: "8 min read"
  }
];

const recommendations: Recommendation[] = [
  {
    id: "rec-01",
    title: "Designing Editorial Systems That Scale Overnight",
    summary:
      "No-code tooling and modular brand systems that let lean teams ship daily visual refreshes without developer bottlenecks.",
    curator: "Curated by Ava Mitchell"
  },
  {
    id: "rec-02",
    title: "The Metrics That Matter for Modern Media Funnels",
    summary:
      "Move beyond pageviews—north-star frameworks that tie narrative impact to subscriber lifetime value.",
    curator: "Curated by Data Desk"
  },
  {
    id: "rec-03",
    title: "Narrative Design Patterns for Actionable Explainers",
    summary:
      "How to layer motion, typography, and scrollytelling to guide readers through complex policy shifts with clarity.",
    curator: "Curated by Motion Lab"
  }
];

const timeline: TimelineEvent[] = [
  {
    id: "tl-01",
    time: "07:45",
    headline: "Streaming consortium approves interoperable ad tech taxonomy",
    summary: "Joint statement promises better measurement across OTT platforms by Q3."
  },
  {
    id: "tl-02",
    time: "09:20",
    headline: "Audio-first startup raises Series B to power multilingual news digests",
    summary: "Funding round led by Aurora Ventures with participation from Wave Capital."
  },
  {
    id: "tl-03",
    time: "11:05",
    headline: "Leaked deck reveals social platform’s pivot to premium topic tiers",
    summary: "Creators to receive 65% rev-share for high-intent micro communities."
  },
  {
    id: "tl-04",
    time: "13:15",
    headline: "Public broadcaster unveils XR studio for real-time election coverage",
    summary: "Hybrid newsroom blends volumetric capture with live data storytelling."
  }
];

const playlist: PlaylistItem[] = [
  { id: "pl-01", title: "Building a Story Stack That Personalizes Daily", duration: "12:48" },
  { id: "pl-02", title: "Brand Studios: From Campaigns to Always-On Product", duration: "09:37" },
  { id: "pl-03", title: "What Happens When Newsletters Become Marketplaces", duration: "14:22" }
];

const insights: InsightStat[] = [
  { id: "ins-01", label: "Subscriber Lift", metric: "+28%", delta: "vs last 30d", direction: "up" },
  { id: "ins-02", label: "Retention Index", metric: "92", delta: "steady", direction: "up" },
  { id: "ins-03", label: "Ad Fill Rate", metric: "84%", delta: "-4 pts", direction: "down" }
];

const trendingTopics = [
  "AI Co-Pilots",
  "Narrative Design",
  "Audience Signals",
  "Immersive Audio",
  "Creator Deals",
  "Newsletters",
  "DataViz",
  "Media Ops"
];

const compactStories = [
  {
    id: "compact-01",
    title: "Why community-driven comments are the new retention moat",
    summary: "Case studies from three publishers seeing 3x dwell time after redesigning their forums."
  },
  {
    id: "compact-02",
    title: "Mapping paywall personalization to reader archetypes",
    summary: "Onboarding flows that turn casual fans into subscribers without discount bait."
  },
  {
    id: "compact-03",
    title: "Live events as signal amplifiers for editorial calendars",
    summary: "How newsrooms are syncing programming to IRL experiences to boost loyalty."
  }
];

const newsflash = [
  {
    id: "flash-01",
    label: "Breaking",
    headline: "Global syndication alliance adds 54 million potential readers overnight.",
    progress: 72
  },
  {
    id: "flash-02",
    label: "Update",
    headline: "Premium podcast bundle surpasses 200k active subscribers in five weeks.",
    progress: 56
  },
  {
    id: "flash-03",
    label: "Watchlist",
    headline: "Interactive documentary platform teases volumetric newsroom tools.",
    progress: 38
  }
];

export default function HomePage() {
  return (
    <main className="layout">
      <aside className="sidebar">
        <header className="section masthead">
          <div className="masthead-left">
            <span className="masthead-brand">PulsePress</span>
            <span className="masthead-date">Wednesday, April 24 · Global Edition</span>
          </div>
          <div className="masthead-right">
            <input className="search" placeholder="Search Briefings" />
            <button className="subscribe-btn" type="button">
              Subscribe
            </button>
          </div>
        </header>

        <section className="section">
          <div className="section-header">
            <span className="section-title">Editorial Pulse</span>
            <span className="section-action">Live</span>
          </div>
          <div className="story-grid">
            {featuredStories.slice(0, 2).map((story) => (
              <article className="story-card" key={story.id}>
                <div className="story-meta">
                  <span>{story.category}</span>
                  <span>{story.readTime}</span>
                </div>
                <h3 className="story-headline">{story.headline}</h3>
                <p className="story-subhead">{story.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">Trending Topics</span>
            <span className="section-action">Explore</span>
          </div>
          <div className="topics">
            {trendingTopics.map((topic) => (
              <span className="topic-pill" key={topic}>
                {topic}
              </span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">News Flash</span>
            <span className="section-action">Real Time</span>
          </div>
          <div className="newsflash">
            {newsflash.map((item) => (
              <div className="newsflash-item" key={item.id}>
                <span className="newsflash-label">{item.label}</span>
                <span className="newsflash-headline">{item.headline}</span>
                <div className="progress-bar">
                  <div className="progress-indicator" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>

      <section className="main-content">
        <section className="section feature-card">
          <div className="feature-tags">
            <span className="tag">Featured</span>
            <span className="tag">Strategy</span>
            <span className="tag">Playbook</span>
          </div>
          <h1 className="feature-headline">
            The 48-Hour Reinvention: Building a Responsive Media Brand for the Frictionless Era
          </h1>
          <p className="feature-subheadline">
            A deep dive into how emergent teams blend editorial instinct, data choreography, and
            multi-format storytelling to ship newsroom-grade experiences at startup speed.
          </p>
          <div className="author">
            <span className="author-avatar" />
            <div>
              <div>By Jordan Blake · Editor-at-Large</div>
              <div>Premium Analysis · Issue 032</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">Most Viewed</span>
            <span className="section-action">All Metrics</span>
          </div>
          <div className="story-grid">
            {featuredStories.map((story) => (
              <article className="story-card" key={story.id}>
                <div className="story-meta">
                  <span>{story.category}</span>
                  <span>{story.readTime}</span>
                </div>
                <h3 className="story-headline">{story.headline}</h3>
                <p className="story-subhead">{story.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">Inside the Timeline</span>
            <span className="section-action">Chronicle</span>
          </div>
          <div className="timeline">
            {timeline.map((event) => (
              <article className="timeline-event" key={event.id}>
                <span className="timeline-time">{event.time}</span>
                <h4 className="timeline-headline">{event.headline}</h4>
                <p className="timeline-summary">{event.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <aside className="right-rail">
        <section className="section">
          <div className="section-header">
            <span className="section-title">Recommendations</span>
            <span className="section-action">Curated</span>
          </div>
          <div className="grid-balanced">
            {recommendations.map((item) => (
              <article className="recommendation-card" key={item.id}>
                <div className="recommendation-avatar" />
                <div>
                  <h4 className="recommendation-title">{item.title}</h4>
                  <p className="recommendation-summary">{item.summary}</p>
                  <span className="story-meta">{item.curator}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section ad-card">
          <span className="ad-label">Sponsored Insight</span>
          <h3 className="ad-headline">Upgrade Your Media Stack in 30 Days</h3>
          <p>
            Launch a headless publishing system with adaptive paywalls, real-time experimentation,
            and built-in loyalty analytics. Eligible teams secure white-glove migration support.
          </p>
          <a className="ad-cta" href="#">
            Discover AtlasOS →
          </a>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">Featured Briefings</span>
            <span className="section-action">Stream</span>
          </div>
          <div className="playlist-card">
            <h4 className="playlist-title">Daily Audio Playlist</h4>
            <div className="playlist-list">
              {playlist.map((item) => (
                <div className="playlist-item" key={item.id}>
                  <span>{item.title}</span>
                  <span>{item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">Performance Insights</span>
            <span className="section-action">Analytics</span>
          </div>
          <div className="grid-balanced">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.id}>
                <span className="insight-label">{insight.label}</span>
                <span className="insight-metric">{insight.metric}</span>
                <span className={`insight-delta ${insight.direction}`}>{insight.delta}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-title">Quick Reads</span>
            <span className="section-action">Browse</span>
          </div>
          <div className="compact-grid">
            {compactStories.map((story) => (
              <article className="compact-item" key={story.id}>
                <h4>{story.title}</h4>
                <p>{story.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </aside>
    </main>
  );
}
