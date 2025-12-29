import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/config/content";
import { Container } from "@/components/layout/Container";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
        <div className="h-1 w-16 bg-primary mb-8" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-6 md:mt-6" />

                {/* Content */}
                <div className="flex-1 ml-10 md:ml-0">
                  <div
                    className={`bg-card border border-border rounded-lg p-6 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {exp.type === "work" ? (
                        <Briefcase size={18} className="text-primary" />
                      ) : (
                        <GraduationCap size={18} className="text-primary" />
                      )}
                      <span className="text-sm text-muted">
                        {exp.startDate} - {exp.endDate || "Present"}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    {exp.location && (
                      <p className="text-sm text-muted">{exp.location}</p>
                    )}

                    <p className="text-muted mt-3">{exp.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
