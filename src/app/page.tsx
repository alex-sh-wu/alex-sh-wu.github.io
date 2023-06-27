import Image from "next/image";
import clsx from "clsx";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={clsx("prose-sm m-auto", styles.narrow)}>
      <br />
      <Image
        src="/nextjs-github-pages/profile_picture.jpg"
        width={200}
        height={200}
        alt="Picture of the author"
        className="rounded-full m-auto"
      />
      <h1 className="text-center mt-3">Welcome to my website!</h1>
      <p>
        I am Alex Sin Hang Wu, an alumni from the University of Waterloo. I
        graduated with a Bachelors of Computer Science with a Business option. I
        have a passion for coding and I like to tackle side projects in my spare
        time when I am inspired - <b>this website</b> is one of them!
      </p>
    </main>
  );
}
