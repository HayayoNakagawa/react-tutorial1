
import WelcomeText from "./WelcomeText";
import ImageSidebar from "./ImageSidebar";

export default function MainContent() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <WelcomeText />
        </div>
      </section>
      <aside>
        <ImageSidebar />
      </aside>
    </main>
  );
}
