import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { mockStoryData, emptyData } from './DonutChart.fixtures';
import DonutChart from './';
import * as chartService from '../../../../../services/charts/DonutChartService';

jest.unmock('./');
describe('renders DonutChart', () => {
  it('render donut chart', () => {
    chartService.getDonutChartConfig = jest.fn(() => mockStoryData);
    const wrapper = shallow(<DonutChart data={mockStoryData} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('render empty state', () => {
    chartService.getDonutChartConfig = jest.fn(() => emptyData);
    const wrapper = shallow(<DonutChart data={emptyData} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
