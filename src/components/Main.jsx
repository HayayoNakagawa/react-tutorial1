import Gallery from "./Gallery";

export default function MainContent() {
  return (
    <main>
      <article>
        <div className="container">
            <h2 style={{ fontSize: "3em" }}>Welcome</h2> {/* h2を3emに設定 */}
            <p style={{ fontSize: "2em" }}>Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn more about birdwatching, whether you are a beginner looking to learn how to get into birding, or an expert wanting to share ideas, tips, and photos with other like-minded people.</p>
            <p style={{ fontSize: "2em" }}>So don't waste time! Get what you need, then turn off that computer and get out into the great outdoors!</p>
        </div>
        
      </article>
      <section>
        <div>
            <Gallery />
        </div>
      </section>
    </main>
  );
}
