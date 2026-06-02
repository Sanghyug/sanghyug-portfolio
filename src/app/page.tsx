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
                <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[2rem] bg-white/10 p-6">
                        <h3 className="text-2xl font-black">Message Board</h3>
                        <p className="mt-3 text-sm leading-7 text-white/70">
                            프로젝트 제안, 협업 문의, 투자·지원사업 관련 연락을 남길 수 있는 공간입니다.
                            현재는 게시판 UI이며, 실제 저장 기능은 Firebase 또는 Supabase로 연결할 수 있습니다.
                        </p>

                        <div className="mt-6 space-y-3 text-sm">
                            <div className="rounded-2xl bg-white/10 p-4">
                                <p className="font-bold">협업 문의</p>
                                <p className="mt-1 text-white/60">AI-native MVP 제작 및 사업화 협업을 기다립니다.</p>
                            </div>
                            <div className="rounded-2xl bg-white/10 p-4">
                                <p className="font-bold">Contact</p>
                                <p className="mt-1 text-white/60">{profileData.email}</p>
                            </div>
                        </div>
                    </div>

                    <form
                        action="https://formspree.io/f/xlgvqlly"
                        method="POST"
                        className="rounded-[2rem] bg-white p-6 text-[#1f2a37]"
                    >
                        <div className="grid gap-4">
                            <input
                                name="name"
                                className="rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none"
                                placeholder="이름"
                                required
                            />

                            <input
                                name="email"
                                type="email"
                                className="rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none"
                                placeholder="이메일"
                                required
                            />

                            <textarea
                                name="message"
                                className="min-h-36 rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none"
                                placeholder="메시지를 남겨주세요."
                                required
                            />

                            <button
                                type="submit"
                                className="rounded-full bg-[#a6413a] px-6 py-3 text-sm font-black text-white"
                            >
                                메시지 보내기
                            </button>
                        </div>
                    </form>
                </div>
            </footer>
        </main>
    );
}

function Nav() {
    const items = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#workflow", label: "AI" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed right-4 top-1/2 z-50 -translate-y-1/2">
            <div className="flex flex-col gap-2 rounded-full border border-black/10 bg-white/80 p-2 shadow-xl backdrop-blur-xl">
                {items.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="flex h-11 w-11 items-center justify-center rounded-full text-[11px] font-black text-[#59616d] transition hover:bg-[#1f2a37] hover:text-white"
                        title={item.label}
                    >
                        {item.label.slice(0, 1)}
                    </a>
                ))}
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