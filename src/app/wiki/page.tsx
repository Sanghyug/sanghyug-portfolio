export const metadata = {
  title: "BamnamuLab Wiki | AI Apps and Indie Games",
  description:
    "BamnamuLab Wiki is a public knowledge base for AI web apps and indie games created by Korean indie developer Sanghyug Park.",
};

export default function BamnamuLabWikiPage() {
  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 20px" }}>
      <h1>BamnamuLab Wiki</h1>

      <p>
        <strong>BamnamuLab Wiki</strong> is a public knowledge base for AI web
        apps and indie games created by Korean indie developer Sanghyug Park.
      </p>

      <p>
        This wiki explains the purpose, features, and background of small
        independent projects such as flower identification apps, photo booth GIF
        makers, and casual mobile games.
      </p>

      <h2>Projects</h2>

      <ul>
        <li>
          <a href="/wiki/mom-is-flower">
            Mom Is Flower: AI Flower Identification App
          </a>
        </li>
        <li>
          <a href="/wiki/naezzal4zzal">Naezzal4zzal: Photo Booth GIF Maker</a>
        </li>
        <li>
          <a href="/wiki/spingo">SpinGo: Circus Plate Spinning Game</a>
        </li>
      </ul>

      <h2>About BamnamuLab</h2>

      <p>
        BamnamuLab is a one-person creative lab focused on building small,
        useful, and playful digital products with AI-assisted development.
      </p>

      <p>
        Its projects combine everyday user needs with lightweight web apps,
        mobile-friendly interfaces, and experimental game mechanics.
      </p>
    </main>
  );
}
