import Head from "next/head";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import GoBack from "../../components/GoBack";

export default function GithubRepos() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Github Repos</title>
        <meta name="description" content="All piscine related material for the
        42/42 SV program. PDFs, coding norms, and more." />
        <link rel="canonical" href="https://42sv.info/Sources/Github_repos" />
      </Head>

      <section className="block">
        <h1>Github repos</h1>

        <p>
          This is just a dump of random links that I had saved while I was
          looking around for 42 github repositories. Most are similar, others
          not listed here could be more useful for the current curriculum. While
          most of the projects are the same in general, there might be some
          minor differences and the overall order might be different. The PDFs
          link should have the coding norms and other rules as well as the
          actual Piscine PDFs that are given to you on each day.
        </p>
      </section>

      <section className="block">
        <h3>Piscine materials</h3>

        <div className="btn-link-container">
          <a
            href=" https://github.com/gcamerli/bootcamp_c/tree/master/documents"
            target="blank"
            rel="noopener noreferrer"
          >
            <Button variant="light" className="btn-next">
              Piscine PDFs
            </Button>
          </a>

          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/Manmeet2018/42-Piscine-Jan-2019"
          >
            <Button variant="light" className="btn-next">
              Manmeet2018 Piscine
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/jraleman/42_Piscine-C"
          >
            <Button variant="light" className="btn-next">
              Jraleman Piscine
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/MrRobb/42_piscine"
          >
            <Button variant="light" className="btn-next">
              MrRobb Piscine
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/Sbk3824/42-Piscine"
          >
            <Button variant="light" className="btn-next">
              Sbk3824 Piscine
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/akharrou/42-Piscine-C/tree/ed366f0b21ed48f55ed7e9ddb9e0e8a841f89b0e"
          >
            <Button variant="light" className="btn-next">
              Akharrou Piscine
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/anononamemo/42_Piscine_Reloaded"
          >
            <Button variant="light" className="btn-next">
              Anononamemo Piscine
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/gcamerli/examshell"
          >
            <Button variant="light" className="btn-next">
              Piscine examshell
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/Sbk3824/42-Piscine/wiki/FInal-Exam-tips"
          >
            <Button variant="light" className="btn-next">
              Piscine final tips
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/gcamerli/42norme"
          >
            <Button variant="light" className="btn-next">
              42 Norminette
            </Button>
          </a>
          <a
            target="blank"
            rel="noopener noreferrer"
            href="https://github.com/mirror12k/42us-stupidity"
          >
            <Button variant="light" className="btn-next">
              42 Stupidity (Moulinette)
            </Button>
          </a>
        </div>
      </section>

      <section className="block">
        <GoBack name={"Sources"} />
      </section>

      <span className="buffy-the-buffer"></span>
    </>
  );
}
