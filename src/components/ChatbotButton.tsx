import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatbotButton = () => {
  return (
    <Button
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 z-50 animate-fade-in"
      onClick={() => {
        // Chatbot functionality will be added later
        console.log("Opening chatbot...");
      }}
    >
      <MessageCircle className="h-6 w-6 text-accent-foreground" />
    </Button>
  );
};

export default ChatbotButton;
