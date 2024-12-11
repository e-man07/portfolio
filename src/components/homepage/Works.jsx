import ibgroup from "/src/assets/images/image1.png";
import memento from "/src/assets/images/image2.png";
import acc from "/src/assets/images/image.png";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://xmailer.xyz"
            img={ibgroup}
            alt="X-Mailer"
            name="X-Mailer"
            type="Web3 | Full-Stack"
            year="2024"
            tools="NextJs • TailwindCSS • TypeScript"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://athena-warts.vercel.app"
            img={memento}
            alt="Harry Potter themed Website"
            name="Magical Quest"
            type="Web Design • Frontend Development"
            year="2024"
            tools="NextJs • TailwindCSS • TypeScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://solana-x-drip.vercel.app/"
            img={acc}
            alt="Solana"
            name="SolanaXDrip"
            type="Solana • Solana Faucet"
            year="2024"
            tools="React • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={daddy}
            alt="Weather-forecast"
            name="Weather-forecast"
            type="Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="qr generator"
            name="qr generator"
            type="Frontend Development"
            year="2022"
            tools="HTML • CSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
