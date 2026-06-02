import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../../../data/portfolio";

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const foundProject = projectsData.find((item) => item.slug === slug);

    if (!foundProject) {
        notFound();
    }

    const project = foundProject;
    const isLandscape = project.screenType === "landscape";

    return (
        <main className="min-h-screen bg-[#f5f2ec] text-[#1f2a37]">
            <nav className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f2ec]/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
                    <Link href="/" className="font-black">
                        ← PARK SANGHYUG
                    </Link>
                    <a
                        href={`https://youtu.be/${project.youtubeId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-[#1f2a37] px-5 py-2 text-sm font-bold text-white"
                    >
                        Demo Video
                    </a>
                </div>
            </nav>

            <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-12">
                <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="lg:sticky lg:top-28">
                        <div className="flex items-center gap-5">
                            <Image
                                src={project.icon}
                                alt={`${project.title} icon`}
                                width={96}
                                height={96}
                                className="rounded-3xl shadow-xl"
                            />
                            <div>
                                <p className="text-sm font-bold text-[#a6413a]">
                                    PROJECT {project.id}
                                </p>
                                <h1 className="mt-2 text-5xl font-black">{project.title}</h1>
                            </div>
                        </div>

                        <p className="mt-8 text-2xl font-bold leading-9">{project.type}</p>
                        <p className="mt-6 text-lg leading-9 text-[#59616d]">{project.desc}</p>

                        <div className="mt-8 grid grid-cols-2 gap-3">
                            <Info label="Stage" value={project.stage} />
                            <Info label="Role" value={project.role} />
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#59616d]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        {isLandscape ? (
                            <div className="space-y-6">
                                {project.screens.map((screen, index) => (
                                    <Image
                                        key={screen}
                                        src={screen}
                                        alt={`${project.title} screen ${index + 1}`}
                                        width={1200}
                                        height={675}
                                        className="h-auto w-full rounded-[2rem] object-contain shadow-xl"
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="grid gap-6 md:grid-cols-3">
                                {project.screens.map((screen, index) => (
                                    <Image
                                        key={screen}
                                        src={screen}
                                        alt={`${project.title} screen ${index + 1}`}
                                        width={430}
                                        height={860}
                                        className={`w-full rounded-[2rem] object-cover shadow-xl ${index === 1 ? "md:mt-14" : ""
                                            }`}
                                    />
                                ))}
                            </div>
                        )}

                        <div className="mt-10 overflow-hidden rounded-[2rem] bg-black shadow-2xl">
                            <div className="aspect-video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                    title={`${project.title} Demo`}
                                    className="h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function Info({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-black/10 bg-white p-5">
            <p className="text-xs font-bold text-[#a6413a]">{label}</p>
            <p className="mt-2 text-sm font-bold leading-6">{value}</p>
        </div>
    );
}