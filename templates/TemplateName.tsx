import "./style.scss";

interface TemplateNameProps {
  name: string;
}

export const TemplateName = (props: TemplateNameProps) => {
  const { name } = props;

  return (
    <div className="template-name">
      <h1>{name}</h1>
    </div>
  );
};
