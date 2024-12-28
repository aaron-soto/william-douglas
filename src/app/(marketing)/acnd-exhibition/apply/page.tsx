export default function Page() {
  return (
    <>
      <div className="py-6 px-4 text-white flex flex-col h-screen">
        <h1 className="text-3xl text-white">ACND Exhibition Booth Application</h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeWspL34bhZp6fYInCw4u_IDlVyoUy1_BobGVe-tUDegmztDQ/viewform?embedded=true"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="mt-6 h-full w-full"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
