import React, { useEffect, useState, useRef, useMemo } from 'react';
import { supabase } from '../supabaseClient';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Professional color palette
const INDIGO = '#312e81'; // blue accent
const INDIGO_DARK = '#1e1b4b';
const SKY = '#2563eb'; // blue secondary
const SKY_LIGHT = '#dbeafe';
const SLATE = '#334155'; // neutral text
const SLATE_BG = '#f8fafc'; // neutral background
const BORDER = '#e2e8f0'; // border color
const PINK = '#fce7f3'; // very light pastel pink
const PINK_TEXT = '#be185d'; // for text on blue backgrounds
const GRADIENT = `linear-gradient(90deg, ${SKY} 0%, ${PINK} 100%)`;
const FONT_FAMILY = 'Inter, Segoe UI, Arial, sans-serif';
const BLOGS_PER_PAGE = 5;

const BlogCard = React.forwardRef(({ blog, onClick }, ref) => (
  <div
    ref={ref}
    className="blog-card"
    onClick={() => onClick(blog)}
    style={{
      cursor: 'pointer',
      borderRadius: 20,
      padding: 28,
      marginBottom: 32,
      background: `linear-gradient(135deg, ${PINK} 80%, ${SKY_LIGHT} 100%)`,
      color: SLATE,
      transition: 'box-shadow 0.2s, transform 0.2s',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      position: 'relative',
      overflow: 'hidden',
      minHeight: 320,
      outline: 'none',
      boxShadow: '0 6px 32px 0 rgba(0,0,0,0.13)',
      border: `1.5px solid ${INDIGO}`,
    }}
    tabIndex={0}
    onMouseEnter={e => {
      e.currentTarget.style.boxShadow = `0 12px 36px 0 rgba(0,0,0,0.22)`;
      e.currentTarget.style.transform = 'translateY(-6px) scale(1.025)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.boxShadow = '0 6px 32px 0 rgba(0,0,0,0.13)';
      e.currentTarget.style.transform = 'none';
    }}
  >
    <div style={{height: 8, width: '100%', background: GRADIENT, position: 'absolute', top: 0, left: 0, borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
    <img
      src={blog.thumbnail}
      alt={blog.title}
      style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 14, marginBottom: 12, marginTop: 10, boxShadow: `0 2px 12px ${SKY_LIGHT}` }}
    />
    <h3 style={{ margin: '8px 0 4px 0', color: INDIGO_DARK, fontWeight: 800, fontSize: 24, letterSpacing: 0.3, fontFamily: FONT_FAMILY }}>{blog.title}</h3>
    <div style={{ marginBottom: 4, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {blog.tags && blog.tags.map(tag => (
        <span
          key={tag}
          style={{ background: GRADIENT, borderRadius: 999, padding: '5px 16px', fontSize: 15, color: INDIGO_DARK, fontWeight: 700, marginBottom: 2, boxShadow: `0 1px 4px rgba(0,0,0,0.13)`, border: `1.5px solid ${SKY}` }}
        >
          #{tag}
        </span>
      ))}
    </div>
    <span style={{ fontSize: 15, color: SKY, fontWeight: 600 }}>{blog.type}</span>
    <span style={{ fontSize: 13, color: SKY, position: 'absolute', right: 32, bottom: 28, fontWeight: 600 }}>
      {new Date(blog.created_at).toLocaleDateString()}
    </span>
  </div>
));

const BlogDetail = ({ blog, onClose }) => (
  <div
    className="blog-detail-modal"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(30,41,59,0.60)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.2s',
    }}
  >
    <div
      style={{
        background: SLATE_BG,
        borderRadius: 24,
        padding: 44,
        maxWidth: 720,
        width: '98%',
        position: 'relative',
        color: SLATE,
        boxShadow: `0 12px 64px rgba(0,0,0,0.22)`,
        border: `2.5px solid ${INDIGO}`,
        animation: 'popIn 0.2s',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 22,
          right: 22,
          background: INDIGO,
          border: 'none',
          fontSize: 32,
          cursor: 'pointer',
          color: '#fff',
          borderRadius: '50%',
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `0 2px 8px ${SKY_LIGHT}`,
          transition: 'background 0.2s',
        }}
        aria-label="Close"
        onMouseEnter={e => (e.currentTarget.style.background = INDIGO)}
        onMouseLeave={e => (e.currentTarget.style.background = INDIGO)}
      >
        ×
      </button>
      <img
        src={blog.thumbnail}
        alt={blog.title}
        style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 14, marginBottom: 18, boxShadow: `0 2px 12px ${SKY_LIGHT}` }}
      />
      <h2 style={{ margin: '14px 0 10px 0', color: INDIGO_DARK, fontWeight: 900, fontSize: 28, letterSpacing: 0.3, fontFamily: FONT_FAMILY }}>{blog.title}</h2>
      <div style={{ marginBottom: 10, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {blog.tags && blog.tags.map(tag => (
          <span
            key={tag}
            style={{ background: GRADIENT, borderRadius: 999, padding: '5px 16px', fontSize: 15, color: INDIGO_DARK, fontWeight: 700, marginBottom: 2, boxShadow: `0 1px 4px rgba(0,0,0,0.13)`, border: `1.5px solid ${SKY}` }}
          >
            #{tag}
          </span>
        ))}
      </div>
      <span style={{ fontSize: 15, color: SKY, fontWeight: 600 }}>{blog.type}</span>
      <div style={{ margin: '18px 0' }}>
        <span style={{ fontSize: 15, color: SKY, fontWeight: 700 }}>
          Views: {blog.views} | Created: {new Date(blog.created_at).toLocaleDateString()}
        </span>
      </div>
      <div style={{ margin: '22px 0', color: SLATE, fontSize: 18, lineHeight: 1.8, letterSpacing: 0.12, fontFamily: FONT_FAMILY }}>
        <div style={{ whiteSpace: 'pre-line' }}>{blog.content}</div>
      </div>
      {blog.video_url && (
        <div style={{ margin: '22px 0' }}>
          <iframe
            width="100%"
            height="320"
            src={blog.video_url.replace('watch?v=', 'embed/')}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: 12, boxShadow: `0 2px 8px rgba(0,0,0,0.13)` }}
          ></iframe>
        </div>
      )}
    </div>
  </div>
);

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'views', label: 'Most Views' },
  { value: 'title', label: 'Title (A-Z)' },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error) setBlogs(data);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogs.forEach(blog => {
      if (Array.isArray(blog.tags)) blog.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [blogs]);

  // Filter, search, sort
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    if (search.trim()) {
      const s = search.trim().toLowerCase();
      filtered = filtered.filter(
        b => b.title.toLowerCase().includes(s) || (b.content && b.content.toLowerCase().includes(s))
      );
    }
    if (selectedTag) {
      filtered = filtered.filter(b => b.tags && b.tags.includes(selectedTag));
    }
    switch (sort) {
      case 'oldest':
        filtered = filtered.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        break;
      case 'views':
        filtered = filtered.slice().sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'title':
        filtered = filtered.slice().sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        filtered = filtered.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }
    return filtered;
  }, [blogs, search, selectedTag, sort]);

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice((page - 1) * BLOGS_PER_PAGE, page * BLOGS_PER_PAGE);

  useEffect(() => {
    // Reset to first page if filter/search/sort changes
    setPage(1);
  }, [search, selectedTag, sort]);

  useEffect(() => {
    if (!loading && paginatedBlogs.length > 0) {
      cardRefs.current.forEach((el, idx) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loading, paginatedBlogs]);

  // Pagination controls
  const Pagination = () => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 14, margin: '40px 0 0 0' }}>
      <button
        onClick={() => setPage(p => Math.max(1, p - 1))}
        disabled={page === 1}
        style={{
          padding: '10px 22px',
          borderRadius: 999,
          border: `2px solid ${INDIGO}`,
          background: page === 1 ? SLATE_BG : INDIGO,
          color: page === 1 ? SLATE : '#fff',
          cursor: page === 1 ? 'not-allowed' : 'pointer',
          fontWeight: 700,
          fontSize: 16,
          boxShadow: '0 1px 4px rgba(0,0,0,0.13)',
          transition: 'background 0.2s',
        }}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          style={{
            padding: '10px 20px',
            borderRadius: 999,
            border: `2px solid ${INDIGO}`,
            background: page === i + 1 ? GRADIENT : SLATE_BG,
            color: page === i + 1 ? '#fff' : INDIGO,
            fontWeight: 800,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: page === i + 1 ? `0 2px 8px rgba(0,0,0,0.13)` : 'none',
            transition: 'background 0.2s',
          }}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        style={{
          padding: '10px 22px',
          borderRadius: 999,
          border: `2px solid ${INDIGO}`,
          background: page === totalPages ? SLATE_BG : INDIGO,
          color: page === totalPages ? SLATE : '#fff',
          cursor: page === totalPages ? 'not-allowed' : 'pointer',
          fontWeight: 700,
          fontSize: 16,
          boxShadow: '0 1px 4px rgba(0,0,0,0.13)',
          transition: 'background 0.2s',
        }}
      >
        Next
      </button>
    </div>
  );

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: '56px auto',
        padding: 40,
        background: SLATE_BG,
        borderRadius: 28,
        boxShadow: '0 8px 48px rgba(0,0,0,0.13)',
        minHeight: 650,
        fontFamily: FONT_FAMILY,
      }}
    >
      <h1 style={{ marginBottom: 38, color: INDIGO_DARK, fontWeight: 900, fontSize: 44, letterSpacing: 0.6, textAlign: 'center', background: GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Blog</h1>
      {/* Controls */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 22,
        marginBottom: 38,
        alignItems: 'center',
        background: PINK,
        borderRadius: 18,
        boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
        padding: '22px 24px',
        border: `2px solid ${INDIGO}`,
        justifyContent: 'space-between',
      }}>
        {/* Search */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: INDIGO, fontSize: 22, fontWeight: 800, marginRight: 4 }}>🔍</span>
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              padding: '12px 18px',
              borderRadius: 10,
              border: `2px solid ${INDIGO}`,
              fontSize: 17,
              minWidth: 220,
              outline: 'none',
              color: INDIGO_DARK,
              background: SKY_LIGHT,
              fontWeight: 600,
              transition: 'border 0.2s',
            }}
          />
        </div>
        {/* Tag Filter */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: 17, color: INDIGO_DARK, fontWeight: 800 }}>Tags:</span>
          <button
            onClick={() => setSelectedTag('')}
            style={{
              padding: '7px 18px',
              borderRadius: 999,
              border: `2px solid ${SKY}`,
              background: selectedTag === '' ? GRADIENT : SKY_LIGHT,
              color: selectedTag === '' ? INDIGO_DARK : SKY,
              fontWeight: 800,
              cursor: 'pointer',
              marginRight: 2,
              fontSize: 16,
              transition: 'background 0.2s',
              boxShadow: selectedTag === '' ? `0 1px 4px rgba(0,0,0,0.13)` : 'none',
            }}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                padding: '7px 18px',
                borderRadius: 999,
                border: `2px solid ${SKY}`,
                background: selectedTag === tag ? GRADIENT : SKY_LIGHT,
                color: selectedTag === tag ? INDIGO_DARK : SKY,
                fontWeight: 800,
                cursor: 'pointer',
                marginRight: 2,
                fontSize: 16,
                transition: 'background 0.2s',
                boxShadow: selectedTag === tag ? `0 1px 4px rgba(0,0,0,0.13)` : 'none',
              }}
            >
              #{tag}
            </button>
          ))}
        </div>
        {/* Sort */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ color: INDIGO, fontSize: 22, fontWeight: 800 }}>⇅</span>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            style={{
              padding: '12px 18px',
              borderRadius: 10,
              border: `2px solid ${INDIGO}`,
              fontSize: 17,
              color: INDIGO_DARK,
              background: SKY_LIGHT,
              fontWeight: 800,
              outline: 'none',
              transition: 'border 0.2s',
            }}
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Blog List */}
      {loading ? (
        <p style={{ color: INDIGO_DARK, fontSize: 22, textAlign: 'center', margin: '56px 0' }}>Loading...</p>
      ) : filteredBlogs.length === 0 ? (
        <p style={{ color: INDIGO_DARK, fontSize: 22, textAlign: 'center', margin: '56px 0' }}>No blogs found.</p>
      ) : (
        paginatedBlogs.map((blog, idx) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={setSelectedBlog}
            ref={el => (cardRefs.current[idx] = el)}
          />
        ))
      )}
      {/* Pagination */}
      {filteredBlogs.length > BLOGS_PER_PAGE && <Pagination />}
      {/* Blog Detail Modal */}
      {selectedBlog && <BlogDetail blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
    </div>
  );
};

export default Blogs; 