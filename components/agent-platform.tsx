'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight, ChevronRight, Menu, Moon, MoreHorizontal, Network, Search, Sun, X } from 'lucide-react'

type Agent = { number: string; category: string; name: string; description: string; accent: string; available?: boolean; featured?: boolean }

const agentRegistry: Agent[] = [
  { number: '014', category: 'MARKETING', name: 'SEO Agent', description: 'Organic growth specialist for search demand, content gaps, and visibility.', accent: 'teal', available: true, featured: true },
  { number: '018', category: 'MARKETING', name: 'Content Marketing Agent', description: 'Build an editorial system that turns insight into useful work.', accent: 'coral', available: true, featured: true },
  { number: '027', category: 'FINANCE', name: 'Financial Analyst', description: 'Turn financial statements into decision-ready insight.', accent: 'green', available: true },
  { number: '041', category: 'RESEARCH', name: 'Market Intelligence', description: 'Understand competitors, markets, and opportunities.', accent: 'blue', available: true, featured: true },
  { number: '052', category: 'OPERATIONS', name: 'Process Architect', description: 'Design repeatable systems for complex work.', accent: 'slate', available: true },
  { number: '063', category: 'TECHNOLOGY', name: 'Systems Engineer', description: 'Map technical decisions into practical execution.', accent: 'violet', available: true },
]

const categories = [['01', 'Marketing', 'Find the opportunity.'], ['02', 'Finance', 'Make numbers useful.'], ['03', 'Research', 'Understand the market.'], ['04', 'Operations', 'Make work repeatable.'], ['05', 'Technology', 'Build with precision.']]

function Nav({ theme, onToggleTheme }: { theme: 'light' | 'dark'; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  return <>
    <header className="nav-wrap"><a className="brand" href="#top" aria-label="Social Norm home"><span className="brand-mark"><span /></span><span>social norm<small>by Parivestra Ventures</small></span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#agents">Agents</a><a href="#workflows">Workflows</a><a href="#categories">Categories</a><a href="#about">About</a></nav><div className="nav-actions"><a href="#about" className="signin">Sign in</a><button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? <Moon /> : <Sun />}</button><a href="#agents" className="dark-button">Get started <ArrowUpRight size={15} /></a><button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button></div></header>
    {open && <div className="mobile-overlay"><button onClick={() => setOpen(false)} className="close-menu" aria-label="Close menu"><X /></button><div className="mobile-links">{['Agents', 'Workflows', 'Categories', 'About'].map((item, i) => <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} key={item}>{item}<span>0{i + 1}</span></a>)}</div></div>}
  </>
}

function NetworkArt() {
  return <div className="network-art" aria-label="Connected specialist agents"><div className="network-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="connector c1" /><div className="connector c2" /><div className="connector c3" /><div className="node node-main"><Network size={17} /><span>agent network</span></div><div className="node node-a"><span>research</span></div><div className="node node-b"><span>strategy</span></div><div className="node node-c"><span>execution</span></div><div className="network-caption">01 — 100+ SPECIALISTS<br /><span>Connected intelligence</span></div></div>
}

function WelcomeRoom() {
  const [submitted, setSubmitted] = useState(false)
  const [value, setValue] = useState('')
  return <section className="welcome-section"><div className="room-copy"><p className="eyebrow">THE WELCOME ROOM</p><h2>Meet the specialist<br /><em>already at work.</em></h2><p>Start with a question. Social Norm will bring the right intelligence into the room.</p></div><div className="agent-room"><div className="room-top"><span><i className="available-dot" /> SEO AGENT</span><span>MARKETING / 014</span></div><div className="agent-portrait"><div className="portrait-halo" /><div className="portrait-head">◒</div><div className="portrait-desk" /><div className="portrait-window">SEARCH<br />LANDSCAPE</div></div><div className="room-chat"><div className="chat-meta">SEO AGENT <span>Organic Growth Specialist</span></div><div className="chat-message user">How can I increase organic traffic?</div><div className="chat-message agent">I&apos;d start with your existing search demand.<br /><small>◌ researching keyword coverage · competitor visibility · content gaps</small></div>{submitted && <div className="chat-result">✓ Opportunity map ready <span>1,284 keywords analyzed</span></div>}<form className="room-input" onSubmit={event => { event.preventDefault(); if (value.trim()) setSubmitted(true) }}><input aria-label="Ask the SEO Agent" placeholder="Ask your specialist anything..." value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) event.currentTarget.form?.requestSubmit() }} /><button type="submit" aria-label="Send message" disabled={!value.trim()}><ArrowUpRight /></button></form></div></div></section>
}

function LibrarySearch({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const matches = agentRegistry.filter(agent => agent.name.toLowerCase().includes(query.toLowerCase()) || agent.category.toLowerCase().includes(query.toLowerCase()))
  return <section className="agent-search-panel library-drawer" aria-labelledby="agent-library-title"><button className="drawer-close" onClick={onClose} aria-label="Close agent library"><X /></button><div className="library-heading"><div><p className="eyebrow">THE AGENT LIBRARY</p><h2 id="agent-library-title">Find your <em>specialist.</em></h2></div><label className="search-field"><Search aria-hidden="true" /><span className="sr-only">Search agents</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search agents, disciplines, or capabilities" /></label></div><div className="search-results" aria-live="polite">{matches.map(agent => <article className="search-result" key={agent.number}><span className={`result-dot ${agent.accent}`} /><span><b>{agent.name}</b><small>{agent.category} / {agent.number}</small></span><ArrowUpRight /></article>)}{matches.length === 0 && <p className="no-results">No specialists match that search yet.</p>}</div></section>
}

export default function AgentPlatform() {
  const [activeAgent, setActiveAgent] = useState(0)
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [libraryOpen, setLibraryOpen] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('social-norm-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') setTheme(savedTheme)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(current => {
      const nextTheme = current === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('social-norm-theme', nextTheme)
      return nextTheme
    })
  }
  const visibleAgents = useMemo(() => agentRegistry.filter(a => a.available && a.name.toLowerCase().includes(query.toLowerCase())), [query])
  return <main id="top" className={theme === 'dark' ? 'theme-dark' : ''}><Nav theme={theme} onToggleTheme={toggleTheme} /><button className="library-trigger" onClick={() => setLibraryOpen(true)} aria-label="Open agent library" aria-expanded={libraryOpen}><MoreHorizontal /></button>{libraryOpen && <><button className="drawer-backdrop" onClick={() => setLibraryOpen(false)} aria-label="Close agent library" /><LibrarySearch onClose={() => setLibraryOpen(false)} /></>}<section className="hero"><div className="hero-copy"><p className="eyebrow fade-up">A WORLD OF SPECIALIZED INTELLIGENCE</p><h1 className="fade-up delay-1">Intelligence<br /><em>for work.</em></h1><p className="hero-sub fade-up delay-2">A growing network of specialized AI agents for marketing, finance, research, strategy, and beyond.</p><div className="hero-ctas fade-up delay-3"><a className="dark-button" href="#agents">Explore agents <ArrowUpRight size={15} /></a><a className="text-link" href="#workflows">Build a workflow <ChevronRight size={15} /></a></div></div><NetworkArt /><div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div></section><WelcomeRoom /><section id="categories" className="category-section"><div className="section-intro"><p className="eyebrow">SPECIALIZED INTELLIGENCE</p><h2>Every discipline.<br /><em>One workspace.</em></h2><p>Deep expertise, assembled around the problems you are actually trying to solve.</p></div><div className="category-list">{categories.map(([num, name, line]) => <a href="#agents" className="category-row" key={name}><span className="category-num">{num}</span><span className="category-name">{name}</span><span className="category-line">{line}</span><ArrowUpRight /></a>)}</div></section><section id="workflows" className="workflow-section"><div className="workflow-heading"><p className="eyebrow">COMPOUND INTELLIGENCE</p><h2>One agent can help.<br /><em>A team can do more.</em></h2></div><div className="workflow-track"><div className="workflow-prompt">Launch a new product<br />in India <span>↗</span></div>{['Market research', 'Positioning', 'Content system', 'Performance'].map((item, i) => <div className="workflow-node" key={item}><span>0{i + 1}</span><b>{item}</b><small>{['Research Agent', 'Strategy Agent', 'Content Agent', 'Analytics Agent'][i]}</small></div>)}</div></section><section id="agents" className="library-section"><div className="library-top"><div><p className="eyebrow">THE AGENT LIBRARY</p><h2>Find your<br /><em>specialist.</em></h2></div><div className="library-search"><Search size={15} /><input aria-label="Search agents" placeholder="Search specialists" value={query} onChange={e => setQuery(e.target.value)} /></div></div><div className="agent-grid">{visibleAgents.map((agent, i) => <button className={`agent-card ${i === activeAgent ? 'is-active' : ''}`} onClick={() => setActiveAgent(i)} key={agent.number}><div className="agent-meta"><span>{agent.category} / {agent.number}</span><span className={`card-dot ${agent.accent}`} /></div><div className="agent-card-body"><h3>{agent.name}</h3><p>{agent.description}</p></div><div className="agent-footer"><span className="status" />Available<ArrowUpRight size={15} /></div></button>)}</div></section><section id="about" className="final-section"><p className="eyebrow">SOCIAL NORM</p><h2>Find the opportunity.<br /><em>Build the strategy.</em></h2><a className="light-button" href="#agents">Enter the network <ArrowUpRight size={15} /></a><span className="final-index">SOCIAL NORM / 001</span></section><footer><span className="brand">social norm</span><span>by Parivestra Ventures</span><span>© 2026 Social Norm</span></footer></main>
}
