import { useState } from "react";
import { MessageCircle, Send, X, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you with any questions about our construction services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const botResponses = {
    default: "Thanks for your message! Our team specializes in residential and commercial construction. Would you like to know more about our services or get a quote?",
    services: "We offer residential construction, commercial building, renovations, and remodeling. Each project includes free consultation and detailed planning.",
    quote: "I'd be happy to help you get a quote! For accurate pricing, our team will need to assess your project. Would you like to schedule a free consultation?",
    contact: "You can reach us at (555) 123-4567 or email info@buildwell.com. We're available Monday-Friday 8AM-6PM for consultations and estimates.",
    residential: "Our residential services include new home construction, room additions, kitchen and bathroom remodeling, and foundation work. All projects come with our quality guarantee.",
    commercial: "We handle office buildings, retail spaces, warehouses, and industrial facilities. Our commercial team manages everything from permits to final inspection.",
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("service") || message.includes("what do you do")) {
      return botResponses.services;
    } else if (message.includes("quote") || message.includes("price") || message.includes("cost")) {
      return botResponses.quote;
    } else if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
      return botResponses.contact;
    } else if (message.includes("residential") || message.includes("home") || message.includes("house")) {
      return botResponses.residential;
    } else if (message.includes("commercial") || message.includes("business") || message.includes("office")) {
      return botResponses.commercial;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="cta"
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl animate-bounce-gentle"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 w-80 ${isMinimized ? 'h-14' : 'h-96'} shadow-2xl border-primary/20 transition-all duration-300`}>
      <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-hero text-primary-foreground rounded-t-lg">
        <CardTitle className="text-lg font-semibold">BuildWell Assistant</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 text-primary-foreground hover:bg-white/20"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-primary-foreground hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-80">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" variant="cta">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default Chatbot;