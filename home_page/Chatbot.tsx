'use client'

import React, { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "👋 Hi! I'm Giftson's AI assistant. Ask me anything about his skills, education, or experience!" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (open) {
      scrollToBottom()
    }
  }, [messages, open, isLoading])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/API/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages.map(m => ({ role: m.role, content: m.content })), { role: 'user', content: userMessage }]
        })
      })

      if (!response.ok) {
        throw new Error('Failed to fetch response')
      }

      const data = await response.json()
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops! I encountered an error. Please try again later." }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="chatbot-widget">
      {/* Chat panel */}
      {open && (
        <div className="chatbot-window animate-fadeIn">
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.08), rgba(129,140,248,0.08))' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
              >
                G
              </div>
              <div>
                <div className="text-xs font-semibold text-[var(--text-primary)]">Giftson&apos;s Assistant</div>
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors p-1 rounded"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-grow p-4 flex flex-col gap-3 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] text-sm px-3.5 py-2.5 leading-relaxed ${
                  msg.role === 'assistant' 
                    ? 'self-start rounded-2xl rounded-tl-sm' 
                    : 'self-end rounded-2xl rounded-tr-sm'
                }`}
                style={
                  msg.role === 'assistant'
                    ? {
                        background: 'var(--bg-muted)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                      }
                    : {
                        background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                        color: '#0d1117', // dark text for contrast
                      }
                }
              >
                {msg.content}
              </div>
            ))}
            
            {isLoading && (
              <div
                className="self-start max-w-[85%] text-sm px-3.5 py-2.5 rounded-2xl rounded-tl-sm leading-relaxed flex items-center gap-1"
                style={{
                  background: 'var(--bg-muted)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex-shrink-0 flex items-center gap-2 px-3 py-3 border-t border-[var(--border)]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder="Ask something…"
              className="flex-grow text-sm bg-[var(--bg-muted)] border border-[var(--border)] rounded-lg px-3 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent-1)] transition-colors disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d1117" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="w-13 h-13 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          width: '52px',
          height: '52px',
          background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
          boxShadow: '0 4px 20px rgba(56,189,248,0.35)',
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d1117" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0d1117" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </div>
  )
}
