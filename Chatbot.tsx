import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const botResponses: Record<string, string> = {
  'hi': 'Hey bhai! Kaise ho? Ecoflect Earthware mein swagat hai!',
  'hello': 'Hello hello! Sustainable fashion ki duniya mein aapka swagat hai!',
  'hey': 'Hey hey! Kya chal raha hai?',
  'help': 'Main tumhari help kar sakta hoon! Products, shipping, returns, ya kuch bhi puchh lo.',
  'products': 'Humare paas organic tees, recycled denim, hemp bags, Tencel dresses sab hai. Products page dekh lo!',
  'shipping': 'India mein 3-5 din, international 7-14 din. $100 se zyada pe free shipping!',
  'return': '30 days ka return window hai bhai. No tension, full refund ya exchange.',
  'price': 'Prices $38 se $145 tak hain. Har budget ke liye kuch na kuch hai.',
  'size': 'Har product page pe size chart hai. Chest, waist, length sab measurements diye hain.',
  'material': '100% organic ya recycled materials. Certified hai sab kuch.',
  'contact': 'Contact page pe form fill karo ya email karo hello@ecoflectearthware.com pe.',
  'discount': 'Newsletter subscribe karo, exclusive discounts milega!',
  'sustainable': 'Sustainable fashion matlab planet ko hurt kiye bina style karna. Organic, recycled, fair trade — sab included.',
  'eco': 'Eco-friendly materials se bana hai sab kuch. Carbon neutral bhi hain hum!',
  'about': 'Ecoflect Earthware ek sustainable fashion brand hai. 2019 se planet ko bachane mein lage hain.',
  'cart': 'Cart mein items add karne ke liye Products page pe jao aur "Add to Cart" dabao!',
  'payment': 'Credit card, UPI, PayPal — sab secure hai. Data kisi ke saath share nahi hota.',
  'track': 'Order track karne ke liye email mein tracking link milega. Real-time updates!',
  'offer': 'Abhi koi special offer nahi hai, par newsletter join karo pehle pata chalega!',
  'bye': 'Bye bhai! Phir milenge. Planet ko bachate raho!',
  'thank': 'Arre koi na bhai! Hum hamesha yahan hain. Kuch bhi chahiye toh puchh lena.',
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const key of Object.keys(botResponses)) {
    if (lower.includes(key)) return botResponses[key];
  }
  if (lower.length < 3) return 'Thoda aur detail mein batao bhai, samajh nahi aaya!';
  return 'Interesting sawaal hai! Iske liye contact page pe jao ya hello@ecoflectearthware.com pe email karo. Hum personally jawab denge!';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Yo! Main Ecoflect Earthware ka AI assistant hoon. Kuch bhi puchh lo — products, shipping, returns, sab bata dunga!', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input.trim(), sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botText = getBotResponse(userMsg.text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot' }]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-genz-pink text-white' : 'bg-genz-lime text-genz-black neon-glow'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-8rem)] glass rounded-3xl overflow-hidden flex flex-col border border-genz-border shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-genz-border bg-genz-dark/50">
              <div className="w-10 h-10 rounded-full bg-genz-lime/10 flex items-center justify-center">
                <Bot className="w-5 h-5 text-genz-lime" />
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm">EcoBot</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-genz-lime animate-pulse" />
                  <span className="text-xs text-genz-muted">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    msg.sender === 'bot' ? 'bg-genz-lime/10' : 'bg-genz-cyan/10'
                  }`}>
                    {msg.sender === 'bot' ? (
                      <Bot className="w-3.5 h-3.5 text-genz-lime" />
                    ) : (
                      <User className="w-3.5 h-3.5 text-genz-cyan" />
                    )}
                  </div>
                  <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'bot'
                      ? 'bg-genz-card text-genz-gray rounded-tl-sm'
                      : 'bg-genz-lime text-genz-black rounded-tr-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-genz-lime/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-genz-lime" />
                  </div>
                  <div className="bg-genz-card rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-genz-muted rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-genz-muted rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-genz-muted rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-genz-border bg-genz-dark/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type karo bhai..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-genz-card border border-genz-border text-white placeholder:text-genz-muted focus:outline-none focus:border-genz-lime/50 text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-genz-lime text-genz-black flex items-center justify-center hover:brightness-110 transition-all disabled:opacity-40 disabled:hover:brightness-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                {['Products', 'Shipping', 'Returns', 'Discount'].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => { setInput(quick.toLowerCase()); }}
                    className="text-xs px-2.5 py-1 rounded-lg bg-genz-card border border-genz-border text-genz-muted hover:text-genz-lime hover:border-genz-lime/30 transition-all"
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
