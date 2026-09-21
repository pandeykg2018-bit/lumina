'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronRight, Command, Menu, Network, Search, Sparkles, X } from 'lucide-react'

const agents = [
  { number: '014', category: 'MARKETING', name: 'Performance Marketing Strategist', description: 'Build acquisition strategies from market and campaign data.', accent: 'teal' },
  { number: '027', category: 'FINANCE', name: 'Financial Analyst', description: 'Turn financial statements into decision-ready insight.', accent: 'green' },
  { number: '041', category: 'RESEARCH', name: 'Market Intelligence', description: 'Understand competitors, markets, and opportunities.', accent: 'blue' },
  { number: '052', category: 'OPERATIONS', name: 'Process Architect', description: 'Design repeatable systems for complex work.', accent: 'slate' },
]

const categories = [
  ['01', 'Marketing', 'Turn attention into growth.', 'teal'],
  ['02', 'Finance', 'Make numbers useful.', 'green'],
  ['03', 'Research', 'Find what others miss.', 'blue'],
  ['04', 'Technology', 'Build with precision.', 'violet'],
]

function Nav() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="nav-wrap"><a className="brand" href="#top" aria-label="arc home"><span className="brand-mark"><span /></span>arc</a><nav className="desktop-nav" aria-label="Main navigation"><a href="#agents">Agents</a><a href="#workflows">Workflows</a><a href="#categories">Categories</a><a href="#about">About</a></nav><div className="nav-actions"><a href="#about" className="signin">Sign in</a><a href="#agents" className="dark-button">Get started <ArrowUpRight size={15} /></a><button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button></div></header>
    {open && <div className="mobile-overlay"><button onClick={() => setOpen(false)} className="close-menu" aria-label="Close menu"><X /></button><div className="mobile-links"><a href="#agents" onClick={() => setOpen(false)}>Agents <span>01</span></a><a href="#workflows" onClick={() => setOpen(false)}>Workflows <span>02</span></a><a href="#categories" onClick={() => setOpen(false)}>Categories <span>03</span></a><a href="#about" onClick={() => setOpen(false)}>About <span>04</span></a></div></div>}
  </>
}

function NetworkArt() {
  return <div className="network-art" aria-label="Illustration of connected specialist agents"><div className="network-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="connector c1" /><div className="connector c2" /><div className="connector c3" /><div className="node node-main"><Network size={17} /><span>orchestrator</span></div><div className="node node-a"><span>research</span></div><div className="node node-b"><span>strategy</span></div><div className="node node-c"><span>execution</span></div><div className="network-caption">01 — 100+ SPECIALISTS<br /><span>Connected intelligence</span></div></div>
}

function Prompt() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  return <div className="prompt-shell"><div className="prompt-label"><span className="live-dot" />Tell us what you need to accomplish.</div><div className="prompt-row"><input aria-label="What do you need to accomplish?" value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) setSubmitted(true) }} placeholder="Find growth opportunities for my business..." /><button aria-label="Submit request" onClick={() => setSubmitted(true)}><ArrowUpRight /></button></div>{submitted && <div className="prompt-result"><span className="result-pulse" />Mapping request across <b>Research</b>, <b>Marketing</b>, and <b>Strategy</b> agents <span className="result-arrow">→</span></div>}</div>
}

export default function AgentPlatform() {
  const [activeAgent, setActiveAgent] = useState(0)
  return <main id="top"><Nav /><section className="hero"><div className="hero-copy"><p className="eyebrow fade-up">THE OPERATING SYSTEM FOR SPECIALIZED INTELLIGENCE</p><h1 className="fade-up delay-1">Intelligence<br /><em>for work.</em></h1><p className="hero-sub fade-up delay-2">100+ specialized AI agents for marketing, finance, research, operations, and beyond.</p><div className="hero-ctas fade-up delay-3"><a className="dark-button" href="#agents">Explore agents <ArrowUpRight size={15} /></a><a className="text-link" href="#workflows">Build a workflow <ChevronRight size={15} /></a></div></div><NetworkArt /><div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div></section><section className="prompt-section"><div className="section-kicker">A DIFFERENT KIND OF INTERFACE <span>—</span></div><h2>Start with the work.<br /><em>We&apos;ll find the specialists.</em></h2><Prompt /></section><section id="categories" className="category-section"><div className="section-intro"><p className="eyebrow">SPECIALIZED INTELLIGENCE</p><h2>Every discipline.<br /><em>One workspace.</em></h2><p>Deep expertise, assembled around the problems you are actually trying to solve.</p></div><div className="category-list">{categories.map(([num, name, line, tone]) => <a href="#agents" className={`category-row ${tone}`} key={name}><span className="category-num">{num}</span><span className="category-name">{name}</span><span className="category-line">{line}</span><ArrowUpRight /></a>)}</div></section><section id="workflows" className="workflow-section"><div className="workflow-heading"><p className="eyebrow">COMPOUND INTELLIGENCE</p><h2>Agents don&apos;t<br /><em>work alone.</em></h2></div><div className="workflow-track"><div className="workflow-prompt">Launch a new product<br />in India <span>↗</span></div>{['Market research', 'Positioning', 'Content system', 'Performance'].map((item, i) => <div className={`workflow-node ${i === 2 ? 'selected' : ''}`} key={item}><span>0{i + 1}</span><b>{item}</b><small>{i === 0 ? 'Research agent' : i === 1 ? 'Strategy agent' : i === 2 ? 'Creative agent' : 'Marketing agent'}</small></div>)}</div></section><section id="agents" className="library-section"><div className="library-top"><div><p className="eyebrow">THE LIBRARY / 100+ AGENTS</p><h2>Meet the<br /><em>specialists.</em></h2></div><a className="text-link" href="#agents">View all agents <ArrowUpRight size={15} /></a></div><div className="agent-grid">{agents.map((agent, i) => <button className={`agent-card ${activeAgent === i ? 'is-active' : ''}`} key={agent.number} onMouseEnter={() => setActiveAgent(i)} onFocus={() => setActiveAgent(i)}><div className="agent-meta"><span>{agent.category}</span><span>{agent.number}</span></div><div className="agent-card-body"><h3>{agent.name}</h3><p>{agent.description}</p></div><div className="agent-footer"><span className={`status ${agent.accent}`} /> <span>Ready to run</span><ArrowUpRight /></div></button>)}</div></section><section id="about" className="final-section"><p className="eyebrow">THE NEXT LAYER OF WORK</p><h2>Make the work<br /><em>unmistakable.</em></h2><a className="dark-button" href="#top">Get started <ArrowUpRight size={15} /></a><div className="final-index">ARC / 2026</div></section><footer><a className="brand" href="#top"><span className="brand-mark"><span /></span>arc</a><span>Specialized intelligence for real work.</span><span>© 2026 ARC SYSTEMS</span></footer></main>
}
