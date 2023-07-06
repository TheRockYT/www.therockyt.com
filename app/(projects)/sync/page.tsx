import Link from "next/link";

export const metadata = {
  title: "Sync - TheRockYT",
};

export default function Page() {
  return (
    <div>
      <h1>Sync</h1>
      <h3>by TheRockYT</h3>
      <br />
      <br />
      <h3>You need to have Java 8 or newer installed.</h3>
      <br />
      <br />
      <h2>What is Sync?</h2>
      <p>Sync is a synchronization system for Spigot-Servers.</p>
      <br />
      <br />
      <h2>Features</h2>
      <p>- Sync jobs:</p>
      <p>- - Inventory</p>
      <p>- - Enderchest</p>
      <p>- - ArmorInventory</p>
      <p>- - Gamemode</p>
      <p>- - Experience</p>
      <p>- - Health</p>
      <p>- - Food</p>
      <p>- - Location</p>
      <p>- - Potions</p>
      <p>- Offline view/edit</p>
      <p>- Live view/edit (same server)</p>
      <p>- Live view (other server)</p>
      <p>- Economy</p>
      <p>- - VaultEconomy</p>
      <p>- - EssentialsEconomy</p>
      <p>- Inventory migration</p>
      <p>- - Migrate inventories to newer version by just joining them.</p>
      <p>- - Note: Migrated data can not be downgraded again.</p>
      <p>- Webview (planned)</p>
      <br />
      <br />
      <h2>How to install on Spigot</h2>
      <p>1. Download the latest version</p>
      <p>2. Place it into the "plugins" folder of your Spigot-Server.</p>
      <p>3. Restart the server.</p>
      <p>4. Configure Sync in the config.</p>
      <p>- 4.1. The config is self-explaining.</p>
      <p>5. Copy the configuration to all servers.</p>
      <br />
      <br />
      <h2>Commands</h2>
      <h3>Show version of Sync</h3>
      <p>
        Command: <code>sync version</code>
      </p>
      <p>
        Permission: <code>Sync.version</code>
      </p>
      <h3>Show inventory of a player</h3>
      <p>
        Command: <code>sync inv [player]</code>
      </p>
      <p>
        Permission: <code>Sync.inv</code>
      </p>
      <h3>Show enderchest of a player</h3>
      <p>
        Command: <code>sync end [player]</code>
      </p>
      <p>
        Permission: <code>Sync.end</code>
      </p>
      <h3>Show armor of a player</h3>
      <p>
        Command: <code>sync armor [player]</code>
      </p>
      <p>
        Permission: <code>Sync.armor</code>
      </p>
      <h3>Show player's bank balance</h3>
      <p>
        Command: <code>sync eco [player]</code>
      </p>
      <p>
        Permission: <code>Sync.eco</code>
      </p>
      <h3>Set player's bank balance</h3>
      <p>
        Command: <code>sync ecoset [player] [balance]</code>
      </p>
      <p>
        Permission: <code>Sync.ecoset</code>
      </p>
      <h3>Show player's bank balance (essentials)</h3>
      <p>
        Command: <code>sync eeco [player]</code>
      </p>
      <p>
        Permission: <code>Sync.eeco</code>
      </p>
      <h3>Set player's bank balance (essentials)</h3>
      <p>
        Command: <code>sync eecoset [player] [balance]</code>
      </p>
      <p>
        Permission: <code>Sync.eecoset</code>
      </p>
      <h3>Save data for all players</h3>
      <p>
        Command: <code>sync forcesave</code>
      </p>
      <p>
        Permission: <code>Sync.forcesave</code>
      </p>
      <h3>Save data for one player</h3>
      <p>
        Command: <code>sync forcesave [player]</code>
      </p>
      <p>
        Permission: <code>Sync.forcesave</code>
      </p>
      <br />
      <br />
      <h2>Sync v0.9 Beta (EA)</h2>
      <p>Sync v0.9 Beta has following new features:</p>
      <p>- ScyllaDB/Cassandra Support</p>
      <p>- MongoDB Support</p>
      <p>- Async Synchronisation</p>
      <br />
      <p>
        Learn More: <Link href="/early-access">Early Access</Link>
      </p>
      <br />
      <br />
      <h2>Download</h2>
      <p>Release-ETA: 01. Sep. 2023</p>
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
