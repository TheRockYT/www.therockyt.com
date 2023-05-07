import Link from "next/link";

export const metadata = {
  title: "PLSM - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>PLSM</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 11 or newer installed.</h3>
      <br />
      <br />
      <h2>What is PLSM?</h2>
      <p>PLSM is a Plug-In-Management system for plugins on therockyt.com.</p>
      <br />
      <br />
      <h2>Features</h2>
      <p>- Install Plugins directly to a Spigot/Bungee Server.</p>
      <p>- Automatically update Plugins.</p>
      <p>- Disable/Enable Plugins</p>
      <br />
      <br />
      <h2>How to install on Spigot/Bungeecord</h2>
      <p>1. Download the latest version</p>
      <p>2. Put the Jar for your Server-Version in the plugins folder</p>
      <p>3. Restart the server</p>
      <br />
      <br />
      <h2>Commands</h2>
      <p>- plsm list - List installed plugins.</p>
      <p>- plsm install [plugin] - Install one plugin.</p>
      <p>- plsm install [plugin] [version] - Install one plugin.</p>
      <p>- plsm install [plugin] update - Install one plugin and autoupdate.</p>
      <p>- plsm install [plugin] update - Install one plugin and autoupdate.</p>
      <p>- plsm update - Update all plugins.</p>
      <p>- plsm update [plugin] - Update one plugin.</p>
      <p>- plsm disable [plugin] - Disable one plugin.</p>
      <p>- plsm enable [plugin] - Enable one plugin.</p>
      <p>- plsm delete [plugin] - Delete one plugin.</p>
      <br />
      <br />
      <h2>Public Beta</h2>
      <h3>This project is currently in beta. What do you need to now:</h3>
      <p>- You don't get any support</p>
      <p>
        - Please report issues to{" "}
        <Link href="mailto:mail@therockyt.com">mail@therockyt.com</Link>
      </p>
      <p>- Update regularly to the latest beta version</p>
      <p>- Do not use it in any production environment</p>
      <br />
      <br />
      <h2>Download</h2>
      <br />
      <p>There is currently no download.</p>
      <p>ETA: 01. February 2024</p>
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
