export default function Home() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tighter">{`Hey, I'm Tiago`}</h1>
        <p>{`Front End Developer based in Porto, Portugal`}</p>
      </div>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
    </section>
  );
}
