import { Typography, Divider, Card, Row, Col } from "antd";

import { SchemaDTO } from "../../index.interface";

const { Title, Paragraph } = Typography;

const PresentContinuos = (props: SchemaDTO) => {
  const { title, rule, examples } = props;

  return (
    <>
      <Title level={4}>{title}</Title>

      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Card title="Правило">
            <Paragraph>{rule}</Paragraph>
          </Card>
        </Col>

        <Col>
          <Card title="Пример">
            {examples.map((item) => (
              <Paragraph key={item}>{item}</Paragraph>
            ))}
          </Card>
        </Col>
      </Row>

      <Divider />
    </>
  );
};

export default PresentContinuos;
