import Image from "next/image";
import Link from "next/link";
import { profileData, projectsData } from "../data/portfolio";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f2ec] text-[#1f2a37]">
      <Nav />

      <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-12">
        <div>
          <p className="mb-5 text-sm font-bold tracking-[0.28em] text-[#a6413a]">
            PORTFOLIO / AI-NATIVE BUILDER
          </p>

          <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            PARK
            <br />
            SANGHYUG
          </h1>

          <p className="mt-8 text-2xl font-medium md:text-3xl">
            From Zero to Builder in 8 Months
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#59616d]">
            {profileData.mainHook}
          </p>

          <div className="mt-10 flex gap-3">
            <a href="#projects" className="rounded-full bg-[#1f2a37] px-6 py-3 text-sm font-bold text-white">
              View Projects
            </a>
            <a href="#contact" className="rounded-full border border-black/15 px-6 py-3 text-sm font-bold">
              Contact
            </a>
          </div>
        </div>

        <Image
          src="/profile.png"
          alt="Park Sanghyug profile"
          width={720}
          height={720}
          priority
          className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-2xl"
        />
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <SectionTitle eyebrow="ABOUT ME" title="Who I Am" />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {profileData.aboutMe.map((item) => (
            <div key={item.step} className="rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-sm">
              <p className="text-sm font-bold text-[#a6413a]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-black">{item.role}</h3>
              <p className="mt-4 text-lg font-bold leading-7">{item.title}</p>
              <p className="mt-4 text-sm leading-7 text-[#66707c]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <SectionTitle
          eyebrow="PRODUCTS"
          title="Project Gallery"
          desc="각 프로젝트를 선택하면 상세 소개 페이지로 이동합니다."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  width={72}
                  height={72}
                  className="rounded-2xl shadow-md"
                />
                <div>
                  <p className="text-xs font-bold text-[#a6413a]">PROJECT {project.id}</p>
                  <h3 className="mt-1 text-2xl font-black">{project.title}</h3>
                </div>
              </div>

              <p className="mt-5 text-sm font-bold text-[#59616d]">{project.type}</p>
              <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#66707c]">{project.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full bg-[#f5f2ec] px-3 py-1 text-xs font-bold text-[#59616d]">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-7 text-sm font-black text-[#a6413a] group-hover:underline">
                자세히 보기 →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <SectionTitle
          eyebrow="AI WORKFLOW"
          title="AI와 협업한 방식"
          desc="역할별 에이전트처럼 분리해 기획·개발·디자인·사업화·특허를 병렬로 진행했습니다."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profileData.aiWorkflow.map((agent) => (
            <div key={agent.num} className="rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-sm">
              <p className="text-sm font-bold text-[#a6413a]">{agent.num}</p>
              <h3 className="mt-4 text-xl font-black">{agent.role}</h3>
              <p className="mt-4 text-sm leading-7 text-[#66707c]">{agent.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="rounded-[2.5rem] bg-[#1f2a37] p-10 text-white md:p-14">
          <p className="text-sm font-bold tracking-[0.28em] text-[#d6a19b]">CONTACT</p>
          <h2 className="mt-6 text-4xl font-black md:text-6xl">
            From Zero to Builder
            <br />
            <span className="text-[#d46a60]">and still building.</span>
          </h2>

          <div className="mt-10 grid gap-4 text-lg md:grid-cols-3">
            <p>{profileData.name} / {profileData.englishName}</p>
            <p>{profileData.email}</p>
            <p>{profileData.phone}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f2ec]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#home" className="font-black tracking-tight">
          PARK SANGHYUG
        </a>
        <div className="hidden gap-6 text-sm font-bold text-[#59616d] md:flex">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#workflow">AI Workflow</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div>
      <p className="text-sm font-bold tracking-[0.28em] text-[#a6413a]">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">{title}</h2>
      {desc && <p className="mt-5 max-w-3xl text-lg text-[#66707c]">{desc}</p>}
    </div>
  );
}