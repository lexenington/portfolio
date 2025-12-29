import Image from "next/image";
import { aboutContent } from "@/config/content";
import { Container } from "@/components/layout/Container";

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="h-1 w-16 bg-primary mb-8" />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://i.imgur.com/HMm1raU.jpg"
                alt="Alexander Darlington Agboada"
                fill
                className="object-cover scale-125"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <p className="text-lg text-muted leading-relaxed whitespace-pre-line mb-8">
              {aboutContent.description}
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {aboutContent.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
