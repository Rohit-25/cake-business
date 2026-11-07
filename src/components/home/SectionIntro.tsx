type SectionIntroProps = {
  id?: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionIntro({ id, title, lead, className = "" }: SectionIntroProps) {
  return (
    <header className={`mx-auto max-w-2xl text-center ${className}`}>
      <div className="section-rule" aria-hidden="true" />
      <h2 id={id} className="section-title mt-6">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-base leading-relaxed text-cocoa sm:text-lg">{lead}</p> : null}
    </header>
  );
}
