import showdown from 'showdown';
const Message = ({ message, isUser }) => {
  let containerClass = "bg-gray-100";
  if (isUser) {
    containerClass = "";
  }

  if (Array.isArray(message)) {
    message = message.join("");
  }

  if (!message || message === "") {
    return null;
  }

  const converter = new showdown.Converter();  
  const html = converter.makeHtml(message);

  return (
    <div
      className="flex gap-x-4 mb-8"
    >
      {isUser ? (
        <span className="text-xl sm:text-2xl pt-4" title="user">
          🥸
        </span>
      ) : (
        <span className="text-xl sm:text-2xl pt-4" title="AI">
          🦙
        </span>
      )}
      <div className={`${containerClass} flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1 p-5 rounded-md`} dangerouslySetInnerHTML={{ __html: html }}></div>

    </div>
  );
};

export default Message;
