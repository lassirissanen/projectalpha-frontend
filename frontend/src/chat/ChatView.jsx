import { MessageList } from "./MessageList";
import { SendMessage } from "./SendMessage";

function ChatView() {
    return (
        <div class="flex flex-col justify-center items-center content-start w-full">
            <header class="p-16">
                <h1 class="text-3xl">chat view</h1>
            </header>
            <MessageList />
        </div>
      );
}

export default ChatView;