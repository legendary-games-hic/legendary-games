// src/pages/CommunityPage.jsx
import { useState } from 'react';
import '../assets/css/CommunityPage.css';

const THREADS = [
  {
    title: 'Welcome!',
    replies: 25,
    views: '1k',
    time: 'Friday 13th at 2:00 AM',
  },
  {
    title: 'Memes only... keep it legendary.',
    replies: 100,
    views: '2k',
    time: 'Yesterday at 1:00 AM',
  },
  {
    title: 'Controller Mods + Custom Builds',
    replies: 25,
    views: '1k',
    time: 'Sunday 8th at 2:00 AM',
  },
  {
    title: 'Best Headsets under $100',
    replies: 10,
    views: '1k',
    time: 'Friday 13th at 2:00 AM',
  },
  {
    title: 'Share your best loadouts & builds.',
    replies: 20,
    views: '3k',
    time: 'October 23th at 4:00 AM',
  },
  {
    title: 'Introduce yourself.. what do you play?',
    replies: 25,
    views: '1k',
    time: 'Friday 13th at 2:00 AM',
  },
];

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredThreads = THREADS.filter((thread) =>
    thread.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-pages community-page-container">

      {/* TITLE + SEARCH */}
      <div className="community-header d-flex justify-content-between align-items-center">
        <h4 className="legendary-green-color community-title">
          Legendary Games Community
        </h4>

        <input
          type="text"
          className="community-search-input"
          placeholder="search topics"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* ⭐ NEW: wrap existing content + sidebar in a grid */}
      <div className="community-main-grid">

        {/* ⭐ LEFT COLUMN: this is just your existing content */}
        <div className="community-main-left">
          {/* PAGINATION */}
          <div className="community-pagination">
            <button className="community-page-btn active">1</button>
            <button className="community-page-btn">2</button>
            <button className="community-page-btn">3</button>
            <span className="community-page-ellipsis">...</span>
            <button className="community-page-btn">Next ▶</button>
          </div>

          {/* THREAD LIST */}
          <div className="community-thread-list">
            {filteredThreads.map((thread) => (
              <div
                className="community-thread-card"
                key={thread.title}
                onClick={() => console.log('Open thread:', thread.title)}
              >
                {/* LEFT: ICON + TITLE */}
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-chat-left-text community-thread-icon" />
                  <span className="community-thread-title">{thread.title}</span>
                </div>

                {/* RIGHT: REPLIES, VIEWS, TIME */}
                <div className="d-flex align-items-center gap-4 community-thread-meta">
                  <div className="d-flex align-items-center gap-1">
                    <i className="bi bi-chat-dots community-meta-icon" />
                    <span>{thread.replies}</span>
                  </div>

                  <div className="d-flex align-items-center gap-1">
                    <i className="bi bi-eye community-meta-icon" />
                    <span>{thread.views}</span>
                  </div>

                  <span className="community-thread-time">{thread.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ RIGHT COLUMN: news / API section */}
        <aside className="community-sidebar">
          <div className="community-sidebar-card">
            <h5 className="community-sidebar-title">Latest Game News</h5>
            <p className="community-sidebar-body">
              Placeholder for game news. Later, this can be filled with data from a games API.
            </p>
          </div>

          <div className="community-sidebar-card">
            <h5 className="community-sidebar-title">Upcoming Releases</h5>
            <p className="community-sidebar-body">
              Placeholder for upcoming releases or community announcements.
            </p>
          </div>
        </aside>

      </div>
      {/* ⭐ end community-main-grid */}

    </div>
  );
}