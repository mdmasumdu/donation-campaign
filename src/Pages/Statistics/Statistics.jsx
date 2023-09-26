

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { getlocalstoarageitem } from "../../Utilities/Utility";
import { useEffect, useState } from "react";






const COLORS = [ "#00C49F", "#FF444A"];

const RADIAN = Math.PI / 12;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
} ) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const Statistics = () => {

    


    const [statistics,setStatistics] = useState(0)
    const [remaingstat,setRemaningstat] = useState(0);





    useEffect(()=>{

        const savedid =  getlocalstoarageitem()
  
       setStatistics(savedid.length)
       const remaining = 12 - savedid.length;
       setRemaningstat(remaining)
  
  
       
  
      },[])


      const data = [  
        { name: "My Contribution", value:statistics },
      { name: "Others contribution", value: remaingstat,}
    ]
      
      
      
      console.log(statistics,remaingstat)
    return (
        <div className="flex flex-col items-center ml-10">

            <PieChart width={450} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={170}
        fill="#8884d8"
        dataKey= 'value'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip></Tooltip>
    
    </PieChart>

    <div>
      <p className="flex items-center gap-5">Your Donation: <svg width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="12" rx="2" fill="#00C49F"/>
</svg> Total Donation: <svg width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="12" rx="2" fill="#FF444A"/>
</svg>

</p>
    </div>

        </div>
    );
};

export default Statistics;