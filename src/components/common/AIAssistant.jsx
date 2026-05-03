import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Priyanshu's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  const genAI = React.useMemo(() => new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY || ''), []);
  const model = React.useMemo(() => genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: "You are a professional AI assistant representing Priyanshu Manke, a 3rd-year Software Engineering student at Ajeenkya D Y Patil School of Engineering, Pune. Priyanshu specializes in the MERN stack (MongoDB, Express.js, React.js, Node.js) and React Native. He is also passionate about UI/UX design, particularly for children, as demonstrated in his SikshaAI project. Answer questions about his skills, projects (like Snookhead and Adventure Website), and availability professionally and enthusiastically. Keep responses concise and focus on his technical strengths. If asked something unrelated to Priyanshu's career, politely redirect the conversation back to his portfolio."
  }), [genAI]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `System Instruction: You are a professional AI assistant representing Priyanshu Manke. Answer questions about his MERN stack skills and projects. Redirect unrelated queries to his portfolio.\n\nUser: ${input}` }] }]
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || `HTTP ${response.status}`);

      const text = data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting. Please try again in a moment!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-white text-black rounded-full shadow-lg focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-black rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-800"
          >
            {/* Header */}
            <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-neutral-800 rounded-lg">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Priyanshu AI</h3>
                  <p className="text-xs text-slate-400">Online | Portfolio Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-neutral-800 text-white rounded-tr-none' 
                      : 'bg-neutral-900 text-neutral-200 rounded-tl-none border border-neutral-800'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl rounded-tl-none flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-white" />
                    <span className="text-xs text-neutral-400 italic">Priyanshu AI is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about my projects..."
                  className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-neutral-700 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;
