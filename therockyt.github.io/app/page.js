import "./style/home.css";

export default function HomePage() {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <h1>TheRockYT</h1>
        <h2>Top</h2>
        <h3>
          <a href="/directbans">DirectBans</a>
        </h3>
        <h3>
          <a href="/sync">Sync</a>
        </h3>
        <h3>
          <a href="/fspawn">FSpawn</a>
        </h3>
        <h3>
          <a href="/advancedcloud">AdvancedCloud</a>
        </h3>
        <h3>
          <a href="/shutuppc">ShutUpPC</a>
        </h3>
        <h3>
          <a href="/link/?to=https://github.com/TheRockYT">GitHub</a>
        </h3>
        <h3>
          <a href="/link/?to=https://hub.docker.com/u/therockyt">Docker Hub</a>
        </h3>
      </div>
    </div>
  );
}
