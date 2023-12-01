import React from 'react';
import { Grid, Space } from '@arco-design/web-react';
import Overview from './overview';
import HistoricalReturn from './historical-return';
import Shortcuts from './shortcuts';

const { Row, Col } = Grid;

const gutter = 16;

function Dashboard() {
  return (
    <Space size={16} align="start">
      <Space size={16} direction="vertical">
        <Overview />
        <Row gutter={gutter}>
          <Col span={12}>
            <HistoricalReturn />
          </Col>
          <Col span={12}>
            <Overview />
          </Col>
        </Row>
      </Space>
      <Space className={'Short'} size={16} direction="vertical">
        <Shortcuts />
      </Space>
    </Space>
  );
}

export default Dashboard;
