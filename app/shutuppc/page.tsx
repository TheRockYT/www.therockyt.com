import Link from "next/link";

export const metadata = {
  title: "ShutUpPC - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>ShutUpPC</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>
        You need to have Java 8 or newer installed. Tested Java version:
        <Link href="/link/?to=https://www.azul.com/downloads/?version=java-8-lts&os=windows&architecture=x86-64-bit&package=jdk">
          Azul Zulu 8.64.0.19 x86
        </Link>
      </h3>
      <br />
      <br />
      <h2>What is ShutUpPC?</h2>
      <p>ShutUpPC is a tool to start computer remotely using Wake-on-LAN.</p>
      <br />
      <br />
      <h2>How to install ShutUpPC</h2>
      <p>1. Install Java</p>
      <p>2. Download the latest version</p>
      <p>3. Place it into an empty directory</p>
      <p>4. Run the program</p>
      <br />
      <br />
      <h2>How to use ShutUpPC</h2>
      <p>1. Make sure Wake-on-LAN is enabled on your target machine.</p>
      <p>
        2. Add a new computer by clicking <code>PC</code> - <code>Add</code> in
        the top left corner on the screen.
      </p>
      <p>3. Enter the IP address and the MAC address of your target machine.</p>
      <p>
        4. Start your pc using <code>PC</code> - <code>Start</code>
      </p>
      <br />
      <br />
      <h2>Support My Work</h2>
      <p>
        Hi, I'm a passionate developer who loves to create amazing projects
        using GitHub. GitHub is a platform where you can collaborate with other
        developers, share your code, and get feedback from the community. I hope
        you find my project useful and interesting. If you do, please consider
        supporting me by following me on GitHub and starring my project. This
        will help me to grow my audience, improve my skills, and motivate me to
        keep working on new ideas. <br />
        <br />
        Another way you can support me is by checking out the issues page and
        the pull request page of my project. There you can see what problems I'm
        trying to solve, what features I'm working on, and what suggestions I've
        received from other users. You can also contribute to my project by
        reporting bugs, requesting features, giving feedback, or submitting your
        own code. I welcome any kind of contribution, no matter how big or
        small. Your input is valuable and helps me to improve my project and
        make it more useful for everyone. To check out the issues page and the
        pull request page, just click on the links below and explore the
        different topics. If you want to contribute, you can create a new issue
        or a new pull request by following the instructions on GitHub.
        <br />
        <br />
        Don't worry if you're not familiar with GitHub or coding, I'll guide you
        through the process and answer any questions you may have. <br />
        <br />
        Thank you again for your support and interest in my project. I hope you
        enjoy using it and learning from it.
      </p>
      <br />
      <p>
        <Link href="/link/?to=https://github.com/TheRockYT">
          GitHub Profile (TheRockYT)
        </Link>
      </p>
      <br />
      <p>
        <Link href="/link/?to=https://github.com/TheRockYT/ShutUpPC">
          GitHub Project/Repository (TheRockYT/ShutUpPC)
        </Link>
      </p>
      <br />
      <p>
        <Link href="/link/?to=https://github.com/TheRockYT/ShutUpPC/issues">
          GitHub Issues (TheRockYT/ShutUpPC/Issues)
        </Link>
      </p>
      <br />
      <p>
        <Link href="/link/?to=https://github.com/TheRockYT/ShutUpPC/pulls">
          GitHub Pull requests (TheRockYT/ShutUpPC/Pull requests)
        </Link>
      </p>
      <br />
      <br />
      <h2>Download</h2>
      <br />
      <p>
        ShutUpPC v1.0.3:{" "}
        <a
          href="https://api.therockyt.com/shutuppc/download/ShutUpPC-v1.0.3.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <p>
        ShutUpPC v1.0.2:{" "}
        <a
          href="https://api.therockyt.com/shutuppc/download/ShutUpPC-v1.0.2.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <p>
        ShutUpPC v1.0.1:{" "}
        <a
          href="https://api.therockyt.com/shutuppc/download/ShutUpPC-v1.0.1.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <br />
      <h2>Do you have any questions?</h2>
      <p>
        Please contact{" "}
        <Link href="mailto:mail@therockyt.com">mail@therockyt.com</Link>.
      </p>
    </div>
  );
}
