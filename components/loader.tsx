const Loader = () => {
  return (
    <div className="py-4 flex justify-center items-center">
      <div className="flex justify-center items-center space-x-2">
        <div
          className="w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: ".3s" }}
        ></div>
        <div
          className="w-4 h-4 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: ".6s" }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
