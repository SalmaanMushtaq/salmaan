interface HeadingProp {
  heading: string;
}
function Profile({ heading }: HeadingProp) {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold leading-relaxed">{heading}</h1>
      <div className="mt-10 justify-center items-center gap-10">
        <div className="lightShadow border-0 p-3 px-5 bg-background rounded-2xl h-[100%] customShadow dark:text-black dark:bg-darkBackground ">
          <p className="text-wrap text-justify leading-relaxed bg-transparent">
            &emsp;Hello there! 👋 I&apos;m SALMAAN MUSHTAQ, a passionate web
            developer based in Kashmir, India. With a keen eye for design and a
            love for crafting digital experiences, I thrive on turning
            innovative ideas into reality through the power of code.
            <br />
            &emsp; My journey 🚀 in web development began with a curiosity about
            how the web works, and it has since evolved into a dynamic skill set
            that spans HTML5, CSS3, JavaScript, ReactJs, JQuery, Bootstrap, and
            Tailwindcss. <br /> &emsp;Ready to see what I can do? Explore my
            portfolio to witness the projects I&apos;ve brought to life, or feel
            free to reach out to discuss potential collaborations or
            opportunities. Let&apos;s create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
