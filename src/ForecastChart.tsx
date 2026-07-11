import React from 'react';
import {Chart, Title, Tooltip, XAxis, YAxis} from '@highcharts/react';
import { LineSeries } from '@highcharts/react/series/Line';
import { Accessibility } from '@highcharts/react/modules/Accessibility';


export interface StockDatapoint {
    date: string;       // For tooltips and X-axis rendering
    timestamp: number;  // JavaScript epoch timestamp for the Highcharts datetime axis
    value: number;      // Projected stock price in USD
}

export interface StockForecastSeries {
    ticker: string;
    name: string;
    color: string;
    data: StockDatapoint[];
}

const financialForecastData: StockForecastSeries[] = [
    {
        ticker: "NVDA",
        name: "NVIDIA Corp. (AI Hardware Leader - High Growth)",
        color: "#76B900", // Corporate Green
        data: [
            { date: "Jan 2027", timestamp: 1798761600000, value: 145.50 },
            { date: "Apr 2027", timestamp: 1806537600000, value: 158.20 },
            { date: "Jul 2027", timestamp: 1814313600000, value: 152.00 },
            { date: "Oct 2027", timestamp: 1822348800000, value: 174.80 },
            { date: "Jan 2028", timestamp: 1830297600000, value: 195.00 },
            { date: "Apr 2028", timestamp: 1838073600000, value: 210.40 },
            { date: "Jul 2028", timestamp: 1845849600000, value: 198.50 },
            { date: "Oct 2028", timestamp: 1853884800000, value: 235.00 },
            { date: "Jan 2029", timestamp: 1861833600000, value: 268.20 },
            { date: "Apr 2029", timestamp: 1869609600000, value: 285.00 },
            { date: "Jul 2029", timestamp: 1877385600000, value: 272.10 },
            { date: "Oct 2029", timestamp: 1885420800000, value: 312.50 }
        ]
    },
    {
        ticker: "NEE",
        name: "NextEra Energy (Green Infrastructure - Defensive/Cyclical)",
        color: "#0083C4", // Clean Blue
        data: [
            { date: "Jan 2027", timestamp: 1798761600000, value: 72.00 },
            { date: "Apr 2027", timestamp: 1806537600000, value: 74.50 },
            { date: "Jul 2027", timestamp: 1814313600000, value: 78.20 }, // Summer peak energy usage
            { date: "Oct 2027", timestamp: 1822348800000, value: 75.00 },
            { date: "Jan 2028", timestamp: 1830297600000, value: 73.80 },
            { date: "Apr 2028", timestamp: 1838073600000, value: 76.10 },
            { date: "Jul 2028", timestamp: 1845849600000, value: 81.00 },
            { date: "Oct 2028", timestamp: 1853884800000, value: 77.40 },
            { date: "Jan 2029", timestamp: 1861833600000, value: 76.50 },
            { date: "Apr 2029", timestamp: 1869609600000, value: 79.90 },
            { date: "Jul 2029", timestamp: 1877385600000, value: 85.30 },
            { date: "Oct 2029", timestamp: 1885420800000, value: 81.20 }
        ]
    },
    {
        ticker: "CRSP",
        name: "CRISPR Therapeutics (Biotech - Speculative/High Volatility)",
        color: "#E040FB", // Neon Violet
        data: [
            { date: "Jan 2027", timestamp: 1798761600000, value: 55.00 },
            { date: "Apr 2027", timestamp: 1806537600000, value: 48.20 },
            { date: "Jul 2027", timestamp: 1814313600000, value: 51.00 },
            { date: "Oct 2027", timestamp: 1822348800000, value: 112.50 }, // Simulated FDA Approval event
            { date: "Jan 2028", timestamp: 1830297600000, value: 98.00 },
            { date: "Apr 2028", timestamp: 1838073600000, value: 92.40 },
            { date: "Jul 2028", timestamp: 1845849600000, value: 85.00 },
            { date: "Oct 2028", timestamp: 1853884800000, value: 72.10 }, // Post-hype market correction
            { date: "Jan 2029", timestamp: 1861833600000, value: 68.00 },
            { date: "Apr 2029", timestamp: 1869609600000, value: 104.50 }, // Phase III Trial announcement
            { date: "Jul 2029", timestamp: 1877385600000, value: 135.00 },
            { date: "Oct 2029", timestamp: 1885420800000, value: 158.40 }
        ]
    }
];


export function ForecastChart(): React.JSX.Element {
    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <Chart type="line">

                {/* Core Settings */}
                <Title>3-Year Asset Valuation Forecast (2027–2029)</Title>

                {/* Native Accessibility Component Configuration */}
                <Accessibility
                    enabled={true}
                    description="Line chart comparing the projected financial growth of three distinct stock profiles: NVDA (high growth AI), NEE (defensive energy), and CRSP (volatile biotech) over 36 months."
                    screenReaderSection={{
                        beforeChartFormat: '<h5>{chartTitle}</h5><p>{chartDescription}</p><p>Use keyboard arrow keys to navigate the plot lines.</p>'
                    }}
                />

                {/* X & Y Axes Configuration */}
                <XAxis
                    type="datetime"
                    title={{ text: 'Timeline' }}
                />

                <YAxis
                    title={{ text: 'Stock Price (USD)' }}
                    labels={{ format: '${value}' }}
                />

                {/* Global Tooltip Formatting */}
                <Tooltip
                    xDateFormat="%b %Y"
                    valuePrefix="$"
                />

                {/* Dynamic Series Rendering using JSX elements */}
                {financialForecastData.map((stock) => (
                    <LineSeries
                        key={stock.ticker}
                        id={stock.ticker}
                        name={stock.name}
                        color={stock.color}
                        // Maps the array of points directly into the expected format [timestamp, value]
                        data={stock.data.map((point) => [point.timestamp, point.value])}
                    />
                ))}

            </Chart>
        </div>
    );
}