import { Message } from "./Message";

export const MessageList = () => {
	const messages = [
        {user: "krister", message:"Don't stop until you're proud."},
        {user: "lassi", message:"hello"},
        {user: "krister", message:"darkness my old friend"},
        {user: "lassi", message:"I must have seen you again"},
        {user: "krister", message:"absolute pleasure"},
        {user: "krister", message: "block w-full rounded-md bg-light-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},
  ] // Retrieve messages from database

	return (
		<ul class="space-y-12 grid grid-cols-1 w-full">
		  {messages && messages?.map((message) => <Message key={message.user + message.message} message={message} />)}
		</ul>
	)
}