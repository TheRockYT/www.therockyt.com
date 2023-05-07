import Link from "next/link";

export const metadata = {
  title: "FSpawn - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>FSpawn</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 8 or newer installed.</h3>
      <br />
      <br />
      <h2>What is FSpawn?</h2>
      <p>
        FSpawn is a simple system for spigot servers to set spawns and warps.
      </p>
      <br />
      <br />
      <h2>Features</h2>
      <p>- First-Join-Teleport</p>
      <p>- Multiple spawns</p>
      <p>- Warps</p>
      <br />
      <br />
      <h2>TeleportMode</h2>
      <p>- 0: FirstJoin</p>
      <p>- 1: Always</p>
      <p>- 2: Never</p>
      <br />
      <br />
      <h2>Installation</h2>
      <p>- Download the latest version</p>
      <p>- Move the file into the plugins folder of the spigot server</p>
      <p>- Restart the server</p>
      <br />
      <br />
      <h2>Commands</h2>
      <h3>Teleport you to a spawn</h3>
      <p>
        Command: <code>spawn (name)</code>
      </p>
      <p>
        Permission: <code>-</code>
      </p>
      <h3>Set a spawn</h3>
      <p>
        Command: <code>setspawn [name/"default"] (permission)</code>
      </p>
      <p>
        Permission: <code>FSpawn.SET</code>
      </p>
      <h3>Delete a spawn</h3>
      <p>
        Command: <code>deletespawn [name/"default"]</code>
      </p>
      <p>
        Permission: <code>FSpawn.DELETE</code>
      </p>
      <h3>Reload the plugin</h3>
      <p>
        Command: <code>fspawn reload</code>
      </p>
      <p>
        Permission: <code>FSpawn.RELOAD</code>
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
        <Link href="/link/?to=https://github.com/TheRockYT/FSpawn">
          GitHub Project/Repository (TheRockYT/FSpawn)
        </Link>
      </p>
      <br />
      <p>
        <Link href="/link/?to=https://github.com/TheRockYT/FSpawn/issues">
          GitHub Issues (TheRockYT/FSpawn/Issues)
        </Link>
      </p>
      <br />
      <p>
        <Link href="/link/?to=https://github.com/TheRockYT/FSpawn/pulls">
          GitHub Pull requests (TheRockYT/FSpawn/Pull requests)
        </Link>
      </p>
      <br />
      <br />
      <h2>Download</h2>
      <br />
      <h2>Releases</h2>
      <br />
      <p>
        FSpawn v2.2-spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/fspawn/download/FSpawn-v2.2-spigot.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <p>
        FSpawn v2.1-spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/fspawn/download/FSpawn-v2.1-spigot.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <p>
        FSpawn v2.0-spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/fspawn/download/FSpawn-v2.0-spigot.jar"
          download
        >
          Download
        </a>
      </p>
      <p>
        FSpawn v1.0-spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/fspawn/download/FSpawn-v1.0-spigot.jar"
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
