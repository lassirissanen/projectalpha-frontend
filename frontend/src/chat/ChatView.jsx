import { MessageList } from "./MessageList";
import { SendMessage } from "./SendMessage";
import { useState } from "react";
import './MessageList.css';

function ChatView() {
    const endpoints = [
        {
            value: "classify-1",
            name: "tensorflow"
        },
        {
            value: "classify-2",
            name: "mixed"
        },
        {
            value: "classify-3",
            name: "OpenAI"
        },
    ]
    const [endpoint, setEndpoint] = useState("classify-1")

    const handleSelectEndpoint = (event) => {
        setEndpoint(event.target.value);
        console.log(endpoint);
    }

    return (
        <div class="flex flex-col justify-center items-center content-start w-full pb-16">
            <header class="p-16">
                <h1 class="text-3xl">chat view</h1>
                <select onInput={handleSelectEndpoint} id="endpoint-select" name="endpoints">
                    {endpoints.map(e => <option value={e.value} key={e.value}>{e.name}</option>)}
                </select>
            </header>
            <MessageList endpoint={endpoint} />
        </div>
    );
}

export default ChatView;