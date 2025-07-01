const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center flex flex-col items-center">
        <div className="w-auto h-auto mb-6 flex items-center justify-center">
          <img className="w-44 h-auto" src="/Robo.png" alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;