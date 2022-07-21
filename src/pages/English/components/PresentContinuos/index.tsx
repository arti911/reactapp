import React, { FC } from "react";
import { Typography, Divider, Card, Row, Col } from "antd";

import { ISchema } from "../../index.interface";

const { Title, Paragraph } = Typography;

const PresentContinuos: FC<ISchema> = (props) => (
  <>
    <Title level={4}>{props.title}</Title>

    <Row gutter={[16, 16]} justify="center">
      <Col>
        <Card title="Правило">
          <Paragraph>{props.rule}</Paragraph>
        </Card>
      </Col>

      <Col>
        <Card title="Пример">
          {props.examples.map((item) => (
            <Paragraph>{item}</Paragraph>
          ))}
        </Card>
      </Col>
    </Row>

    <Divider />
  </>
);

export default PresentContinuos;
