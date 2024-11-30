export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">ETTALBI Kabira</h1>
          <p className="text-xl text-gray-400">Software Engineer</p>
        </div>

        <div className="flex mt-4 md:mt-0 space-x-6">
          <a
            href="https://github.com/KabiraEttalbi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.88 10.94.58.1.79-.25.79-.56v-2.2c-3.2.7-3.86-1.56-3.86-1.56-.52-1.3-1.27-1.64-1.27-1.64-1.04-.7.08-.68.08-.68 1.14.08 1.73 1.17 1.73 1.17 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.25-1.28-5.25-5.73 0-1.27.45-2.3 1.17-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.17.92-.26 1.92-.39 2.91-.39s1.99.13 2.91.39c2.19-1.48 3.15-1.17 3.15-1.17.62 1.6.23 2.78.11 3.07.72.8 1.17 1.83 1.17 3.1 0 4.45-2.7 5.44-5.27 5.73.42.36.79 1.06.79 2.14v3.17c0 .31.21.66.8.55C20.71 21.4 24 17.1 24 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/kabiraettalbi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19.9 3H4.1C3.5 3 3 3.5 3 4.1v15.8c0 .6.5 1.1 1.1 1.1h15.8c.6 0 1.1-.5 1.1-1.1V4.1c0-.6-.5-1.1-1.1-1.1zM8.3 19.5H5.8V9.5h2.5v10zm-1.2-11.4c-.8 0-1.3-.5-1.3-1.3 0-.8.5-1.3 1.3-1.3s1.3.5 1.3 1.3c0 .8-.5 1.3-1.3 1.3zm12.4 11.4h-2.5v-5.4c0-1.3-.5-1.8-1.4-1.8-.8 0-1.2.6-1.4 1.1v6.1h-2.5v-10h2.4v1.3c.4-.7 1.2-1.5 2.6-1.5 1.8 0 3.2 1.1 3.2 3.6v6.6z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
