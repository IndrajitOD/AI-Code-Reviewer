export default function About() {
  return (
    <div className="flex-1 bg-white rounded-2xl p-8 md:p-12 shadow-[0_2px_12px_rgba(0,0,0,0.05)] overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <h2>Hi I am 
          <span className="text-red-400 font-semibold text-2xl"> Indrajit Bhowmick</span>
        </h2>
        <h1 className="text-3xl font-bold text-slate-800 mt-7 mb-6">About this AI Code Reviewer</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Welcome to the AI Code Reviewer. This tool was built to help developers write cleaner, safer, and more efficient code by leveraging the power of advanced artificial intelligence.
          </p>
          
          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">How it works</h2>
          <p>
            We use Groq's blazing-fast inference engine running Meta's Llama 3.3 70B model. When you submit your code, it is analyzed in milliseconds for best practices, security vulnerabilities, performance bottlenecks, and general code quality.
          </p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Privacy First</h2>
          <p>
            Your code is sent securely to the AI model for the sole purpose of generating a review. We do not store your code snippets or use them for training data.
          </p>
          <p>Visit my github for more projects : 
            <span className="text-blue-400 italic underline">http://github.com/IndrajitOD</span>
          </p>
        </div>
      </div>
    </div>
  )
}
