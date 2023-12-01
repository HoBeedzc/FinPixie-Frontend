import React, { useState } from 'react';
import { Link, Card, Radio, Table, Typography } from '@arco-design/web-react';
import { IconCaretDown, IconCaretUp } from '@arco-design/web-react/icon';
import useLocale from '@/utils/useLocale';
import locale from './locale';

function HistoricalReturn() {
  const t = useLocale(locale);
  const [type, setType] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const columns = [
    {
      title: t['financing.column.code'],
      dataIndex: 'code',
      width: 65,
    },
    {
      title: t['financing.column.name'],
      dataIndex: 'name',
      width: 200,
      render: (x) => (
        <Typography.Paragraph style={{ margin: 0 }} ellipsis>
          {x}
        </Typography.Paragraph>
      ),
    },
    {
      title: t['financing.column.date'],
      dataIndex: 'date',
      width: 100,
      render: (text) => {
        return `${text / 1000}k`;
      },
    },
    {
      title: t['financing.column.amount'],
      dataIndex: 'amount',
      width: 100,
      render: (text) => {
        return `${text / 1000}k`;
      },
    },
    {
      title: t['financing.column.revenue'],
      dataIndex: 'revenue',
      sorter: (a, b) => a.increase - b.increase,
      width: 110,
      render: (text) => {
        return (
          <span>
            {`${(text * 100).toFixed(2)}%`}
            <span className={styles['symbol']}>
              {text < 0 ? (
                <IconCaretUp style={{ color: 'rgb(var(--green-6))' }} />
              ) : (
                <IconCaretDown style={{ color: 'rgb(var(--red-6))' }} />
              )}
            </span>
          </span>
        );
      },
    },
  ];

  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography.Title heading={6}>
          {t['financing.historicalReturn']}
        </Typography.Title>
        <Link>{t['financing.seeMore']}</Link>
      </div>
      <Radio.Group
        type="button"
        value={type}
        onChange={setType}
        options={[
          { label: t['financing.byDay'], value: 0 },
          { label: t['financing.byWeek'], value: 1 },
          { label: t['financing.byMonth'], value: 2 },
          { label: t['financing.byYear'], value: 3 },
        ]}
        style={{ marginBottom: 16 }}
      />
      <Table
        rowKey="rank"
        columns={columns}
        data={data}
        loading={loading}
        tableLayoutFixed
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
        pagination={{ total, current: page, pageSize: 5, simple: true }}
      />
    </Card>
  );
}

export default HistoricalReturn;
