import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { x: 1, y: 60, z: 200 },
  { x: 2, y: 60, z: 260 },
  { x: 3, y: 55, z: 260 },
  { x: 4, y: 58, z: 400 },
  { x: 5, y: 55, z: 280 },
  { x: 6, y: 52, z: 280 },
  { x: 7, y: 60, z: 500 },
  { x: 8, y: 60, z: 200 },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-scatter-chart-edeu2s';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="th assignment" />
          <YAxis type="number" dataKey="y" name="marks" unit="/60" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
