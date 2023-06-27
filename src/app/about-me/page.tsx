import Image from "next/image";
import clsx from "clsx";
import styles from "./page.module.css";

export default function AboutMe() {
  return (
    <main className={clsx("prose-sm", styles.content)}>
      <div className={clsx("m-auto", styles.about)}>
        <div className={clsx(styles.colors, styles.programming)}>
          <h1>Programming Languages</h1>
          <h4>Proficient:</h4>
          <ul>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>C++</li>
            <li>Java</li>
            <li>Racket</li>
            <li>Python</li>
          </ul>
          <h4>In Progress:</h4>
          <ul>
            <li>LaTeX</li>
            <li>Android</li>
          </ul>
        </div>

        <div className={clsx(styles.colors, styles.apps)}>
          <h1>Apps that I`&#39;`ve worked on</h1>
          <div className={styles.appLinks}>
            <Image
              alt="save.ca icon"
              src="/saveca-icon.jpeg"
              width={80}
              height={80}
            />
            <a
              className={styles.downloadBadge}
              href="https://play.google.com/store/apps/details?id=ca.save.m"
            >
              <Image
                alt="Android app on Google Play"
                src="/badge_googleplay.png"
                width={229}
                height={80}
              />
            </a>
            <a
              className={styles.downloadBadge}
              href="https://itunes.apple.com/ca/app/save.ca-canadas-destination/id720267098?mt=8"
            >
              <Image
                alt="Available on the App Store"
                src="/badge_appstore.png"
                width={229}
                height={80}
              />
            </a>
          </div>
          <div>
            <p>
              <b>Save.ca</b> is a mobile app project that I developed and
              maintained while working at Metroland Media Group Ltd, from
              September 2014 - December 2014. While working there, a fellow
              co-op and I single-handedly increased the iOS app`&#39;`s rating
              from 1 star to 4 stars, and the Android app`&#39;`s rating from 3
              stars to 4 stars.
            </p>
            <p>
              At the time of my co-op placement, the logic code for these two
              apps was written in Javascript and executed through the Javascript
              engine on Android and iOS. This helped the project to have plenty
              of code reuse, but as a downside, the apps were single-threaded.
            </p>
          </div>
          <hr />
          <div className={styles.clearfix}>
            <Image
              className={styles.screenshot1}
              alt="tic tac toe screenshot"
              src="/tictactoe.png"
              width={192}
              height={320}
            />
            <p>
              <b>TicTacToe</b> is a Native Android app that I developed for a
              coding challenge. This app has two modes: PVP and PVE. PVP allows
              two players to face against each other, while PVE is playing
              against the AI.
            </p>
            <p>
              The AI uses the Minimax algorithm to determine its next moves. I
              did not write the Minimax code myself but used a modified version
              of the code found
              <a
                href="https://www3.ntu.edu.sg/home/ehchua/programming/java/JavaGame_TicTacToe_AI.html"
                target="_blank"
              >
                here
              </a>
              . The project was completed within two days.
            </p>
            <p>
              If you would like to see the source code for this app, please
              contact me.
            </p>
          </div>
          <hr />
          <div className={styles.clearfix}>
            <Image
              className={styles.screenshot2}
              alt="game of life screenshot"
              src="/gameoflife.png"
              width={192}
              height={320}
            />
            <p>
              The <b>Game of Game of Life</b>, based on Conway`&#39;`s Game of
              life, is a Native Android app written in collaboration with my
              roommates during university. Each of us worked on a different game
              mode of the app. I wrote the multiplayer mode, where two players
              compete against each other by trying to get as many cells as they
              can inside their territory on the grid. This part of the game uses
              the canvas from default graphics library of Android to draw the
              grid.
            </p>
            <p>
              This app was and still is incomplete, so it is likely that it will
              never be published to the Google Play Store at this point.
            </p>
          </div>
        </div>

        <div className={styles.colors}></div>
        <div className={styles.colors}></div>
        <div className={styles.colors}>
          <p className={styles.resumeLink}>
            Click <a href="/ashwu_resume.pdf">here</a> to download my resume!
          </p>
        </div>
      </div>
    </main>
  );
}
