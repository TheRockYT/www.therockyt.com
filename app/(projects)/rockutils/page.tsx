import Link from "next/link";

export const metadata = {
  title: "Sync - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>RockUtils</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h2>What is RockUtils?</h2>
      <p>RockUtils is a library of utilities for plugins by TheRockYT</p>
      <br />
      <br />
      <h2>What can it do?</h2>
      <p>- Check for updates</p>
      <p>- Handle configurations</p>
      <br />
      <br />
      <h2>How to install on Spigot</h2>
      <p>
        This library is bundled with most of the plugins by TheRockYT out of the
        box.
      </p>
      <br />
      <br />
      <h2>Configuration</h2>
      <p>
        - Players with the permission <code>RockUtils.update</code> or{" "}
        <code>%plugin_name%.update</code> receve a message when a new version is
        available.
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
