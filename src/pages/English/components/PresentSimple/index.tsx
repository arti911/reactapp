import PresentContinuos from "../PresentContinuos";
import { SchemaDTO } from "../../index.interface";

import "./style.scss";

interface PresentSimpleProps {
  schemes: SchemaDTO[];
}

const PresentSimple = ({ schemes }: PresentSimpleProps) => (
  <section className="english-content">
    {schemes.map((item) => (
      <PresentContinuos {...item} key={item.title} />
    ))}
  </section>
);

export default PresentSimple;
