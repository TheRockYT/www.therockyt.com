import Link from "next/link";

export const metadata = {
  title: "AdvancedCloud - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>AdvancedCloud</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 8 or newer installed.</h3>
      <br />
      <br />
      <h2>What is AdvancedCloud?</h2>
      <p>AdvancedCloud is a management system for minecraft-server networks.</p>
      <br />
      <br />
      <h2>Features</h2>
      <p>- Run servers in Docker-Containers</p>
      <p>- Multi-Templates</p>
      <p>
        - - Install default plugins on all servers (Anti-Cheat, Permissions,
        Sync, ...)
      </p>
      <p>
        - - Use multiple chained templates: (general - bedwars - bedwars solo -
        bedwars map)
      </p>
      <p>- Webinterface</p>
      <p>- - Start services</p>
      <p>- - Live console</p>
      <p>- - Run commands</p>
      <p>- Service Types</p>
      <br />
      <br />
      <h2>Service-Types</h2>
      <p>- Dynamic</p>
      <p>- - Will start servers automatically from a template</p>
      <p>- - Data will be lost after server restart</p>
      <p>- Static</p>
      <p>- - Will be always the same</p>
      <p>- External</p>
      <p>- - Can be an external server (like a gameserver)</p>
      <p>
        - - Recommend to install a plugin on that server to manage it remotely
      </p>
      <br />
      <br />
      <h2>How to install</h2>
      <h3>1. Master</h3>
      <p>1.1 Download the latest version of the master</p>
      <p>1.2 Create an empty directory</p>
      <p>1.3 Place the Jar-File inside the folder</p>
      <p>1.4 Run the Jar-File</p>
      <br />
      <h3>2. Agent</h3>
      <p>2.1 Download the latest version of the agent</p>
      <p>2.2 Create empty directories on every server, the agent should run</p>
      <p>2.3 Place the Jar-File inside the folder</p>
      <p>2.4 Run the Jar-File</p>
      <p>2.5 Set the port: "agent service port [port]"</p>
      <p>2.6 Set the autostart: "agent service autostart [true/false]"</p>
      <p>2.7 Enable the agent service: "agent service enable"</p>
      <br />
      <h3>3. Connect Master to an Agent</h3>
      <p>
        3.1 Register a agent on the master: "agent register [agent_name] (ip)"
      </p>
      <p> 3.1.1 Use the [agent_name] to give the agent a name</p>
      <p> 3.1.2 Use the (ip) block requests from other ips (optional)</p>
      <p> 3.1.3 The master should return a key.</p>
      <p>3.2 Go to the agent and run "connect [ip] [port] [key]"</p>
      <p>3.3 Repeat the process for all agents</p>
      <br />
      <h3>4. Setup Server-Versions</h3>
      <p>4.1 Navigate to the agent</p>
      <p>
        4.2 Put your Server-Version in the versions folder (Aegis, BungeeCord,
        Paper, Spigot, ...)
      </p>
      <p>
        4.3 To check if the version was read, do "version list" on the master
      </p>
      <p>
        - 4.3.1 If the name of the Jar is not showing, do "version reload" and
        try again
      </p>
      <p>4.4 Use the command "version stop [version] [command]"</p>
      <p>
        - 4.4.1 Replace [command] with the stop command of the version
        (Bukkit/Spigot: "stop", BungeeCord: "end")
      </p>
      <p>
        - 4.4.2 If you not set the stop command, you will not be able to
        shutdown the server. You can just kill the task.
      </p>
      <br />
      <h3>5. Static-Service-Setup</h3>
      <p>
        5.1 Create the service "service create static [agent] [name] [version]
        (mib)"
      </p>
      <p>5.2 Start the service "service start [name]"</p>
      <br />
      <h3>6. Dynamic-Service-Setup</h3>
      <p>
        6.1 Create the service "service create dynamic [agent] [name] [version]
        [keep_online] [max_online] [players_for_autostart] (mib_per_server)"
      </p>
      <p>5.2 Start the service "service start [name]"</p>
      <p>
        5.3 Start multiple servers from a dynamic server "service start [name]
        (number)"
      </p>
      <br />
      <br />
      <h2>Private Beta</h2>
      <h3>
        This project is currently in private beta. What do you need to now:
      </h3>
      <p>- You don't get any support</p>
      <p>
        - Please report issues to{" "}
        <Link href="mailto:mail@therockyt.com">mail@therockyt.com</Link>
      </p>
      <p>- Update regularly to the latest beta version</p>
      <p>- Do not use it in any production environment</p>
      <br />
      <br />
      <h2>Progress</h2>
      <h3>Commands/Master:</h3>
      <p>- Stop-Command: finished</p>
      <p>- Agent-Command: finished</p>
      <p>- Service-Command: in work</p>
      <p>- Version-Command: up next</p>
      <h3>Commands/Agent:</h3>
      <p>- Connect-Command: finished</p>
      <p>- Disconnect-Command: finished</p>
      <h3>Web/Master</h3>
      <p>- GUI/Webinterface: in work</p>
      <p>- API: in work</p>
      <p>- Login: up next</p>
      <p>- mfa: up next</p>
      <br />
      <br />
      <h2>Download</h2>
      <br />
      <p>
        Contact me if you want to try it:{" "}
        <Link href="mailto:mail@therockyt.com">mail@therockyt.com</Link>
      </p>
      <p>There is currently no download.</p>
      <p>ETA: Jan 2024</p>
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
