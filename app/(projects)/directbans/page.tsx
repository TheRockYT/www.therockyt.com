import Link from "next/link";

export const metadata = {
  title: "DirectBans - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>DirectBans</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 11 or newer installed.</h3>
      <br />
      <br />
      <h2>What is DirectBans?</h2>
      <p>DirectBans is a BanSystem for Spigot/BungeeCord with Webinterface.</p>
      <br />
      <br />
      <h2>Features</h2>
      <p>- Webinterface</p>
      <p>- Ban-Notes</p>
      <p>- - Add notes to a ban to describe a ban.</p>
      <p>- - Ban notes an be automatically added by Anticheats.</p>
      <p>- Time-Bans</p>
      <p>- Ban-Templates</p>
      <p>- Custom Ban messages</p>
      <p>- UUID-Bans</p>
      <p>- SQL-Support</p>
      <p> - Supports MySQL & SQLite</p>
      <p>- IP-Bans (coming soon)</p>
      <br />
      <br />
      <h2>How to install on Spigot/Bungeecord</h2>
      <p>1. Download the latest version</p>
      <p>- 1.1 Use "DirectBan-Bungee.jar" for BungeeCord</p>
      <p>- 1.2 Use "DirectBan-Spigot.jar" for Spigot</p>
      <p>2. Put the Jar for your Server-Version in the plugins folder</p>
      <p>3. Restart the server</p>
      <p>
        4. Configure SQL settings in the config
        ("plugins/DirectBans-%platform%/config.yml")
      </p>
      <br />
      <br />
      <h2>How to install Webinterface on Spigot/Bungeecord</h2>
      <p>
        1. Enable the Webinterface in your config
        ("plugins/DirectBans-%platform%/config.yml")
      </p>
      <p>2. Customize port in the config</p>
      <p>3. Restart the server</p>
      <p>4. Open a browser and go to http://serverIp:port/web</p>
      <p>
        5. If the Webinterface isn't setup, the setup Assistent will be visible.
      </p>
      <br />
      <br />
      <h2>How to install Webinterface on external server</h2>
      <p>1. Download the standalone Webinterface ("DirectBan-Web.jar")</p>
      <p>2. Start the application using "java -jar DirectBan-Web.jar"</p>
      <p>3. Stop the application using "stop"</p>
      <p>4. Open the new generated config and insert SQL-Information</p>
      <p>5. Customize port in the config</p>
      <p>6. Start the application using "java -jar DirectBan-Web.jar"</p>
      <p>7. Open a browser and go to http://serverIp:port/web</p>
      <p>
        8. If the Webinterface isn't setup, the setup Assistent will be visible.
      </p>
      <br />
      <br />
      <h2>How to ban (commands)</h2>
      <p>- ban (username) [template_id]</p>
      <p>- ban (username) [template_id] [message]</p>
      <p>- ban (username) [message]</p>
      <br />
      <p>
        To add notes (only visible for staff) to a ban, add -n [node] to the
        command.
      </p>
      <p>To make a System ban use the command systemban insted of ban.</p>
      <br />
      <p>- unban (username)</p>
      <p>- history (username)</p>
      <br />
      <br />
      <h2>Public Beta</h2>
      <h3>
        This project is currently in public beta. What do you need to now:
      </h3>
      <p>- You don't get any support</p>
      <p>
        - Please report issues to
        <a href="mailto:mail@therockyt.com">mail@therockyt.com</a>
      </p>
      <p>- Update regularly to the latest beta version</p>
      <p>- Do not use it in any production environment</p>
      <br />
      <br />
      <h2>Download</h2>
      <br />
      <p>
        DirectBans v0.0.3:{" "}
        <a
          href="https://api.therockyt.com/pl/directbans/download/DirectBans-v0.0.3.jar"
          download
        >
          Download
        </a>
      </p>
      <p>
        DirectBans v0.0.3-Bungee:{" "}
        <a
          href="https://api.therockyt.com/pl/directbans/download/DirectBans-v0.0.3-bungee.jar"
          download
        >
          Download
        </a>
      </p>
      <p>
        DirectBans v0.0.3-Spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/directbans/download/DirectBans-v0.0.3-spigot.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <p>
        DirectBans v0.0.2-Bungee:{" "}
        <a
          href="https://api.therockyt.com/pl/directbans/download/DirectBans-v0.0.2-bungee.jar"
          download
        >
          Download
        </a>
      </p>
      <p>
        DirectBans v0.0.2-Spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/directbans/download/DirectBans-v0.0.2-spigot.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <p>
        DirectBans v0.0.1-Spigot:{" "}
        <a
          href="https://api.therockyt.com/pl/directbans/download/DirectBans-v0.0.1-spigot.jar"
          download
        >
          Download
        </a>
      </p>
      <br />
      <br />
      <h2>Do you have any questions?</h2>
      <p>
        Please contact me via{" "}
        <Link href="mailto:mail@therockyt.com">mail@therockyt.com</Link>.
      </p>
    </div>
  );
}
