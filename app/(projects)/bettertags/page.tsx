import Link from "next/link";

export const metadata = {
  title: "BetterTags - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>BetterTags</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 8 or newer installed.</h3>
      <br />
      <br />
      <h2>What is BetterTags?</h2>
      <p>
        BetterTags can change the Nametags of players on your spigot server.
      </p>
      <br />
      <br />
      <h2>Features</h2>
      <p>- Luckperms autoimport</p>
      <p>- Auto Sorting</p>
      <br />
      <br />
      <h2>Installation</h2>
      <p>- Download the latest version</p>
      <p>- Move the file into the plugins folder of the spigot server</p>
      <p>- Restart the server</p>
      <br />
      <br />
      <h2>How to set prefixes/suffixes</h2>
      <p>The setup of prefixes/suffixes is done in luckperms.</p>
      <p>
        - Set the permission "weight.%weight%" to set the weight (order of the
        tab). Example: "weight.0"
      </p>
      <p>
        - Set the permission "prefix.%weight%.%prefix%" to set the prefix.
        Example: "prefix.0.&cAdmin &l| &c"
      </p>
      <p>
        - Set the permission "suffix.%weight%.%suffix%" to set the suffix.
        Example: "suffix.0.&6 [STAFF]"
      </p>
      <br />
      <br />
      <h2>Download</h2>
      <br />
      <h2>Development builds</h2>
      <br />
      <p>
        BetterTags v0.1-spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/bettertags/download/BetterTags-v0.1-spigot.jar"
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
