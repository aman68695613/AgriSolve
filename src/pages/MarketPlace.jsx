import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from 'react';
import { Chart, defaults } from 'chart.js/auto';
import { IoCartOutline } from "react-icons/io5";
import { PiHandCoins } from "react-icons/pi";
import { Line } from 'react-chartjs-2';
import ContractCard from "./contractcard";

// Setting default options for Chart.js
defaults.maintainAspectRatio = true;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "center";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const MarketPlace = () => {
  const [activeTab, setActiveTab] = useState('buy'); // State to manage active tab

  // Gradient background setup for the line chart
  const gradientBackground = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(75,192,192,0.7)');
    gradient.addColorStop(0.5, 'rgba(75,192,192,0.4)');
    gradient.addColorStop(1, 'rgba(75,192,192,0.1)');
    return gradient;
  };

  return (
    <div className='bg-[#E4F5E4] min-h-screen'> 
      <div className='bg-[#5a8958] py-4 shadow-md'>
        {/* Pills for Buy and Sell */}
        <div className='flex gap-4 justify-center'>
          <button
            onClick={() => setActiveTab('buy')}
            className={`${
              activeTab === 'buy' ? 'bg-[#1A5319] text-white' : 'bg-white text-green-600'
            } py-2 px-6 rounded-full border border-green-600 focus:outline-none transition duration-300`}
          >
            <IoCartOutline className="inline-block mr-2" />
            Buy
          </button>
          <button
            onClick={() => setActiveTab('sell')}
            className={`${
              activeTab === 'sell' ? 'bg-[#1A5319] text-white' : 'bg-white text-green-600'
            } py-2 px-6 rounded-full border border-green-600 focus:outline-none transition duration-300`}
          >
            <PiHandCoins className="inline-block mr-2" />
            Sell
          </button>
        </div>
      </div>

     
      {activeTab === 'buy' ? (
        <div>
            <div className="text-5xl  font-bold text-[#1A5319] py-3 px-3  ">
                    Dashboard
            </div>
          <div className='flex justify-center '>
            <Line
              className=' rounded-2xl p-8 text-black font-bold  bg-green-200 max-w-[80vw] max-h-[60vh] mt-5'
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                  label: 'Income',
                  data: [2980, 4000, 3300, 5050, 3780, 4600, 4300],
                  backgroundColor: (context) => gradientBackground(context.chart.canvas),
                  borderColor: 'rgba(34, 139, 34, 1)', // Darker green line
                  borderWidth: 3,
                  pointBackgroundColor: 'white',
                  pointBorderColor: 'rgba(34, 139, 34, 1)', // Match point border color to line
                  pointHoverBackgroundColor: 'rgba(34, 139, 34, 1)', // Darker hover point
                  pointHoverBorderColor: 'white',
                  pointRadius: 5,
                  pointHoverRadius: 7
                }]
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.4,
                  }
                },
                scales: {
                  y: {
                    grid: {
                      display: true,
                      color: 'rgba(200, 200, 200, 0.3)',
                    },
                    ticks: {
                      font: {
                        size: 14,
                      },
                      color: '#333'
                    }
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      font: {
                        size: 14,
                      },
                      color: '#333'
                    }
                  }
                },
                plugins: {
                  title: {
                    text: "Income from Sales",
                    font: {
                      size: 24,
                      weight: 'bold',
                      family: 'Arial'
                    }
                  },
                  legend: {
                    display: true,
                    position: 'top',
                    labels: {
                      font: {
                        size: 14,
                      },
                      color: '#333'
                    }
                  },
                  tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    titleFont: {
                      size: 14,
                    },
                    bodyFont: {
                      size: 14,
                    }
                  }
                },
                animation: {
                  duration: 2000,
                  easing: 'easeInOutCubic'
                }
              }}
            />
          </div>
          <div className="bg-gray-300 text-[0px]  mt-5 h-[1px] mx-16"></div>
          <div className="text-5xl  mt-5 font-bold text-[#1A5319] py-3 px-3  ">
                    Contracts
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-x-0 mt-10 ml-8 bg-[#E4F5E4]">
            <ContractCard title={"Wheat"} amount={2000} month={"October"} year={2024} />
            <ContractCard title={"Rice"} amount={2500} month={"June"} year={2024} />
            <ContractCard title={"Cotton"} amount={2700} month={"July"} year={2024} />
            <ContractCard title={"Mango"} amount={3000} month={"March"} year={2024} />
            <ContractCard title={"Jute"} amount={2143} month={"January"} year={2024} />
            <ContractCard title={"Onion"} amount={2456} month={"July"} year={2024} />
            <ContractCard title={"Potato"} amount={1978} month={"April"} year={2024} />
            <ContractCard title={"Sugarcane"} amount={4652} month={"May"} year={2024} />
            <ContractCard title={"Corn"} amount={3562} month={"August"} year={2024} />
          </div>
        </div>
      ) : (
        <div>
          {/* Add content specific to the 'Sell' tab here */}
          <div className="flex justify-center">
            <h2 className="text-xl font-bold text-green-600 mt-5">Sell Market Content</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketPlace;
