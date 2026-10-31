import { Connect, Tools } from "../components/Sidebar";

export default function About() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <article className="bg-ink p-6 leading-relaxed md:col-span-2">
        <h2>About Me</h2>
        <img
          src="/assets/images/CoolPicMe.jpg"
          alt="Antony Laroche"
          className="mb-4 w-48 rounded sm:float-left sm:mr-6"
        />
        <p className="mb-4">
          I have a Bachelor's degree in Chemical Engineering from the University of Florida and a Master's in
          Engineering Management from the George Washington University. I have spent the last 18 years working in the
          refining industry in a wide variety of roles ranging from process engineering to project development and
          refinery economics.
        </p>
        <p className="mb-4">
          I have a passion for finance and economics. As a result, I spend a lot of my spare time reading and analyzing
          the financial news of the day. I take pleasure in deciphering insights from the wealth of data available to us
          from news outlets and government agencies with the ultimate goal of converting those insights to personal
          investment strategies and general worldly advice.
        </p>
        <p>
          I am a Full Stack Web Developer who can turn flat content into engaging, smart, web applications. I use my
          skills to share wisdom, insights and knowledge with the world. I look forward to helping you share your
          expertise with others through fully deployed websites that engage readers through interactive content, data
          collection and analysis.
        </p>
      </article>
      <aside>
        <Connect />
        <Tools />
      </aside>
    </div>
  );
}
