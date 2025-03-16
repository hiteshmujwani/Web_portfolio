import { SpinningText } from "@/components/magicui/spinning-text";
import { MoveDown } from "lucide-react";

export function ScrollDown() {
  return (
    <div className="absolute bottom-10 right-10">
      <MoveDown className="h-10 w-10 animate-bounce" />
    </div>
  );
}
