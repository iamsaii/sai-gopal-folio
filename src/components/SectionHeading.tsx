type SectionHeadingProps = {
  index: string;
  title: string;
};

const SectionHeading = ({ index, title }: SectionHeadingProps) => (
  <div className="mb-10 flex items-baseline gap-4">
    <span className="font-mono text-xs text-warm" aria-hidden="true">
      {index}
    </span>
    <h2 className="text-h3 font-semibold">{title}</h2>
  </div>
);

export default SectionHeading;
