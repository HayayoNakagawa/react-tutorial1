import Image from "./Image";

export default function WelcomeText() {
    return (
      <div className="columns is-vcentered is-multiline">
        <div className="column is-12">
          <h2>Favourite photos</h2>
          <section>
            <Image />
          </section>
          
        </div>
      </div>
    );
  }