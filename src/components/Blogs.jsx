import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../supabaseClient';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BlogCard = React.forwardRef(({ blog, onClick }, ref) => (
  <div ref={ref} className="blog-card" onClick={() => onClick(blog)} style={{ cursor: 'pointer', border: '1px solid #eee', borderRadius: 8, padding: 16, marginBottom: 16, boxShadow: '0 2px 8px #f0f0f0', background: '#fff', color: '#1e293b' }}>
    <img src={blog.thumbnail} alt={blog.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8 }} />
    <h3 style={{ margin: '12px 0 8px 0', color: '#1e293b' }}>{blog.title}</h3>
    <div style={{ marginBottom: 8 }}>
      {blog.tags && blog.tags.map(tag => (
        <span key={tag} style={{ background: '#eee', borderRadius: 4, padding: '2px 8px', marginRight: 4, fontSize: 12, color: '#1e293b' }}>{tag}</span>
      ))}
    </div>
    <span style={{ fontSize: 12, color: '#888' }}>{blog.type}</span>
  </div>
));

const BlogDetail = ({ blog, onClose }) => (
  <div className="blog-detail-modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ background: '#fff', borderRadius: 8, padding: 24, maxWidth: 600, width: '90%', position: 'relative', color: '#1e293b' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#1e293b' }}>×</button>
      <img src={blog.thumbnail} alt={blog.title} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8 }} />
      <h2 style={{ margin: '16px 0 8px 0', color: '#1e293b' }}>{blog.title}</h2>
      <div style={{ marginBottom: 8 }}>
        {blog.tags && blog.tags.map(tag => (
          <span key={tag} style={{ background: '#eee', borderRadius: 4, padding: '2px 8px', marginRight: 4, fontSize: 12, color: '#1e293b' }}>{tag}</span>
        ))}
      </div>
      <span style={{ fontSize: 12, color: '#888' }}>{blog.type}</span>
      <div style={{ margin: '16px 0' }}>
        <span style={{ fontSize: 12, color: '#888' }}>Views: {blog.views} | Created: {new Date(blog.created_at).toLocaleDateString()}</span>
      </div>
      <div style={{ margin: '16px 0', color: '#1e293b' }}>
        <div style={{ whiteSpace: 'pre-line' }}>{blog.content}</div>
      </div>
      {blog.video_url && (
        <div style={{ margin: '16px 0' }}>
          <iframe width="100%" height="315" src={blog.video_url.replace('watch?v=', 'embed/')} title="YouTube video" frameBorder="0" allowFullScreen></iframe>
        </div>
      )}
    </div>
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    if (!loading && blogs.length > 0) {
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
    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loading, blogs]);

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: 16 }}>
      <h1 style={{ marginBottom: 24 }}>Blog</h1>
      {loading ? <p>Loading...</p> : (
        blogs.length === 0 ? <p>No blogs found.</p> : (
          blogs.map((blog, idx) => (
            <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlog} ref={el => cardRefs.current[idx] = el} />
          ))
        )
      )}
      {selectedBlog && <BlogDetail blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
    </div>
  );
};

export default Blogs; 