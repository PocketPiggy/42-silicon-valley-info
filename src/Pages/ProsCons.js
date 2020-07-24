import React, { Component } from "react";
import ScrollingBar from "../Components/ScrollingBar";

import "../Styles/ProsCons.css";

class ProsCons extends Component {
  render() {
    const scroll = [
      { id: "top", title: "Pros & Cons", key: "to" },
      { id: "42", title: "42 SV", key: "42" },
      { id: "college", title: "College/Uni", key: "co" },
      { id: "bootcamp", title: "Bootcamps", key: "bo" },
      { id: "self", title: "Self taught", key: "se" },
    ];
    return (
      <div>
        <span id="top"> </span>
        <h1> ProsCons </h1>
        <p className="info-stuff">
          Approaching anything in life, it's important to try to look at it
          without bias and as objective as possible. I've tried my best when
          comparing each route from first starting, to an end goal: a job. When
          going through all options, I weighed:{" "}
          <span className="boldest"> Risk, Time, Money </span> and{" "}
          <span className="boldest">Track record.</span>
        </p>
        <p className="info-stuff">
          Depending on your background, some choices and paths might not be
          feasible compared to others. So try to take this with grain of salt
          and see how each option will apply to you personally.
        </p>
        <br /> <br />
        <span id="42">
          <h4> 42 Silicon Valley </h4>
          <p className="info-stuff">
            The 42 program is based of an older program called Epitech but with
            42, there is no degree or certification at all. This is inherently
            risky, not only because no degree but especially since a good chunk
            of the curriculum is in C where most jobs would require a degree
            that use C like embedded, compared to something like web
            development. It's always possible to get those jobs without a degree
            but that's the exception to the rule, not the rule itself.
          </p>
          <p className="info-stuff">
            Talking to many past and current students, the average time a 42
            cadet spends at 42 is around 1 to 1 1/2 years. Some stay longer and
            some stay shorter, but that's about the average that I've found.
            Shorter than a 4 year degree but much longer than most bootcamps.
          </p>
          <p className="info-stuff">
            One of the defining positives about 42 Silicon Valley is that it's
            completely free. No tuition, no income sharing agreements, no hidden
            contracts or stipulations. They also have free dorms that can
            support about 600-700 students at a time and about 200-300
            pisceners. 42 SV has recently revamped how they do requirements for
            dorms. Now, the only requirement for dorms is that you must do
            assignments and exams that give credit to days. Watch the townhall
            meeting videos for more information.
          </p>
          <p className="info-stuff">
            42 is very hit and miss. It's a combination of the "Norm" coding
            style and convention teaching bad habits, 42 SV accepts pretty much
            anyone compared to 42 Paris and many people leave before finishing
            the whole program. Since the program relies on peer to peer teaching
            and self teaching, it might be hard for the former later on if no
            senior students are around. (Another reason why 42 starfleet was
            discontinued.)
          </p>
          <p className="info-stuff">
            The people who do succede will have most likely succeded regardless
            if they went to 42 or not. Some 42 cadets also already have college
            degrees and few have STEM/CS adjacent degrees.
          </p>
          <p className="info-stuff">
            <span className="summary"> Summary: </span> If you don't have much
            money and you're looking for a place to learn how to code while not
            minding spending 6 to 18 months of your time towards learning and
            self teaching, 42 Silicon Valley might be for you. If you can self
            teach well, 42 SV can help with it's resources in the labs and it's
            curriculum. It's also within the bay area, so which is more
            expensive with higher competition, but if you can land a job then it
            would be worth it.
          </p>
        </span>
        <span id="college">
          <h4> College/Uni </h4>
          <p className="info-stuff">
            This is the more traditional, safer route. One can never go wrong
            going to college/university to learn how to program. It's a very low
            risk option depending on where you live as each country has
            different tuition costs. Some old fashioned companies will never
            higher someone without a degree, so that's important to keep in
            mind. A degree will also always open doors.
          </p>
          <p className="info-stuff">
            Depending on your situation, credits required to graduate can vary
            from person to person. On average, it takes about 4 years for a
            bachelors degree. Though, it's important to keep in mind that many
            CS students will get internships while their in college, adding to
            their work experience.
          </p>
          <p className="info-stuff">
            This is assuming you're American, it's very expensive. Most tuition
            for a 4 year degree is in the tens of thousands of dollars. It is
            possible to go to community college first and then transfer after a
            year or two, so keep that in mind to help lower costs.
          </p>
          <p className="info-stuff">
            <span className="summary"> Summary: </span> If you have the
            resources or don't mind the debt and are risk averse, college is
            always the best option. Assuming you are looking to do a Computer
            Science degree, it will give you well rounded foundational
            knowledge, theory and math skills to do anything in tech for the
            most part.
          </p>
        </span>
        <span id="bootcamp">
          <h4> Bootcamps </h4>
          <p className="info-stuff">
            Bootcamps are extremly risky for multiple reasons. There isn't
            really a set standard that they are all held accountable to, they
            all only teach specific web development stacks and many of them lie
            or rather fix their numbers on employment rate such as hiring back
            recent bootcamp grads as TAs or instructors. You are also not
            guranteed a job after finishing. I would suggest looking extensively
            and doing lots of research before deciding on one. For more
            information,{" "}
            <a
              href="https://cirr.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              this link here{" "}
            </a>{" "}
            might be of some help.
          </p>
          <p className="info-stuff">
            Most bootcamps hover around the 12 week mark in length with some
            going much longer in length to even a full 6-12 months for part time
            attendance. In general, this is probably the fastest way to get
            employed assuming you are a fast learner, already have a previous 4
            year degree in something else/a good CV and are a hard worker.
          </p>
          <p className="info-stuff">
            All bootcamps require some sort of compensation, regardless if it's
            a loan, income sharing agreement or upfront costs. This can be
            pretty steep and depending on the economy and your own situation, it
            can be difficult to afford and/or pay back. One thing to keep in
            mind for the income-sharing agreements, is that most have a
            stipulation that if you do not find employment in tech within a
            certain amount of time or you don't make enough money, you won't
            have to pay them back. More research is needed depending on each
            individual contract.
          </p>
          <p className="info-stuff">
            <span className="summary">Summary: </span> If you don't mind an
            upfront cost for a career switch into programming and find a decent
            bootcamp then this might be for you.
          </p>
        </span>
        <br /> <br />
        <span id="self" style={{ marginBottom: "10vh" }}>
          <h4> Self taught </h4>
          <p className="info-stuff">
            Self teaching is possible but hard for most people. It requires a
            certain amount of dedication and perserverance due to the lack of
            structure compared to the other routes. You have to work hard and be
            diligent enough to not give up. Depending on your goal, some free
            online resources can be used with good results.
          </p>
          <p className="info-stuff">
            As an example, if web development is your goal, consider doing free
            programs such as:
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              The Odin Project
            </a>{" "}
            or{" "}
            <a
              href="https://www.freecodecamp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freecodecamp.
            </a>
          </p>
        </span>
        <ScrollingBar data={scroll} />
      </div>
    );
  }
}

export default ProsCons;
